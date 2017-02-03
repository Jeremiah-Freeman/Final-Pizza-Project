
//Business Logic

var orderSize = [];
var theOrderToppings = [];


function add(a , b){
  return a+b;
}


function Pizza(size, toppings) {
         this.pizzaSize = size;
         this.toppings = toppings;
};


Pizza.prototype.calculate = function () {
  var joinToppings = orderSize.concat(theOrderToppings);
  var price = joinToppings.reduce(add , 0);
  return price;
};


var newPizza = new Pizza(orderSize,theOrderToppings);



// //////////////////////////////////////////////////////////////////////////



//front-end logic
$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
     event.preventDefault();
    var pizzaSize = $("input:radio[name=size]:checked").each(function() {
      orderSize.push(parseInt($(this).val()));
      var orderToppings = $("input:checkbox[name=topping]:checked").each(function() {
        theOrderToppings.push(parseInt($(this).val()));
        var price = newPizza.calculate();
        $("#output").text(price);
      });
    });
  });
});
