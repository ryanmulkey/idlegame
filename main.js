//variable declarations
var points = 10;
var multi = 1; 
var bots = 0;
var click_value = 1; 

//point up functions
function click(value) {
  points = points + value;
  document.getElementById("points").innerHTML = points;
}
function points_up(num) {
  points = points + num;
  document.getElementById("points").innerHTML = points;
}

//purchase functions
function buy_bots(){
  var bot_cost = Math.floor(10 * Math.pow(1.1, bots));
  if(points >= bot_cost){
    bots = bots + 1;
    points = points - bot_cost;
    document.getElementById('bots').innerHTML = bots;
    document.getElementById('points').innerHTML = points;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, bots));
  document.getElementById('bot_cost').innerHTML = nextCost;
}
function buy_multi() {
  var multi_cost = Math.floor(20 * Math.pow(1.15, multi))
  if(points >= multi_cost){
    multi = multi + 1;
    points = points - multi_cost;
    document.getElementById('multi').innerHTML = multi;
    document.getElementById('points').innerHTML = points;
  };
  var nextCost = (20 * Math.pow(1.2, multi));
  document.getElementById('multi_cost').innerHTML = nextCost;
}

  function buy_click() {
  var click_cost = Math.floor(5 * Math.pow(1.1, click_value))
  if(points >= click_cost){
    click_value = click_value + 1;
    points = points - click_cost;
    document.getElementById('click_value').innerHTML = click_value;
    document.getElementById('points').innerHTML = points;
  };

  var nextCost = (20 * Math.pow(1.2, multi));
  document.getElementById('click_multi_cost').innerHTML = nextCost;
  }
function decimal(input) {
  var output = Math.round(input)
  return output;
}

//bot mutli
window.setInterval(function(){
  decimal(multi_cost);
  decimal(click_cost);
  if(multi >= 2)
  points_up(bots * multi);
  else
  points_up(bots);  
}, 1000);
