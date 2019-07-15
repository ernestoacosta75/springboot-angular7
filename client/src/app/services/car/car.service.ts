/**
 * This custom Angular Service will be used to talk 
 * with the Cool Cars API.
 * 
 * The methods for adding, removing and updating talk to 
 * the endpoints providev by CarRepository and the @RepositoryRestResource annotation.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public API = "//localhost:8080"
  public CAR_API = this.API + "/cars";

  constructor( private _httpClient: HttpClient) { }

  /**
   * Returns the cars list.
   */
  getAll(): Observable<any> {
    return this._httpClient.get(this.API + "/cool-cars");
  }

  /**
   * Returns the car with that id. 
   */
  get(id: string){
    return this._httpClient.get(this.CAR_API + '/' + id);
  }

  /**
   * To save or update a car entity.
   */
  save(car: any): Observable<any> {
    let result: Observable<Object>;

    if (car['href']) {
      result = this._httpClient.put(car.href, car);
    }
    else {
      result = this._httpClient.post(this.CAR_API, car);
    }

    return result;
  }

  /**
   * To delete a car entity.
   */
  remove(href: string) {
    return this._httpClient.delete(href);
  }
}
