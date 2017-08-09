
var heading = document.getElementById("testtitle");
heading.innerHTML = recipes[0].name;

function gid(a_id) {
  return document.getElementById(a_id);
}

function close_all() {
  for (i=0; i<999; i++){
    var o = gid(recipes[i].name);
    if (o) {
      o.style.display = "none";
    }
  }
}

function find_my_div() {
  close_all();
  var input = document.getElementById("input");
  var o_edit = gid("input");
  var str_needle = str_needle.toUpperCase();

  if (str_needle != "") {
    for (i=0; i<999; i++) {
    var o = gid(recipes[i].name);
    if (o) {
      var str_haystack = o.innerHTML.toUpperCase();
      if (str_haystack.indexOf(str_needle) ==-1) {

      }
      else {
        o.style.display = "block";
      }
    }
    }
  }
}

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
