const Math = {};

function add(x1,x2){
	return x1+x2;	
}

function subtract(x1,x2){
	return x1-x2;
}

function multiply(x1,x2){
	return x1*x2;
}

function divide(x1,x2){
	if(x2==0){
		return false;
	}else
	return x1/x2;
}
function rest(x1,x2){
	return x1%x2;
}

function saludo(name){
	return console.log(`hola ${name}`)
}
let array = [1,2,34,4];
// ESTO EXPORTA UNA PROPIEDAD DE UN OBJETO
// exports.add = add;
// exports.subtract = subtract;
// exports.multiply = multiply;
// exports.divide = divide;
// exports.rest = rest;

Math.add = add;
Math.subtract = subtract;
Math.multiply = multiply;
Math.divide = divide;
Math.rest = rest;

// PERMITE EXPORTAR OBJETOS FUNCIONES ARREGLOS
module.exports = Math;