const readlineSync = require(`readline-sync`)
class Vuelo {
    constructor(Origen,Destino,costo,impuesto){
    this.Origen = Origen
    this.Destino = Destino
    this.costo = costo
    this.impuesto = impuesto
    }
    preciototal(){
        return this.costo +(this.costo*this.impuesto)/100
    }
}
class Reserva extends Vuelo {
  constructor(tipodePasajero,VueloDescuesto){
    this.tipodePasajero = tipodePasajero
    this.VueloDescuesto = VueloDescuesto
  }
  extras(){
    if(this.tipodePasajero == `mascota`){
        return this.costo + (this.costo*0.15)

    }
    else if (this.tipodePasajero == `infante`){
        this.dulce += 1 
    }

    if (this.VueloDescuesto == `si`){
        return this.costo - (this.costo*0.1)
    }

  }
}
let 
 vuelo1 = new Vuelo(`Bogota`,`Miami`,250000,15)
 let reser1 = new Reserva(`mascota`,`si`)
 reser1.extras()
vuelo1.preciototal()
console.log(vuelo1)
console.log(`EL PRECIO TOTAL CON IMPUESTO ES DE: ${vuelo1.preciototal()}`)
console.log(reser1.extras)
