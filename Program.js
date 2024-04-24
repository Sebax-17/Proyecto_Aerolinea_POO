const readlineSync = require(`readline-sync`)
class Reserva {
    
    Destino=``;
    NombrePasajero = ``
    Costo = 0
    Impuesto = 0

} 
let reser1 = new Reserva()
reser1.Destino =`Cartagena`
reser1.Impuesto = readlineSync.question(`Cuanto es el impuesto para:  ${reser1.Destino  }: `)
reser1.Costo =250000 + (reser1.Costo*reser1.Impuesto )
reser1.NombrePasajero = `Juan`
 
let reser2 = new Reserva()
reser2.Destino =`Miami`
reser2.Impuesto = readlineSync.question(`Cuanto es el impuesto para ${reser2.Destino  }: `)
reser2.Costo =700000 + (reser2.Costo*reser2.Impuesto)
reser2.NombrePasajero = `Camila`

let reser3 = new Reserva()
reser3.Destino =`Alemania`
reser3.Impuesto = readlineSync.question(`Cuanto es el impuesto para ${reser3.Destino  }: `)
reser3.Costo =2000000 + (reser3.Costo*reser3.Impuesto)
reser3.NombrePasajero =`Montoya`

console.log(reser1)
console.log(reser2)
console.log(reser3)