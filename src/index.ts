rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let primerNumero : number = Number(dato1.value);
  let segundoNumero : number = Number(dato2.value);
  let tercerNumero : number = Number(dato3.value);
  let suma : number = primerNumero + segundoNumero;
  let resta : number = primerNumero - segundoNumero;


  function obtenerResultadoSuma(a:number, b:number):number {
    let resultado:number = 0;
    resultado = a+b;
    return resultado;
  }

  function guionX40(){
    let guion: string = "-";
    for (let i = 0; i <= 40; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  };

  switch (tercerNumero) {
    case 1:
    guionX40();
    console.log("el resultado es : ", obtenerResultadoSuma (Number(dato1.value),(dato2.value));
    guionX40();
    break;
    
    case 2:
      guionX40();
      console.log(" El resultado de la operación es: " + resta);
      guionX40();
      break;

    default:
      guionX40();
      console.log("        *  El programa finalizó  *");
      guionX40();
  }
});