const readlineSync = require(`readline-sync`)
class Vuelo {
    constructor(Origen,Destino,costo,impuesto){
    this.Origen = Origen
    this.Destino = Destino
    this.costo = costo
    this.impuesto = impuesto
    }
    preciototal(){
        precio =this.costo +(this.costo*this.impuesto)/100
    }
}
class Reserva extends Vuelo {
  constructor(Origen,Destino,costo,impuesto,TipodePasajero,VueloDescuesto){
    super(`Bogota`,`Miami`,250000,15)
    this.TipodePasajero = TipodePasajero
    this.VueloDescuesto = VueloDescuesto
    
  }
  extras(){
    if(this.tipodePasajero == `mascota`){
        ImpMascota += (this.costo*0.15)
        precio =this.costo + ImpMascota

        

    }
    else if (this.tipodePasajero == `infante`){
        this.dulce += 1 
        console.log(this.dulce)
    }

    if (this.VueloDescuesto == `si`){
        VueloconDescuento= this.costo - (this.costo*0.1)
    }

  }
}
let 
 vuelo1 = new Vuelo(`Bogota`,`Miami`,250000,15)
 let reser1 = new Reserva(`Bogota`,`Miami`,250000,15,`infante`,`si`)
 reser1.extras()
vuelo1.preciototal()
console.log(`EL PRECIO TOTAL CON IMPUESTO ES DE: ${vuelo1.preciototal()}`)
console.log(`El precio total con descuento del 10% ${reser1.extras()}`)
console.log(precio)
