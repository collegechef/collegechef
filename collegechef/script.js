var recipes = [];
$.getJSON("recipes.json", function(data){
  for(var i = 0; i < data.length; i++){
    recipes[i] = {};
    recipes[i].name = data[i].name;
    recipes[i].ingredients = data[i].ingredients;
    recipes[i].steps = data[i].steps;
    recipes[i].type = data[i].type;
    recipes[i].time = data[i].time;
    recipes[i].servings = data[i].servings;
    recipes[i].cost = data[i].cost;
  }

  showData();
});

function showData(){
  var heading = document.getElementById("testtitle");
  heading.innerHTML = recipes[0].name;
}
