const readlineSync = require(`readline-sync`)
class Vuelo {
    constructor(Origen,Destino,costo,impuesto){
    this.Origen = Origen
    this.Destino = Destino
    this.costo = costo
    this.impuesto = impuesto
    }
    preciototal(){
        Precio = this.costo +(this.costo*this.impuesto)/100
    }
}
let vuelo1 = new Vuelo(`Bogota`,`Miami`,250000,15)
vuelo1.preciototal()
console.log(vuelo1)