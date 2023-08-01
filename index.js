const Mercado = [
    {
        producto: "silla",
        precio: 7000,
    },
    {
        producto: "mesa",
        precio: 15000,
    },
    {
        producto: "mate",
        precio: 12000,
    },
    {
        producto: "pelota",
        precio: 11000,
    },
    {
        producto: "bicicleta",
        precio: 80000,
    },
]

const carrito = [

] 

alert("bienvenido a simulador de carrito por consola");
Mercado.forEach((e)=>{console.log(e)});

let usuario2 = prompt("quiere ingresar prodcutos al carrito?, escriba 'si' o 'no'");

while(usuario2 == 'si'){
    let usuario = prompt("escriba producto a ingresar al carrito, en la consola podra verlos");
    switch(usuario){
        case "bicicleta":
            bici();
            break;  
        case "silla":
            silla();
            break;
        case "mate":
            mate();
            break;  
        case "pelota":
            pelota();
            break;  
        case "mesa":
            mesa();
            break;  
        default:
            alert("producto no existente o mal escrito")    
    }
    usuario2 = prompt("ingrese 'si' para añadir otro producto, o ingrese 'no' para ver el total de su carrito.");
};

function silla(){
        carrito.push(Mercado[0])
};
function mesa(){
        carrito.push(Mercado[1])
};
function mate(){
        carrito.push(Mercado[2])
};
function pelota(){
        carrito.push(Mercado[3])
};
function bici(){
        carrito.push(Mercado[4])
};

console.log("Su carrito aquí abajo");
console.log(carrito);        

let total = carrito.map((el) => el.precio);
let total2 = total.reduce((acc, el) => acc + el, 0);
console.log("Precio final")
console.log(total2);