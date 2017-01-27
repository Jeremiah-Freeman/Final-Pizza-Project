function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.toppings = toppings;
}

var newOrderSize = [];
var newOrderToppings = [];
var pizzaSize = newOrderSize;
var toppings = newOrderToppings;
var orderedPizza = new Pizza(pizzaSize,toppings);
var sum = [];

Pizza.prototype.calculate = function() {
for (var i = 0; i < orderedPizza.length; i++){

  sum += (orderedPizza[i]);
return sum

  };
};

  console.log(orderedPizza);



// orderedPizza.calculate();
// var finalOrder =
// console.log(orderedPizza);
// console.log(newPizza);

// console.log(newPizza);
// // var allToppings = ['vcheese','vpeperoni','vchicken','veggies','vmeatlovers']
//
// Pizza.prototype.shovetoppings = function() {
//   newPizza.push(newToppings)
// };



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
