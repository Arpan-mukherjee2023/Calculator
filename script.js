let inputBox = document.querySelector(".input-box")
const buttons = document.querySelectorAll(".btn");
function isOperator(str) {
    if(str == '+' || str == '-' || str == '*' || str == '/'){
        return true;
    } else {
        return false;
    }
}

let containsTwoConsecutiveOperator = (str)=> {
    let isTrue = true;
    for(let i = 0; i < str.length-1; i++){
        if(isOperator(str[i]) && isOperator(str[i+1])){
            isTrue = false;
            break;
        }
    }
    return isTrue;
}
buttons.forEach(button=>{
    button.addEventListener('click', function(e) {
        // for equal sign
        if(e.target.value != '=') {
            inputBox.value += e.target.value;
        }
        // for operators
        if(isNaN(e.target.value)) {
            if (e.target.value == '=') {
                if(containsTwoConsecutiveOperator(inputBox.value)){
                    const res = eval(inputBox.value);
                    inputBox.value = res;
                } else {
                    inputBox.value = '';
                }

            }
        }
        // for clear
        if(e.target.value == 'clr') {
            inputBox.value = '';
        }
    })
})