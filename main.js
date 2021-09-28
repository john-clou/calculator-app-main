let themV = 1 , operV = 0 , num = new String , num2 = new String ,result,w,opa,toggEle = document.getElementById("tog");
let keypadEle = document.getElementById("keyp")
let mainV = document.getElementById("here");
let c;
toggEle.onclick = function() {
    themV++;
    if (themV === 4) {
        themV = 1;
    }
    if (themV === 2) {
        mainV.style.setProperty("--main-background", "hsl(0, 0%, 90%)")
        mainV.style.setProperty("--tog-keyp-background" , "hsl(0, 5%, 81%)")
        mainV.style.setProperty("--screen-background" , "hsl(0, 0%, 93%)")
        mainV.style.setProperty("--reset-del-backg", "hsl(185, 42%, 37%)")
        mainV.style.setProperty("--reset-del-shaw","hsl(185, 58%, 25%)")
        mainV.style.setProperty("--eq-toggle-backg","hsl(25, 98%, 40%)")
        mainV.style.setProperty("--eq-toggle-shaw","hsl(25, 99%, 27%)")
        mainV.style.setProperty("--buttom-backg","hsl(45, 7%, 89%)")
        mainV.style.setProperty("--buttom-shaw","hsl(35, 11%, 61%)")
        mainV.style.setProperty("--main-color","hsl(60, 10%, 19%)")
        mainV.style.setProperty("--bottom-color","--main-color")
        mainV.style.setProperty("--reset-del-color","#fff")
        mainV.style.setProperty("--eq-color","#fff")
        toggEle.style.left = "50%";
        toggEle.style.transform = "translateY(-50%) translateX(-50%)";
    }
    if (themV === 3) {
        mainV.style.setProperty("--main-background", "hsl(268, 75%, 9%)")
        mainV.style.setProperty("--tog-keyp-background" , "hsl(268, 71%, 12%)")
        mainV.style.setProperty("--screen-background" , "hsl(268, 71%, 12%)")
        mainV.style.setProperty("--reset-del-backg", "hsl(281, 89%, 26%)")
        mainV.style.setProperty("--reset-del-shaw"," hsl(285, 91%, 52%)")
        mainV.style.setProperty("--eq-toggle-backg","hsl(176, 100%, 44%)")
        mainV.style.setProperty("--eq-toggle-shaw","hsl(177, 92%, 70%)")
        mainV.style.setProperty("--buttom-backg","hsl(268, 47%, 21%)")
        mainV.style.setProperty("--buttom-shaw","hsl(290, 70%, 36%)")
        mainV.style.setProperty("--main-color","hsl(52, 100%, 62%)")
        mainV.style.setProperty("--bottom-color","--main-color")
        mainV.style.setProperty("--reset-del-color","#fff")
        mainV.style.setProperty("--eq-color","hsl(198, 20%, 13%)")
        toggEle.style.left = "calc(100% - 16px)";
        toggEle.style.transform = "translateY(-50%)";
    }
    if (themV === 1) {
        mainV.style.setProperty("--main-background", "hsl(222, 26%, 31%)")
        mainV.style.setProperty("--tog-keyp-background" , "hsl(223, 31%, 20%)")
        mainV.style.setProperty("--screen-background" , "hsl(224, 36%, 15%)")
        mainV.style.setProperty("--reset-del-backg", "hsl(225, 21%, 49%)")
        mainV.style.setProperty("--reset-del-shaw"," hsl(224, 28%, 35%)")
        mainV.style.setProperty("--eq-toggle-backg"," hsl(6, 63%, 50%)")
        mainV.style.setProperty("--eq-toggle-shaw"," hsl(6, 70%, 34%)")
        mainV.style.setProperty("--buttom-backg","hsl(30, 25%, 89%)")
        mainV.style.setProperty("--buttom-shaw","hsl(28, 16%, 65%)")
        mainV.style.setProperty("--main-color","#fff")
        mainV.style.setProperty("--bottom-color","hsl(221, 14%, 31%)")
        mainV.style.setProperty("--reset-del-color","--main-color")
        mainV.style.setProperty("--eq-color","--main-color")
        toggEle.style.left = "2px";
        toggEle.style.transform = "translateY(-50%)";
    }
}
let calcFunctions = {
    cut(num){
            let arr = num.toString().split("")
            arr.pop()
            return arr.join("")
    },
    dele() {
        if (operV === 0) {
            num = this.cut(num);
            document.getElementById("disp").innerHTML = num
        }
        else {
            num2 = this.cut(num2);
            document.getElementById("disp").innerHTML = num2
        }
    } , 
    add(n) {
        if (operV === 0 && num.toString().length < 10)  {
            num = num + (n).toString();
            document.getElementById("disp").innerHTML = num ;
        }
        if (operV !== 0 && num2.toString().length < 10)  {
            num2 = num2 + (n).toString();
            document.getElementById("disp").innerHTML = num2 ;
        }
    } , 
    eq() {
        if (operV !== 0) {
                switch (operV)  {
                    case 1: result = (+num) + (+num2);break;
                    case 2: result = (+num) - (+num2);break;
                    case 3: result = (+num) * (+num2);break;
                    case 4: result = (+num) / (+num2);break;
                    default: break;
                }
                if (result === Infinity || result === -Infinity) {
                    operV = 0;
                    num = new String;
                    num2 = new String;
                    document.getElementById("disp").innerHTML = "Cannot Divide By Zero"
                }
                else { 
                    while (result.toString().length > 10){
                        result = this.cut(result.toString());
                    }

                    document.getElementById("disp").innerHTML = result.toString();
                    operV = 0;
                    num2 = new String
                    num = result.toString()
                }
        }     
    },
    operations(s) {
        switch (s) {
            case "+": operV = 1; break;
            case "-": operV = 2; break;
            case "x": operV = 3; break;
            case "/": operV = 4; break;
            case "=": this.eq(); break;
            default: break;
        }
    } , 
}

keypadEle.onclick = e => {
    c = e.target.innerHTML;
    if (!isNaN(c)) {
        calcFunctions.add(c);
    }
    else if (c.length ===1){
        if (c === ".") {
            if (!num.toString().includes(".")) {
                num = num + c
            }
            if (operV !==0&&!num2.toString().includes(".")) {
                num2 = num2 + c
            }
        }
        else {
            calcFunctions.operations(c);
        }
    }
    else {
        if (c === "RESET") {
            operV = 0;
            num = new String;
            num2 = new String;
            document.getElementById("disp").innerHTML = "0";
        }
        else if(c === "DEL") {
            calcFunctions.dele();
        }
    }
} 

document.onkeydown = function(e) {
    e = e|| window.event;
    w = e.keyCode - 48;

    if (w < 10 && w >= 0){
        calcFunctions.add(w);
    }
    else {
        switch(w) {
            case -40: calcFunctions.dele(); break;
            case -35: calcFunctions.eq(); break;
            default:break;

        }
    }
    console.log(e.keyCode - 48);
}
