var h1DOM = document.querySelector(".screenText")
var inpTextDOM = document.querySelector(".inpText");
var enterDOM = document.querySelector(".enter")
var firstBtns = document.querySelectorAll(".first button")
var secondBtns = document.querySelectorAll(".second button")
var thirdBtns = document.querySelectorAll(".third button")
var foruthBtns = document.querySelectorAll(".fourth button")
var fiveBtns = document.querySelectorAll(".five button")

var checkList = [];
var wordsAPI = ["kalem", "silgi", "kitap", "deniz", "abone", "kakao"]
inpTextDOM.value = "";
var myWord = wordsAPI[Math.floor(Math.random() * 6)];
var deger = "";
var _btns = [firstBtns, secondBtns, thirdBtns, foruthBtns, fiveBtns];
inpTextDOM.addEventListener("keyup", () => {
    h1DOM.textContent = "";
    deger = inpTextDOM.value;

    _btns[0].forEach((element, index) => {
        element.textContent = deger[index]
    });
})

enterDOM.addEventListener("click", () => {
    if (wordsAPI.indexOf(deger) != -1 && checkList.indexOf(deger) == -1) {
        
        var sayac = 0;

        for (let i = 0; i < 5; i++) {
            if (_btns[0][i].textContent == myWord[i]) {
                _btns[0][i].style.backgroundColor = 'green';
            } else if (myWord.indexOf(_btns[0][i].textContent) != -1) {
                _btns[0][i].style.backgroundColor = 'yellow';
            } else {
                _btns[0][i].style.backgroundColor = 'grey';
            }
        }
        _btns[0].forEach(element => {
            if (element.style.backgroundColor == `green`) {
                sayac++;
            }
        });
        if (sayac == 5) {
            alert("you win")
        }
        else if (_btns.length == 1) {
            alert("you lose! ", myWord)
        }
        _btns.shift();

        inpTextDOM.value = "";
        checkList.push(deger);
    }
    else {
        h1DOM.textContent = "böyle bir kelime yok yada aynı kelimeyi yazdınız!";
    }

})

var wordsAlertDOM = document.querySelector(".alert")
wordsAlertDOM.addEventListener("click", ()=>{
    alert(wordsAPI)
})