//console.log("Java script ieladets")

const calcButton = document.getElementById("calc-button");
const radiusInput = document.getElementById("input-field");
const outputContainer = document.getElementById("result-container");
const PI= 3.14;

calcButton.addEventListener("click", listenerFunction);

function listenerFunction(){
    let radius= inputField.value;
    let area= PI * radius * radius;
    let circumference = 2* PI * radius;
    resultContainer.innerHTML = `Laukums: ${area}; R.L. garums: ${circumference}`;
}
