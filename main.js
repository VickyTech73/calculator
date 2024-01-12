window.onload = function() {
    var buttons = document.getElementsByClassName('btn')
    var qaaf = document.querySelector(".qaaf")
    var qaa = document.getElementsByClassName("qaa")
    var currInp = document.getElementById("currentInput")
    var operators = document.getElementsByClassName("op")
    var ansDis = qaa[qaa.length - 1]
    var eq = document.getElementById("eq")
    var clr = document.querySelector('.clr')


    var a = 0
    var b = 0
    var c = 0
    
    var ans = 0
    var gath = ""
    var operator = ""

        for (let i = 0; i < buttons.length; i++) {
                if (i !== buttons.length - 1) {
                    buttons[i].onclick = function() {
                        qaaf.innerHTML += buttons[i].innerHTML
                        gath += buttons[i].innerHTML
                        currInp.value = parseInt(gath)
                    }
                }
        }

        for (let j = 0; j < operators.length; j++) {
            operators[j].onclick = function() {
                if (qaaf.innerHTML !== ""){
                    qaaf.innerHTML += " " + operators[j].innerHTML + " "
                    a = currInp.value
                    gath = ""
                    currInp.value = ""
                    operator = operators[j].innerHTML
                }  
            }           
        }

        eq.addEventListener('click', e => {
            b = currInp.value
            ansDis.innerHTML = operate(operator, a, b, ans)
            currInp.value = ""
            qaaf.innerHTML = ""
            gath = ""
        })

        clr.addEventListener('click', e => {
            a = 0
            b = 0
            ansDis.innerHTML = ""
            currInp.value = ""
            qaaf.innerHTML = ""
            gath = ""
            operator = ""
            ans = 0
        })

        function operate(f, n1, n2, ansBox) {
            n1 = parseInt(n1)
            n2 = parseInt(n2)
            switch (f) {
                case "+":
                    ansBox = n1 + n2
                    break;

                case "-":
                    ansBox = n1 - n2
                    break;

                case "x":
                    ansBox = n1 * n2
                    break;

                case "/":
                    ansBox = n1 / n2
                    break;
            }
            return ansBox
        }
    

}