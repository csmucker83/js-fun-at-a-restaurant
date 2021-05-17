function nameMenuItem(food){
  console.log(food)
  return `Delicious ${food}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
   name: name,
   price: price,
   type: type,
  }
  return menuItem;
};

//my mentor helped with this
function addIngredients(ingredient, ingredients) {
 if (!ingredients.includes(ingredient)) {
  ingredients.push(ingredient);
 };
}

function formatPrice (breakfast, dessert) {

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  //decreasePrice,
  //createRecipe
};
