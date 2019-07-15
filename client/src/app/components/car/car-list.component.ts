import { Component, OnInit } from '@angular/core';
import { CarService } from "@app/services/car/car.service";
import { GiphyService } from "@app/services/giphy/giphy.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<any>;

  constructor( private _carService: CarService, private _giphyService: GiphyService) { }

  ngOnInit() {
    this._carService.getAll().subscribe( data => {
      this.cars = data;

      for (const car of this.cars) {
        this._giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }

}
