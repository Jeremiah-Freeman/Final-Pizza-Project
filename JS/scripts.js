function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.toppings = toppings;
}

var newOrderSize = [];
var newOrderToppings = [];
var pizzaSize = newOrderSize;
var toppings = newOrderToppings;
var orderedPizza = new Pizza(pizzaSize,toppings);
var total = [];

Pizza.prototype.calculate = function() {
for( var i = 0; i < pizzaSize.length; i++) {
  total.push(pizzaSize[i]+toppings[i]);
  }
}//

console.log(total);






//front-end logic
$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
   event.preventDefault();
   var pizzaSize = $("input:radio[name=size]:checked").each(function(){
    newOrderSize.push($(this).val());
   var orderToppings = $("input:checkbox[name=topping]:checked").each(function(){
     newOrderToppings.push(parseInt($(this).val()));
     var price = orderedPizza.calculate();
     console.log(price);
    // console.log(finalOrder);
   });
   });
  //  console.log(orderToppings);
 });
});
