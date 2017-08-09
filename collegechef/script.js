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
  var input = document.getElementById("input");
  for (var i=0; i < recipes.length; i++) {
    if (input.value === recipes[i].name) {
      document.getElementById("testtitle").innerHTML = recipes[i].name;
    }
  }
};
