//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

function Ticket(movie, time, age) {
  this.movie=movie;
  this.time=time;
  this.age=age;
}

Ticket.prototype.getPrice=function() {
  var price=10.00;
  //calculate age discounts
  if(this.age==="Child ") {price*=.5;}
  if(this.age==="Senior ") {price*=.8;}
  //calcualte matinee discounts
  if((this.time==="11:00 am ")||(this.time==="1:00 pm ")||(this.time==="3:00 pm ")) {
    price*=.75;
  }
  //calculate evening premium
  if((this.time==="7:00 pm ")||(this.time==="9:00 pm ")) {
    price+=5;
  }

  return price;
}

$("select").change(function() {
  var movieOptions=[];
  $("select option:selected").each(function() {
    movieOptions.push($(this).text() + " ");
  });
  var newTicket = new Ticket(movieOptions[0],movieOptions[1],movieOptions[2]);
  $("#yourTicket").text(newTicket.movie + newTicket.time + newTicket.age + " $" + newTicket.getPrice().toFixed(2));
  });
