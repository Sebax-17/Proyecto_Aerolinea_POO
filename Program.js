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
class Pasajero  {
    dulce = 0
    nombre = ``
    edad = 0
    tipodepasajero = ``

    construtor(nombre,edad,tipodepasajero,vuelo){
        PrecioPasaje()
        if(this.tipodepasajero == `mascota`){
            this.costo = this.costo * 0.15
        }
        else if(this.tipodepasajero == `infante`) {
            dulce += dulce + 1
        }
    }

}

let reser1 = new Pasajero()
console.log(reser1)