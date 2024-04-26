const readlineSync = require(`readline-sync`)
class Aerolinea {
    Impuesto = 0 // es segun el destino Por ejemplo si es para san andres tiene un impuesto de x y por otro vuelo es de y
    DulcesEntregadosaNiños = 0
    
    #Descuentos = 0.1
    ImpDescuento = 0
    //Metodo
    ImpuestoMascota(){
        CanMascotas= +readlineSync.question(`Cuantas Mascotas Va llevar en el vuelo. `)
        ImPMascota = +readlineSync.question(`Cual es el impuesto por mascota?`)
        ImpTotalMascotas = CanMascotas*(ImPMascota/100)
        console.log(`El impuesto total por llevar mascotas es: ${ImpTotalMascotas}`)
    }
    Dulces(){
        console.info(`Los dulces solo son para niños menores de 12 años`)
        CanDeNIños = +readlineSync.question(`Cuantos niños infantes van a ir `)
        while (CanDeNIños > Dulces){
            this.DulcesEntregadosaNiños += 1
        }
    }
} 
class Reserva extends Aerolinea{
    Origen = ``
    Destino = ``

    Menu(){
        console.log(`------ Destinos Disponibles -------`)
        this.Destino = readlineSync.question(`Bogota(B) , Miami(M , Pereira(P))  `)

    }
    CostoVuelo(){
        this.costo = +readlineSync.question(`Cual es valor del vuelo, ${this.Destino}`)
        
    }
   ImpuestoDestino(Destino){
    
    this.Impuesto= +readlineSync.question(`Ingrese el impuesto de ${Destino}`)
     

   } 
   CostoTotal(){
    CostoFinal = this.costo + (this.Impuesto/100)
   }
   
}
let reser1 = new Reserva()
console.log(reser1)
reser1.Menu()
reser1.Dulces()
reser1.ImpuestoDestino()
