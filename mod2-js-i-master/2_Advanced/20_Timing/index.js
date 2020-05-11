const timeout = 10 * 1000;
const fechaInicio = new Date();

const fechaDespertar = fechaInicio.getTime() + timeout;

while ((new Date()).getTime() < fechaDespertar ) { 
    
}

console.log('Despierta!!!');
