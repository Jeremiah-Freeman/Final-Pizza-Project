function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

var newOrderSize = []
var newOrderToppings = []
var size = newOrderSize
var toppings = newOrderToppings
var newPizza = new Pizza(size,toppings);


console.log(toppings);
console.log(newPizza);
// var allToppings = ['vcheese','vpeperoni','vchicken','veggies','vmeatlovers']

Pizza.prototype.shovetoppings = function() {
  newPizza.push(newToppings)
};



$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
   event.preventDefault();
   var pizzaSize = $("input:radio[name=size]:checked").each(function(){
    newOrderSize.push($(this).val());
   var orderToppings = $("input:checkbox[name=topping]:checked").each(function(){
     newOrderToppings.push($(this).val());
   });
   });
  //  console.log(orderToppings);
 });
});
