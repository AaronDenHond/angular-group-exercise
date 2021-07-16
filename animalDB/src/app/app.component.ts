import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { AddAnimalService } from "./add-animal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  allAnimals : any;
  title = 'Zoo of Losers';
  animalClasses: any = ['Mammal', 'Amphibian', 'Bird', 'Reptiles', 'Insects'];

  animal = new Animal('', '', '', '', '', '');

  constructor(private addAnimalService : AddAnimalService) {
  }

  ngOnInit() : any {
    this.getAllAnimals('http://localhost:9100/allAnimals') // have to call the function with url/allAnimals
    // console.log(this.allAnimals);
  }


  onSubmit() {
    this.addAnimalService.addAnimal(this.animal).subscribe(
      data => console.log('It worked', data),
      error => console.log('It did not work', error)
    )

    this.getAllAnimals('http://localhost:9100/allAnimals');
  }

  public async getAllAnimals (url : string) : Promise <any> {
    return await fetch(url, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(data => (this.allAnimals = data));

  }
}
