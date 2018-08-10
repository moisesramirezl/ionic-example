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
  private incrementMilk(){
    this.milkQuantity++;
  }

  private clearAllMeal(){
    this.milkQuantity = 0;
  }
}
