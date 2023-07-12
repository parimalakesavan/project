const btnId=document.getElementById("btn")
const bmiInput=document.getElementById("fname2")

function myFunction() {
    const heightValue=document.getElementById("height").value/100
    console.log(heightValue)
    const weightValue=document.getElementById("weight").value
    const bmiValue=weightValue/(heightValue *heightValue)
    console.log(bmiValue)
    bmiInput.value=bmiValue
  }

  btnId.addEventListener("click", myFunction)