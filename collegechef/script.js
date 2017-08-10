
var heading = document.getElementById("testtitle");
heading.innerHTML = recipes[0].name;

function gid(a_id) {};

/**function search(input) {
  var results = [];
  var input = document.getElementById("input");
  for (var i=0; i < recipes.length; i++) {
    var keyword = "kimi";
    for (keyword in recipes[i].keywords){
      if (input.value === recipes[i].keywords[keyword]){
        results.push(" " + recipes[i].name);
        results.push(" time: " + recipes[i].time);
        results.push(" cost: " + recipes[i].cost);
      }
    }
  }
  document.getElementById("testtitle").innerHTML = results;
};**/

function search(input) {
  var x="";
  var input = document.getElementById("input");
  for (var i=0; i < recipes.length; i++) {
    var keyword = "kimi";
    for (keyword in recipes[i].keywords){
      if (input.value === recipes[i].keywords[keyword]){
        x = x + "<h1>" + recipes[i].name + "</h1>" + "<br>" + "<h3>time: " + recipes[i].time + "</h3>" + "<br>" + "<h3>cost: " + recipes[i].cost + "</h3>";
      }
    }
  }
  document.getElementById("testtitle").innerHTML = x;
};



//if (input.value === recipes[i].name) {
  //document.getElementById("testtitle").innerHTML = recipes[i].name;
//}
