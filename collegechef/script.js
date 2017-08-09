var heading = document.getElementById("testtitle");
heading.innerHTML = recipes[0].name;

/***function search(input){
  var input, filter, ul, li, a, i;
  input = document.getElementById("input");
  filter = input.value.toUpperCase();
  for (i = 0; i < recipes.length; i++) {
    if()
  }
}
***/
function search(input) {
  var results = [];
  var input = document.getElementById("input");
  for (var i=0; i < recipes.length; i++) {
    var keyword = "kimi";
    for (keyword in recipes[i].keywords){
      if (input.value === recipes[i].keywords[keyword]){
        results.push(recipes[i].name);
      }
    }
  }
  document.getElementById("testtitle").innerHTML = results;
};





//if (input.value === recipes[i].name) {
  //document.getElementById("testtitle").innerHTML = recipes[i].name;
//}
