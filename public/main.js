function test() {
  alert("It is working!");
}

//
//
//

var btnContainer = document.getElementById("menu-div");
var Btn = btnContainer.getElementsByClassName("Btn");

for (var i = 0; i < Btn.length; i++) {
  Btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//
//
//

var divs = ["menu1", "menu2", "menu3"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

//
//
//

// $(".Btn").click(function(e) {
//   e.preventDefault();
//   setContent($(this));
// });

// // set content on load
// $(".Btn.active").length && setContent($(".Btn.active"));

// function setContent(el) {
//   $(".Btn").removeClass("active");
//   $(".container").hide();

//   el.addClass("active");
//   $(el.data("rel")).show();
// }
