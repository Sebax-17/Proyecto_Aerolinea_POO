const readlineSync = require(`readline-sync`)
class Reserva {
    
    Destino=``;
    NombrePasajero = ``
    Costo = null
    Impuesto = null
    Origen = ``

} 
console.log(this.Impuesto)
let reser1 = new Reserva()
reser1.Origen = readlineSync.question(`Desde que ciudad o pais van a viajar? `)
reser1.Destino =`Cartagena`
reser1.Impuesto = +readlineSync.question(`Cuanto es el impuesto para:  ${reser1.Destino  }: `)
reser1.Costo =250000 + (reser1.Costo*this.Impuesto )
reser1.NombrePasajero = `Juan`
 
let reser2 = new Reserva()
reser2.Origen = readlineSync.question(`Desde que ciudad o pais van a viajar? `)
reser2.Destino =`Miami`
reser2.Impuesto = +readlineSync.question(`Cuanto es el impuesto para ${reser2.Destino  }: `)
reser2.Costo = 700000 
reser2.NombrePasajero = `Camila`

let reser3 = new Reserva()
reser3.Origen = readlineSync.question(`Desde que ciudad o pais van a viajar? `)
reser3.Destino =`Alemania`
reser3.Impuesto = +readlineSync.question(`Cuanto es el impuesto para ${reser3.Destino  }: `)
reser3.Costo = 2000000 + (reser3.Costo * this.Impuesto)
reser3.NombrePasajero =`Montoya`

console.log(reser1)
console.log(reser2)
console.log(reser3)