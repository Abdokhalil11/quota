let myRequest = new XMLHttpRequest();
let number = document.querySelector(".heading span");
let q = document.querySelector("q");
let change = document.querySelector(".dice");
let count = 0;
myRequest.onreadystatechange = function () {
  if (myRequest.readyState === 4 && myRequest.status === 200) {
    let data = JSON.parse(myRequest.responseText);
    change.onclick = function () {
      q.innerHTML = data[count][count + 1];
      number.innerHTML = count + 1;
      count++;
    };
    if (count < 12) {
      q.innerHTML = data[10][11]
      number.innerHTML = 117;
    }
  }
};
myRequest.open("GET", "qutoa.json");
myRequest.send();
