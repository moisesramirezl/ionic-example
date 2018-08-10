import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private milkQuantity = 0;
  private breadQuantity = 0;
  private oilQuantity = 0;
  private fruitQuantity = 0;
  private vegetableQuantity = 0;
  private proteinQuantity = 0;

  private incrementMilk(){
    this.milkQuantity++;
  }

  private incrementBread(){
    this.breadQuantity++;
  }

  private incrementOil(){
    this.oilQuantity++;
  }

  private incrementFruit(){
    this.fruitQuantity++;
  }

  private incrementVegetable(){
    this.vegetableQuantity++;
  }

  private incrementProtein(){
    this.proteinQuantity++;
  }
  private clearAllMeal(){
    this.milkQuantity = 0;
    this.breadQuantity = 0;
    this.oilQuantity = 0;
    this.fruitQuantity = 0;
    this.vegetableQuantity = 0;
    this.proteinQuantity = 0;
  }
}
