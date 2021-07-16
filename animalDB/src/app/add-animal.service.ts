import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AddAnimalService {

  constructor( private _http: HttpClient) {}

  url = '';

  addAnimal(animal : Animal) {
    return this._http.post<any>(this.url, animal)
  }
}
