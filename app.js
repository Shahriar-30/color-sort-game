// div for color pipe
let rowBoxes = document.querySelectorAll(".row");
let row_1 = document.querySelector(".row_1");
let row_2 = document.querySelector(".row_2");
let row_3 = document.querySelector(".row_3");
let row_4 = document.querySelector(".row_4");
let row_5 = document.querySelector(".row_5");
let nickName = document.querySelector(".name");

// array with colors
let arr_1;
let arr_2;
let arr_3;
let arr_4;
let arr_5;

let validator = ()=> { 
  let data = localStorage.getItem("name");
  let input_name = document.querySelector(".input_name");
  if (!data) {
    input_name.classList.remove("hidden")
  } else {
    input_name.classList.add("hidden");
    nickName.innerHTML = data
  }
}
validator()

function allLog() {
  row_1.innerHTML = "";
  row_2.innerHTML = "";
  row_3.innerHTML = "";
  row_4.innerHTML = "";
  row_5.innerHTML = "";

  arr_1.forEach((e) => {
    let div = document.createElement("div");
    div.classList = `box ${e}`;
    row_1.appendChild(div);
  });

  arr_2.forEach((e) => {
    let div = document.createElement("div");
    div.classList = `box ${e}`;
    row_2.appendChild(div);
  });

  arr_3.forEach((e) => {
    let div = document.createElement("div");
    div.classList = `box ${e}`;
    row_3.appendChild(div);
  });

  arr_4.forEach((e) => {
    let div = document.createElement("div");
    div.classList = `box ${e}`;
    row_4.appendChild(div);
  });

  arr_5.forEach((e) => {
    let div = document.createElement("div");
    div.classList = `box ${e}`;
    row_5.appendChild(div);
  });
}

function randomColor() {
  arr_1 = ["green", "red"];
  arr_2 = ["red", "yellow"];
  arr_3 = ["red", "green"];
  arr_4 = ["yellow", "green"];
  arr_5 = ["yellow"];
  allLog();
}

randomColor();
allLog();

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

let patterns = [
  ["red", "red", "red"],
  ["green", "green", "green"],
  ["yellow", "yellow", "yellow"],
];

let selectedEle;


rowBoxes.forEach((box) => {
  box.addEventListener("click", function make(e) {
    if (!selectedEle) {
      // box.classList.toggle("margin_bottom");
      selectedEle = box;
      console.log(selectedEle);
    } else {
      // selectedEle.classList.toggle("margin_bottom");
      if (box == selectedEle) {
        selectedEle = "";
        // selectedEle.classList.remove("margin_bottom");
        console.log("removed child");
        console.log(selectedEle);
      } else {
        let arraySelected = selectedEle.classList[2];
        let arrayChange = box.classList[2];

        if (eval(arrayChange).length >= 3) {
          alert("What are you doing!");
        } else {
          let getValue = eval(arraySelected)[eval(arraySelected).length - 1];
          let changeValue = eval(arrayChange)[eval(arrayChange).length - 1];

          if (!changeValue || getValue == changeValue) {
            eval(arraySelected).pop();
            eval(arrayChange).push(getValue);
          } else {
            alert("What are you doing!");
          }
          selectedEle = "";

          let matchCount = 0;
          let allArr = [arr_1, arr_2, arr_3, arr_4, arr_5];

          for (let arr of allArr) {
            for (let pattern of patterns) {
              if (arraysEqual(arr, pattern)) {
                matchCount++;
                break; // Move to the next array after finding a match
              }
            }
          }

          if (matchCount >= 3) {
            console.log(matchCount)
            setTimeout(() => {
              alert("match Win");
            }, 500);
          }
        }
      }
    }
    allLog();
  });
});


function setName() {
  let value = document.querySelector("#nickname").value;
  if (!value) {
    alert("Enter Your Nick Name To Continue")
  } else {    
    localStorage.setItem("name", value);
    let input_name = document.querySelector(".input_name");
    input_name.classList.add("hidden")
    validator()
  }
}