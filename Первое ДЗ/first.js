var ref = document.createElement("div");

function timer(func, msg) {
  console.time(msg);
  func();
  console.timeEnd(msg);
}

var classListAdd = function(){ref.classList.add = "class";};
var className = function(){ref.className = "class";}; 
timer(className, "className")
timer(classListAdd, "classList")