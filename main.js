let themV = 1,
  operV = 0,
  num = new String(),
  num2 = new String(),
  result,
  w,
  opa,
  toggEle = document.getElementById("tog"),
  keypadEle = document.getElementById("keyp"),
  mainV = document.getElementById("here"),
  disp = document.getElementById("disp"),
  c;
toggEle.onclick = function () {
  themV++;
  if (themV === 4) {
    themV = 1;
  }
  if (themV === 2) {
    mainV.style.setProperty("--main-background", "hsl(0, 0%, 90%)");
    mainV.style.setProperty("--tog-keyp-background", "hsl(0, 5%, 81%)");
    mainV.style.setProperty("--screen-background", "hsl(0, 0%, 93%)");
    mainV.style.setProperty("--reset-del-backg", "hsl(185, 42%, 37%)");
    mainV.style.setProperty("--reset-del-shaw", "hsl(185, 58%, 25%)");
    mainV.style.setProperty("--eq-toggle-backg", "hsl(25, 98%, 40%)");
    mainV.style.setProperty("--eq-toggle-shaw", "hsl(25, 99%, 27%)");
    mainV.style.setProperty("--buttom-backg", "hsl(45, 7%, 89%)");
    mainV.style.setProperty("--buttom-shaw", "hsl(35, 11%, 61%)");
    mainV.style.setProperty("--main-color", "hsl(60, 10%, 19%)");
    mainV.style.setProperty("--bottom-color", "--main-color");
    mainV.style.setProperty("--reset-del-color", "#fff");
    mainV.style.setProperty("--eq-color", "#fff");
    toggEle.style.left = "50%";
    toggEle.style.transform = "translateY(-50%) translateX(-50%)";
  }
  if (themV === 3) {
    mainV.style.setProperty("--main-background", "hsl(268, 75%, 9%)");
    mainV.style.setProperty("--tog-keyp-background", "hsl(268, 71%, 12%)");
    mainV.style.setProperty("--screen-background", "hsl(268, 71%, 12%)");
    mainV.style.setProperty("--reset-del-backg", "hsl(281, 89%, 26%)");
    mainV.style.setProperty("--reset-del-shaw", " hsl(285, 91%, 52%)");
    mainV.style.setProperty("--eq-toggle-backg", "hsl(176, 100%, 44%)");
    mainV.style.setProperty("--eq-toggle-shaw", "hsl(177, 92%, 70%)");
    mainV.style.setProperty("--buttom-backg", "hsl(268, 47%, 21%)");
    mainV.style.setProperty("--buttom-shaw", "hsl(290, 70%, 36%)");
    mainV.style.setProperty("--main-color", "hsl(52, 100%, 62%)");
    mainV.style.setProperty("--bottom-color", "--main-color");
    mainV.style.setProperty("--reset-del-color", "#fff");
    mainV.style.setProperty("--eq-color", "hsl(198, 20%, 13%)");
    toggEle.style.left = "calc(100% - 16px)";
    toggEle.style.transform = "translateY(-50%)";
  }
  if (themV === 1) {
    mainV.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
    mainV.style.setProperty("--tog-keyp-background", "hsl(223, 31%, 20%)");
    mainV.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");
    mainV.style.setProperty("--reset-del-backg", "hsl(225, 21%, 49%)");
    mainV.style.setProperty("--reset-del-shaw", " hsl(224, 28%, 35%)");
    mainV.style.setProperty("--eq-toggle-backg", " hsl(6, 63%, 50%)");
    mainV.style.setProperty("--eq-toggle-shaw", " hsl(6, 70%, 34%)");
    mainV.style.setProperty("--buttom-backg", "hsl(30, 25%, 89%)");
    mainV.style.setProperty("--buttom-shaw", "hsl(28, 16%, 65%)");
    mainV.style.setProperty("--main-color", "#fff");
    mainV.style.setProperty("--bottom-color", "hsl(221, 14%, 31%)");
    mainV.style.setProperty("--reset-del-color", "--main-color");
    mainV.style.setProperty("--eq-color", "--main-color");
    toggEle.style.left = "2px";
    toggEle.style.transform = "translateY(-50%)";
  }
};
const calcFunctions = {
  cut(num) {
    let arr = num.toString().split("");
    arr.pop();
    return arr.join("");
  },
  dele() {
    if (operV === 0) {
      if (num.toString().length === 1) {
        num = 0;
        disp.innerHTML = +num;
        return 0;
      }
      num = this.cut(num);
      disp.innerHTML = +num;
    } else {
      if (num2.toString().length === 1) {
        num2 = 0;
        disp.innerHTML = +num2;
        return 0;
      }
      num2 = this.cut(num2);
      disp.innerHTML = +num2;
    }
  },
  add(n) {
    if (operV === 0 && num.toString().length < 10) {
      num = num.toString() + n;
      disp.innerHTML = num;
    }
    if (operV !== 0 && num2.toString().length < 10) {
      num2 = num2.toString() + n;
      disp.innerHTML = num2;
    }
  },
  eq(o) {
    if (operV !== 0 && o === "=") {
      let bag = eval(num + operV + num2);
      if (isNaN(bag) || bag === Infinity) {
        disp.innerHTML =
          bag === Infinity
            ? "Cannot Divide By Zero"
            : "Zero Divided By Zero Is Undefined";
        this.reset();
        return 0;
      }
      //   if (bag === "NaN") {
      //     disp.innerHTML = "Zero Divided By Zero Is Undefined";
      //     this.reset();
      //     return 0;
      //   }

      console.log(+num + operV + +num2 + "=" + bag);
      disp.innerHTML = bag;
      num = bag;
      num2 = "";
      operV = 0;
    } else {
      if (o === "x") {
        operV = "*";

        return 0;
      }
      operV = o;
    }
  },
  reset() {
    operV = 0;
    num = new String();
    num2 = new String();
  },
};

keypadEle.onclick = (e) => {
  c = e.target.innerHTML;
  if (!isNaN(c)) {
    calcFunctions.add(c);
  } else if (c.length === 1) {
    if (c === ".") {
      if (operV !== 0 && !num2.toString().includes(".")) {
        num2 = num2 + c;
      } else if (!num.toString().includes(".")) {
        num = num + c;
        disp.innerHTML = num;
      }
    } else {
      calcFunctions.eq(c);
    }
  } else {
    if (c === "RESET") {
      calcFunctions.reset();
      disp.innerHTML = "0";
    } else {
      calcFunctions.dele();
    }
  }
};

document.onkeydown = function (e) {
  e = e || window.event;
  w = e.keyCode - 48;

  if (w < 10 && w >= 0) {
    calcFunctions.add(w);
  } else {
    switch (w) {
      case -40:
        calcFunctions.dele();
        break;
      case -35:
        calcFunctions.eq();
        break;
      default:
        break;
    }
  }
  console.log(e.keyCode - 48);
};
