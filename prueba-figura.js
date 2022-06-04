// Cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden "+ ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide " + areaCuadrado  + " cm2");

console.groupEnd();


// Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del Triagulo miden " 
+ ladoTriangulo1 + " cm," 
+ ladoTriangulo2 + " cm," 
+ baseTriangulo + " cm" 
);

console.log("La altura del Triangulo mide " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro del Triagulo mide "+ perimetroTriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo) /2;
console.log("El area del Triangulo es " + areaTriangulo);

console.groupEnd();


// Circulo

console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del Circulo mide " + radioCirculo + " cm");


// Circunferencia 
const circunferenciaCirculo = radioCirculo *2;
console.log("La circunferencia de circulo mide "+ circunferenciaCirculo + " cm");

// PI
const PI = Math.PI;
console.log("El PI vale " + PI);

// Perimetro
const perimetroCirculo = circunferenciaCirculo * PI;
console.log("El perimetro del circulo mide " + perimetroCirculo + " cm2");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Circulo mide " + areaCirculo + " cm2" );

console.groupEnd();