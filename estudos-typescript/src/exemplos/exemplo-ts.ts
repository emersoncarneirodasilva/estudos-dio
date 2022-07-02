let input1 = document.getElementById("input1") as HTMLInputElement;
let input2 = document.getElementById("input2") as HTMLInputElement;
let button = document.getElementById("button") as HTMLButtonElement;

function addNumbers(number1: number, number2: number, devPrintar: boolean, frase: string) {
  let result = number1 + number2
  if (devPrintar) {
    console.log(frase + result)
  }
  return number1 + number2
};

let devPrintar = true;
let frase: string;
frase = "O valore é: ";

if (button) {
  button.addEventListener("click", () => {
    if (input1 && input2) {
      console.log(addNumbers(Number(input1.value), Number(input2.value), devPrintar, frase))
    }    
  });
};