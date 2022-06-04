// CUADRADO
function perimetroCuadrado(lado){
    const perimtro = lado*4
    return perimtro
}

function areaCuadrado(lado){
   const area = lado * lado
return area
}




// TRIANGULO
function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base
    return perimetro
}

function areaTriangulo(base, altura){
   const area = (base * altura) /2
   return area
}





// CIRCULO

function perimetroCirculo(radio){
    const perimetro = (radio + radio) * Math.PI
    return perimetro
}

function areaCirculo(radio){
    const area = (radio * radio) * Math.PI
    return area
}







// INTERACCION DE JS CON HTML


function calcularPerimetroCuadrado(){
const Input = document.getElementById("InputCuadrado");
const value = Input.value;

const perimetro = perimetroCuadrado(value);

alert(perimetro);

}

function calcularAreaCuadrado(){
    const Input = document.getElementById("InputCuadrado");
    const value = Input.value;
    
    const perimetro = areaCuadrado(value);
    
    alert(perimetro);
}