const menu = {
  generateRandomMeal : function(){
    const appetizer = getRandomDishFromCourse('appetizers');
    const main = getRandomDishFromCourse('mains');
    const dessert = getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your 3 course meal is ${appetizer.name},${main.name},${dessert.name}.\n The total price is R${totalPrice}.`;
  },

  getRandomDishFromCourse : function(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      dish : dishName,
      price : dishPrice
    };
    return this._courses[courseName].push(dish);
  },

  get courses() {
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts
    }
  },
  
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
    get appetizers(){
     return this._courses.appetizers;
    }, 
    set appetizers(appetizerIn){
      if (typeof appetizerIn === 'string'){
        this.appetizers = appetizerIn;
      }
    },
    get mains(){
      return this._courses.mains;
    }, 
    set mains(mainIn){
      if (typeof mainIn === 'string'){
        this.mains = mainIn;
      }
    },
    get desserts(){
      return this._courses.desserts;
    }, 
    set desserts(dessertIn){
      if (typeof dessertIn === 'string'){
        this.desserts = dessertIn;
      }
    }
  }
}

menu.addDishToCourse('appetizers', 'Nachos', 49.99);
menu.addDishToCourse('mains', 'Steak & Chips', 89.99);
menu.addDishToCourse('desserts', 'Cream Brulee', 39.99);
const meal = menu.generateRandomMeal();
console.log(meal);