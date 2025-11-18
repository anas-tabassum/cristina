const numberEls = Array.from(document.getElementsByClassName('button_item'))
const resultEl = document.getElementById('result_box')
const calculate_btn = document.getElementById("calculate_button")
const reset_btn = document.getElementById('reset_btn')
let input = ""

function clickHandler(event){
    const lastElement = input[input.length - 1]

    if(lastElement && (lastElement.includes["+", "-", "/", "%"] ))
        return
    
    input = input + event.target.innerText
    resultEl.value = input
}

function calculateResult(){
    if(input){
        const result = eval(input)
        resultEl.value = result
    }
}

function resetHandler(){
    input = ""
    resultEl.value = ""
}

// Listeners
numberEls.forEach(button => {
    button.addEventListener('click', clickHandler)
});

calculate_btn.addEventListener('click', calculateResult)

reset_btn.addEventListener('click', resetHandler)