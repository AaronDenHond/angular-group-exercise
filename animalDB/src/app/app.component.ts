import { Component } from '@angular/core';
import { Animal } from './animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Zoo of Losers';
  animalClasses: any = ['Mammal', 'Amphibian', 'Bird', 'Reptiles', 'Insects'];
  animal = new Animal('', '', 0, '', '', '');
  onSubmit() {
    console.log(this.animal);
  }
}
