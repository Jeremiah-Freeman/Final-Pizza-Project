function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}








$(document).ready(function) {
  $("#sizeOrder").submit(function(event) {
   event.preventDefault();
   var pizzaSize = $(".pizzaSize").val();
   var orderToppings = $(".orderToppings").val();
   console.log(orderToppings);
}
