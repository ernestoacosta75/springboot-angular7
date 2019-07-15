import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { CarService } from "@app/services/car/car.service";
import { GiphyService } from "@app/services/giphy/giphy.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit, OnDestroy {

  car: any = {};
  sub: Subscription;

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router,
              private _carService: CarService, private _giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this._activatedRoute.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this._carService.get(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
            this._giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          }
          else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.goToList();
          }
        })
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToList() {
    this._router.navigate(['/car-list']);
  }

  save(form: NgForm) {
    this._carService.save(form).subscribe(result => {
      this.goToList();
    }, error => console.error(error));
  }

  remove(href) {
    this._carService.remove(href).subscribe(result => {
      this.goToList();
    }, error => console.error(error));
  }  
}
