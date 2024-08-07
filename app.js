// div for color pipe
let rowBoxes = document.querySelectorAll(".row");
let row_1 = document.querySelector(".row_1");
let row_2 = document.querySelector(".row_2");
let row_3 = document.querySelector(".row_3");
let row_4 = document.querySelector(".row_4");
let row_5 = document.querySelector(".row_5");
let nickName = document.querySelector(".name");

let point = document.querySelector(".point");
let winBox = document.querySelector(".winBox");

let storeBTN = document.querySelector(".store");
let store = document.querySelector(".store_body");
let store_close_btn = document.querySelector(".close_store");

let bgc = document.querySelectorAll(".bgc");
let storeItem = document.querySelectorAll(".store_item");

let close_tip_btn = document.querySelector(".close_tip");
let close_tip = document.querySelector(".wrong_input_container");

// array with colors
let arr_1;
let arr_2;
let arr_3;
let arr_4;
let arr_5;

// color json
let colorJson = [
  {
    id: 1,
    color: "pink",
  },
  {
    id: 2,
    color: "white",
  },
];

function getLocal(name) {
  return localStorage.getItem(name);
}

function setLocal(name, value) {
  return localStorage.setItem(name, value);
}

function toggle(ele) {
  ele.classList.toggle("hidden");
}

storeBTN.addEventListener("click", () => {
  toggle(store);
});
store_close_btn.addEventListener("click", ()=> {
  toggle(store);
})
close_tip_btn.addEventListener("click", ()=> {
  toggle(close_tip)
})

let beforeLabel;

bgc.forEach((toggle) => {
  toggle.addEventListener("change", () => {
    const SelectedLabel = document.querySelector(`label[for="${toggle.id}"]`);
    const selectedLabel = SelectedLabel.querySelector(".store_item");
    const lock = selectedLabel.querySelector(".lock");
    const use = selectedLabel.querySelector(".use");

    const buyBtn = document.querySelector(".buy_item");

    if (!beforeLabel) {
      beforeLabel = selectedLabel;
    }
    if (beforeLabel == selectedLabel) {
      selectedLabel.classList.add("border");
    } else {
      beforeLabel.classList.remove("border");
      selectedLabel.classList.add("border");
      beforeLabel = selectedLabel;
    }

    if (lock) {
      let point = getLocal("point");
      if (point >= 5) {
        buyBtn.innerHTML = "Buy Now";

        buyBtn.addEventListener("click", () => {
          if ((lock.classList[0] = "lock")) {
            lock.classList.remove("lock");
            lock.classList.add("use");
            lock.innerHTML = "";
            let colors = JSON.parse(getLocal("colors"));
            let newColor = toggle.value;
            colors.push(newColor);
            setLocal("colors", JSON.stringify(colors));
            setLocal("bg", newColor);
            setLocal("point", point - 5);
            checkPointValue();

            buyBtn.innerHTML = "Use It";
            window.location.reload();
          }
          console.log(lock.classList[0]);
        });
      } else {
        buyBtn.innerHTML = `Need More ${5 - point}💰`;
      }
      console.log(lock, toggle, selectedLabel);
    }
    if (use) {
      let bg = getLocal("bg");
      if (toggle.value == bg) {
        buyBtn.innerHTML = "Already In Use";
      } else {
        buyBtn.innerHTML = "Use It";
      }
      buyBtn.addEventListener("click", () => {
        let selectedColor = toggle.value;
        setLocal("bg", selectedColor);
        window.location.reload();
      });
    }
  });

});

function checkBgValue() {
  let colorValue;
  colorValue = getLocal("bg");
  if (!colorValue) {
    setLocal("bg", "pink");
    setLocal("colors", JSON.stringify(["pink"]));
    colorValue = getLocal("bg");
  } else {
    colorValue = getLocal("bg");
    let colors = JSON.parse(getLocal("colors"));
    colors.map((e) => {
      let colorDiv = document.querySelector(`.${e}`);
      let lockDiv = colorDiv.querySelector(".lock");
      if (lockDiv) {
        lockDiv.classList.remove("lock");
        lockDiv.classList.add("use");
        lockDiv.innerHTML = "";
      }
    });
  }
  document.body.style.backgroundColor = colorValue;
}
checkBgValue();

function checkPointValue() {
  let pointValue;
  pointValue = getLocal("point");
  if (!pointValue) {
    setLocal("point", 0);
    pointValue = getLocal("point");
  }
  point.innerHTML = pointValue;
}
checkPointValue();



function setName() {
  let value = document.querySelector("#nickname").value;
  if (!value) {
    alert("Enter Your Nick Name To Continue");
  } else {
    localStorage.setItem("name", value);
    let input_name = document.querySelector(".input_name");
    input_name.classList.add("hidden");

    validator();
  }
}

let validator = () => {
  let data = localStorage.getItem("name");
  let input_name = document.querySelector(".input_name");
  if (!data) {
    input_name.classList.remove("hidden");
  } else {
    input_name.classList.add("hidden");
    nickName.innerHTML = data;
  }
};
validator();

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
  let randomNum = Math.floor(Math.random() * (16 - 1 + 1)) + 1;

  switch (randomNum) {
    case 1:
      arr_1 = ["green", "red"];
      arr_2 = ["red", "yellow"];
      arr_3 = ["yellow", "green"];
      arr_4 = ["green", "red"];
      arr_5 = ["yellow"];
      break;
    case 2:
      arr_1 = ["red", "yellow"];
      arr_2 = ["green", "red"];
      arr_3 = ["yellow", "green"];
      arr_4 = ["red", "yellow"];
      arr_5 = ["green"];
      break;
    case 3:
      arr_1 = ["yellow", "green"];
      arr_2 = ["red", "yellow"];
      arr_3 = ["green", "red"];
      arr_4 = ["yellow", "green"];
      arr_5 = ["red"];
      break;
    case 4:
      arr_1 = ["green", "yellow"];
      arr_2 = ["red", "green"];
      arr_3 = ["yellow", "red"];
      arr_4 = ["green", "yellow"];
      arr_5 = ["red"];
      break;
    case 5:
      arr_1 = ["red", "green"];
      arr_2 = ["yellow", "red"];
      arr_3 = ["green", "yellow"];
      arr_4 = ["red", "yellow"];
      arr_5 = ["green"];
      break;
    case 6:
      arr_1 = ["yellow", "red"];
      arr_2 = ["green", "yellow"];
      arr_3 = ["red", "green"];
      arr_4 = ["yellow", "green"];
      arr_5 = ["red"];
      break;
    case 7:
      arr_1 = ["green", "yellow"];
      arr_2 = ["red", "green"];
      arr_3 = ["yellow", "red"];
      arr_4 = ["green", "red"];
      arr_5 = ["yellow"];
      break;
    case 8:
      arr_1 = ["red", "green"];
      arr_2 = ["yellow", "red"];
      arr_3 = ["green", "yellow"];
      arr_4 = ["red", "yellow"];
      arr_5 = ["green"];
      break;
    case 9:
      arr_1 = ["green", "red"];
      arr_2 = ["red", "yellow"];
      arr_3 = ["yellow", "green"];
      arr_4 = ["green", "yellow"];
      arr_5 = ["red"];
      break;
    case 10:
      arr_1 = ["green"];
      arr_2 = ["red", "yellow"];
      arr_3 = ["yellow", "green"];
      arr_4 = ["yellow", "red"];
      arr_5 = ["green", "red"];
      break;
    case 11:
      arr_1 = ["yellow", "green"];
      arr_2 = ["red", "green"];
      arr_3 = ["green", "yellow"];
      arr_4 = ["red"];
      arr_5 = ["red", "yellow"];
      break;
    case 12:
      arr_1 = ["green", "yellow"];
      arr_2 = ["red"];
      arr_3 = ["green", "red"];
      arr_4 = ["yellow", "green"];
      arr_5 = ["red", "yellow"];
      break;
    case 13:
      arr_1 = ["green", "red"];
      arr_2 = ["yellow", "red"];
      arr_3 = ["green", "yellow"];
      arr_4 = ["green"];
      arr_5 = ["red", "yellow"];
      break;
    case 14:
      arr_1 = ["red", "green"];
      arr_2 = ["yellow", "green"];
      arr_3 = ["yellow"];
      arr_4 = ["green", "red"];
      arr_5 = ["red", "yellow"];
      break;
    case 15:
      arr_1 = ["yellow", "green"];
      arr_2 = ["red"];
      arr_3 = ["green", "red"];
      arr_4 = ["red", "yellow"];
      arr_5 = ["green", "yellow"];
      break;
    case 16:
      arr_1 = ["yellow"];
      arr_2 = ["green", "red"];
      arr_3 = ["yellow", "green"];
      arr_4 = ["green", "red"];
      arr_5 = ["red", "yellow"];
      break;
    default:
      arr_1 = ["red", "green"];
      arr_2 = ["yellow", "red"];
      arr_3 = ["green", "red"];
      arr_4 = ["green", "yellow"];
      arr_5 = ["yellow"];
      break;
  }
  allLog();
}

randomColor();
allLog();

let removeWinBox = () => {
  winBox.classList.add("hidden");
  randomColor();
  allLog();
};

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
      box.classList.toggle("margin_bottom");
      selectedEle = box;
    } else {
      selectedEle.classList.toggle("margin_bottom");
      if (box == selectedEle) {
        selectedEle = "";
        // selectedEle.classList.remove("margin_bottom");
        console.log("removed child");
        console.log(selectedEle);
      } else {
        let arraySelected = selectedEle.classList[2];
        let arrayChange = box.classList[2];

        if (eval(arrayChange).length >= 3) {
          toggle(close_tip)
        } else {
          let getValue = eval(arraySelected)[eval(arraySelected).length - 1];
          let changeValue = eval(arrayChange)[eval(arrayChange).length - 1];

          if (!changeValue || getValue == changeValue) {
            eval(arraySelected).pop();
            eval(arrayChange).push(getValue);
          } else {
          toggle(close_tip)
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
            setTimeout(() => {
              winBox.classList.remove("hidden");
              let point = getLocal("point");
              let calculate = Number(point) + 1;
              setLocal("point", calculate);
              checkPointValue();
              console.log("done");
            }, 500);
          }
        }
      }
    }
    allLog();
  });
});
