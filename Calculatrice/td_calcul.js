function bma() {
  document.getElementById("affichage").value = "OFF";
}

function bclear() {
  document.getElementById("affichage").value = "";
}

function bdel() {
  var txt = document.getElementById("affichage").value;
  document.getElementById("affichage").value = txt.substr(0, txt.length - 1);
}

function solve() {
  let x = document.getElementById("affichage").value;
  let y = eval(x);
  document.getElementById("affichage").value = y;
}

function aff(val) {
  if (document.getElementById("affichage").value == "OFF") {
    bclear();
  }
  var str = document.getElementById("affichage").value;
  var lastChar = str.charAt(str.length - 1);
  if (
    (lastChar == "/" ||
      lastChar == "*" ||
      lastChar == "-" ||
      lastChar == "+") &&
    (val == "/" || val == "*" || val == "-" || val == "+")
  ) {
    document.getElementById("affichage").value += "";
  } else {
    document.getElementById("affichage").value += val;
  }
}
