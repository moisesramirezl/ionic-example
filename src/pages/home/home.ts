import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  private milkQuantity = 0;
  private carbQuantity = 0;
  private oilQuantity = 0;
  private fruitQuantity = 0;
  private vegetableQuantity = 0;
  private proteinQuantity = 0;

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('milk').then((val) => {
      this.milkQuantity = val || 0;
    });

    storage.get('carb').then((val) => {
      this.carbQuantity = val || 0;
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

  private incrementMilk(quantity = 1){
    this.milkQuantity += quantity;
    this.storage.set('milk', this.milkQuantity);
  }

  private incrementCarb(quantity = 1){
    this.carbQuantity += quantity;
    this.storage.set('carb', this.carbQuantity);
  }

  private incrementOil(quantity = 1){
    this.oilQuantity += quantity;
    this.storage.set('oil', this.oilQuantity);
  }

  private incrementFruit(quantity = 1){
    this.fruitQuantity += quantity;
    this.storage.set('fruit', this.fruitQuantity);
  }

  private incrementVegetable(quantity = 1){
    this.vegetableQuantity += quantity;
    this.storage.set('vegetable', this.vegetableQuantity);
  }

  private incrementProtein(quantity = 1){
    this.proteinQuantity += quantity;
    this.storage.set('protein', this.proteinQuantity);
  }
  private clearAllMeal(){
    this.storage.set('milk', 0);
    this.milkQuantity = 0;
    this.storage.set('carb', 0);
    this.carbQuantity = 0;
    this.storage.set('oil', 0);
    this.oilQuantity = 0;
    this.storage.set('fruit', 0);
    this.fruitQuantity = 0;
    this.storage.set('vegetable', 0);
    this.vegetableQuantity = 0;
    this.storage.set('protein', 0);
    this.proteinQuantity = 0;
  }

  public addQuantity(meal){
    if(meal.nutritionFacts[0].type === 'protein'){
      this.incrementProtein();
    }else if (meal.nutritionFacts[0].type === 'carb'){
      this.incrementCarb();
    }else if (meal.nutritionFacts[0].type === 'milk'){
      this.incrementMilk();
    }else if (meal.nutritionFacts[0].type === 'vegetable'){
      this.incrementVegetable();
    }else if (meal.nutritionFacts[0].type === 'fruit'){
      this.incrementFruit();
    }else if (meal.nutritionFacts[0].type === 'oil'){
      this.incrementOil();
    }
    meal.name = '';
    meal.quantity = '';
  }

  private mealList:Array<any>;

  private initializeItems(){
    this.mealList = [
      {"name":"Pollo", "quantity":"200 gr", "nutritionFacts" : [{"type":"protein"}]},
      {"name":"Avena", "quantity":"1/4 taza", "nutritionFacts" : [{"type":"carb"}]},
      {"name":"Quesillo", "quantity":"3 rebanadas", "nutritionFacts" : [{"type":"milk"}]},
      {"name":"Zanahoria", "quantity":"1/3 taza", "nutritionFacts" : [{"type":"vegetable"}]},
      {"name":"Pasas", "quantity":"35 unidades", "nutritionFacts" : [{"type":"fruit"}]},
      {"name":"Mani", "quantity":"1 puñado", "nutritionFacts" : [{"type":"oil"}]}
    ]
  }

  public onCancel(searchbar){
    this.mealList = [];
    console.log(">>>>>> Cancel");
  }

  public getItems(searchbar) {
    this.initializeItems();
    var q = searchbar.srcElement.value;
    console.log(">>>>>> getItems " + q);

    if (!q){ 
      this.mealList = [];
      return false;
    }
  
    this.mealList = this.mealList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });  
  }
}
