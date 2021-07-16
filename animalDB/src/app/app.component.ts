import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { AddAnimalService } from './add-animal.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class AppComponent implements OnInit {
  allAnimals: any;
  title = 'Zoo of Losers';
  animalClasses: any = ['Mammal', 'Amphibian', 'Bird', 'Reptiles', 'Insects'];

  animal = new Animal('', '', '', '', '', '');

  constructor(private addAnimalService: AddAnimalService) {}

  ngOnInit(): any {
    this.getAllAnimals('http://localhost:9100/allAnimals'); // have to call the function with url/allAnimals
    // console.log(this.allAnimals);
  }
  flip: string = 'inactive';

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }

  onSubmit() {
    this.addAnimalService.addAnimal(this.animal).subscribe(
      (data) => console.log('It worked', data),
      (error) => console.log('It did not work', error)
    );

    this.getAllAnimals('http://localhost:9100/allAnimals');
  }

  public async getAllAnimals(url: string): Promise<any> {
    return await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.allAnimals = data));
  }
}
