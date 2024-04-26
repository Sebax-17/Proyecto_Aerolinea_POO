const readlineSync = require(`readline-sync`)
class Aerolinea {
    Vuelo = ``
    Impuesto = 0 // es segun el destino Por ejemplo si es para san andres tiene un impuesto de x y por otro vuelo es de y
    ImpNiños = 0
    
    Descuentos = 0.1
    ImpDescuento = 0
    //Metodo
    ImpuestoMascota(){
        CanMascotas= +readlineSync.question(`Cuantas Mascotas Va llevar en el vuelo. `)
        ImPMascota = +readlineSync.question(`Cual es el impuesto por mascota?`)
        ImpTotalMascotas = CanMascotas*(ImPMascota/100)
        console.log(`El impuesto total por llevar mascotas es: ${ImpTotalMascotas}`)
    }

} 
class Reserva extends Aerolinea{
    Origen = ``
    Destino = ``
    
}
console.log(ImpuestoMascota)
