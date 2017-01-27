function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}








$(document).ready(function() {
  $("#sizeOrder").submit(function(event) {
   event.preventDefault();
   var pizzaSize = $("input:radio[name=flavor]:checked").val();
   var orderToppings = $("input[type=checkbox]:checked").val();
   console.log(orderToppings);
  })
})
