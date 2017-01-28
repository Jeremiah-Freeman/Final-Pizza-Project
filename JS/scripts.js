function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.toppings = toppings;
}

var newOrderSize = [];
var newOrderToppings = [];
var pizzaSize = newOrderSize;
var toppings = newOrderToppings;
var orderedPizza = new Pizza(pizzaSize,toppings);

var total = newOrderToppings.split('').map(function(item) {
  return parseInt(item, 10);

Pizza.prototype.calculate = function() {
for ( var i = 0; i < orderedPizza; i++) {
    if (pizzaSize === 7){
      return pizzaSize + 7;
    } else if (pizzaSize === 9){
      return pizzaSize + 9;
    } else if (pizzaSize === 11){
      return pizzaSize + 11;
    }
  }
}//


//front-end logic
$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
   event.preventDefault();
   var pizzaSize = $("input:radio[name=size]:checked").each(function(){
    newOrderSize.push($(this).val());
   var orderToppings = $("input:checkbox[name=topping]:checked").each(function(){
     newOrderToppings.push($(this).val());
     var price = orderedPizza.calculate();
     console.log(price);
    // console.log(finalOrder);
   });
   });
  //  console.log(orderToppings);
 });
});
