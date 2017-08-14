function search(input) {
  var x="";
  var input = document.getElementById("input");
  for (var i=0; i < recipes.length; i++) {
    var keyword = "kimi";
    for (keyword in recipes[i].keywords){
      if (input.value === recipes[i].keywords[keyword]){
        x = x + '<h1>' + recipes[i].name + "</h1>" + '<img src="' + recipes[i].htmlname + '.jpg" alt="' + recipes[i].name + '" align="left" style="width:170px;height:170px">' + "<h3>time: " + recipes[i].time + "</h3>" + "<h3>cost: " + recipes[i].cost + "</h3>" + '<a class="button" href="' + recipes[i].htmlname + '.html">Click here to see the full recipe!</a>';
      }
    }
  }
  if (x === ""){
    document.getElementById("testtitle").innerHTML = "sorry, no results. try another keyword!";
  }
  else {
  document.getElementById("testtitle").innerHTML = x;
  }
};

function initialize()  {
  var x="";
  var input = "all";
  for (var i=0; i < recipes.length; i++) {
    var keyword = "kimi";
    for (keyword in recipes[i].keywords){
      if (input === recipes[i].keywords[keyword]){
        x = x + '<h1>' + recipes[i].name + "</h1>" + '<img src="' + recipes[i].htmlname + '.jpg" alt="' + recipes[i].name + '" align="left" style="width:170px;height:170px">' + "<h3>time: " + recipes[i].time + "</h3>" + "<h3>cost: " + recipes[i].cost + "</h3>" + '<a class="button" href="' + recipes[i].htmlname + '.html">Click here to see the full recipe!</a>';
      }
    }
  }
  if (x === ""){
    document.getElementById("testtitle").innerHTML = "sorry, no results. try another keyword!";
  }
  else {
  document.getElementById("testtitle").innerHTML = x;
  }
};
