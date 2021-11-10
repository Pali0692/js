class Productos {
    constructor (nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }

controlStock(){

    if(this.cantidad > this.stock) {
        alert("No hay suficiente stock del producto")

    }
    else if (this.cantidad < this.stock && this.cantidad > 0){

        this.stock = this.stock - this.cantidad
        alert("la cantidad ingresada es:" + this.cantidad + "el stock actualizado es de:" + this.stock);
    }
    else {
        alert ("Usted ingreso una cantidad negativa, es incorrecto")
    }

}

}

let compraUsuario = Number(prompt("Ingrese la cantidad a comprar"));

const objeto1 = new Productos ("fideos", "pastas", 50, compraUsuario);

console.log(objeto1.controlStock());