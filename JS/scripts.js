
var newOrderSize = [];
var newOrderToppings = [];
newOrderToppings.toString();
newOrderSize.toString();
console.log(newOrderToppings);


var thePizzaSize = newOrderSize;
var someToppings = parseInt(newOrderToppings,10);

function Pizza(size, toppings) {
         this.pizzaSize = size;
         this.toppings = toppings;
       };

var orderedPizza = new Pizza(newOrderSize,newOrderToppings);  //ordered pizza


//
pizza.prototype.calculate = function() {
    for ( var i = 0; i <= orderedPizza; i++ )
    orderedPizza[i] + orderedPizza[i];
//
// };







//front-end logic
$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
     event.preventDefault();


    var pizzaSize = $("input:radio[name=size]:checked").each(function() {
        newOrderSize.push($(this).val());
    var orderToppings = $("input:checkbox[name=topping]:checked").each(function() {
        newOrderToppings.push($(this).val());
      //  alert(orderToppings);
      //  var price = orderedPizza.calculate();
      //  console.log(price);

      });
    });
  });
});


//
