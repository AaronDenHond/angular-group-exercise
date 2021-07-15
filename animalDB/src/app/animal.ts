export class Animal {
  animalImage: string;
  animalName: string;
  animalAge: number;
  animalSpecies: string;
  animalClass: string;
  animalFood: string;

  public constructor(
    animalImage: string,
    animalName: string,
    animalAge: number,
    animalSpecies: string,
    animalClass: string,
    animalFood: string
  ) {
    this.animalImage = animalImage;
    this.animalName = animalName;
    this.animalAge = animalAge;
    this.animalSpecies = animalSpecies;
    this.animalClass = animalClass;
    this.animalFood = animalFood;
  }
}
