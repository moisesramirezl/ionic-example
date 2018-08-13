import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  private milkQuantity = 0;
  private breadQuantity = 0;
  private oilQuantity = 0;
  private fruitQuantity = 0;
  private vegetableQuantity = 0;
  private proteinQuantity = 0;

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('milk').then((val) => {
      this.milkQuantity = val || 0;
    });

    storage.get('bread').then((val) => {
      this.breadQuantity = val || 0;
    });

    storage.get('oil').then((val) => {
      this.oilQuantity = val || 0;
    });

    storage.get('fruit').then((val) => {
      this.fruitQuantity = val || 0;
    });

    storage.get('vegetable').then((val) => {
      this.vegetableQuantity = val || 0;
    });

    storage.get('protein').then((val) => {
      this.proteinQuantity = val || 0;
    });
  }

  private incrementMilk(){
    this.milkQuantity++;
    this.storage.set('milk', this.milkQuantity);
  }

  private incrementBread(){
    this.breadQuantity++;
    this.storage.set('bread', this.breadQuantity);
  }

  private incrementOil(){
    this.oilQuantity++;
    this.storage.set('oil', this.oilQuantity);
  }

  private incrementFruit(){
    this.fruitQuantity++;
    this.storage.set('fruit', this.fruitQuantity);
  }

  private incrementVegetable(){
    this.vegetableQuantity++;
    this.storage.set('vegetable', this.vegetableQuantity);
  }

  private incrementProtein(){
    this.proteinQuantity++;
    this.storage.set('protein', this.proteinQuantity);
  }
  private clearAllMeal(){
    this.storage.set('milk', 0);
    this.milkQuantity = 0;
    this.storage.set('bread', 0);
    this.breadQuantity = 0;
    this.storage.set('oil', 0);
    this.oilQuantity = 0;
    this.storage.set('fruit', 0);
    this.fruitQuantity = 0;
    this.storage.set('vegetable', 0);
    this.vegetableQuantity = 0;
    this.storage.set('protein', 0);
    this.proteinQuantity = 0;
  }
}
