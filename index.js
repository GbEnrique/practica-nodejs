// const math = require('./math.js');
	
// 	console.log(math);

// array1.forEach(element => console.log(element));
// console.log(math.add(5,2));
// console.log(math.subtract(5,2));
// console.log(math.multiply(5,2));
// console.log(math.divide(5,2));
// console.log(math.rest(5,2));


// const OS = require('os');
// console.log(`Free mem ${OS.freemem()}`);
// console.log(`Total mem ${OS.totalmem()}`);
// // console.log(OS.homedir());
// console.log(OS.platform());
// console.log(OS.release());

// const fs = require('fs');

// // fs.writeFile('Texto.txt','linea uno',(e)=>{
// // 	if(e){
// // 		console.error(e);
// // 	}else console.log('Archivo creado');
// // })

// fs.readFile('Texto.txt',(e,data)=>{
// 	if(e) console.log(`ha ocurrido un error ${e}`);
// 	else{
// 		console.log(`${data}`);
// 	}
// })

// console.log("Espera un poco")



const http = require('http');
const puerto=3000;

const colors = require('colors')
const server = http.createServer((req, res) => {
	res.writeHeader(200,{'Content-Type':'text/html'})
	res.write('<h1>HOla mundo desde NOdejs</h1>')
	res.end();
});

server.listen(puerto,()=>console.log(`Server running `.yellow));