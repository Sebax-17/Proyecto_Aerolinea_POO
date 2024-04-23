const readlineSync = require(`readline-sync`)
class Reserva {
    constructor() {
      this.pasajeros = [];
      this.vuelos = [];
      this.totalRecaudado = 0;
      this.destinoPreferido = "";
      this.impuestosMascotas = 0;
      this.impuestosDestino = {};
      this.cantidadNinos = 0;
      this.costoDulcesNinos = 0;
    }
  
    agregarPasajero(pasajero) {
      this.pasajeros.push(pasajero);
      this.calcularTotalRecaudado();
      this.determinarDestinoPreferido();
      this.calcularImpuestosMascotas();
      this.contarNinos();
      this.calcularCostoDulcesNinos();
    }
  
    calcularTotalRecaudado() {
      this.totalRecaudado = 0;
      for (const pasajero of this.pasajeros) {
        this.totalRecaudado += pasajero.precioPasaje();
      }
    }
  
    determinarDestinoPreferido() {
      const destinos = {};
      for (const pasajero of this.pasajeros) {
        const destino = pasajero.vuelo.destino;
        if (destinos[destino]) {
          destinos[destino]++;
        } else {
          destinos[destino] = 1;
        }
      }
  
      let destinoPreferido = "";
      let maxPasajeros = 0;
      for (const destino in destinos) {
        const cantidadPasajeros = destinos[destino];
        if (cantidadPasajeros > maxPasajeros) {
          destinoPreferido = destino;
          maxPasajeros = cantidadPasajeros;
        }
      }
  
      this.destinoPreferido = destinoPreferido;
    }
  
    calcularImpuestosMascotas() {
      this.impuestosMascotas = 0;
      for (const pasajero of this.pasajeros) {
        if (pasajero.tipoPasajero === "mascota") {
          this.impuestosMascotas += pasajero.precioPasaje();
        }
      }
    }
  
    calcularImpuestosDestino(destino) {
      if (!this.impuestosDestino[destino]) {
        let impuestosDestino = 0;
        for (const pasajero of this.pasajeros) {
          if (pasajero.vuelo.destino === destino) {
            impuestosDestino += (pasajero.vuelo.costo * pasajero.vuelo.impuesto) / 100;
          }
        }
        this.impuestosDestino[destino] = impuestosDestino;
      }
      return this.impuestosDestino[destino];
    }
  
    contarNinos() {
      this.cantidadNinos = 0;
      for (const pasajero of this.pasajeros) {
        if (pasajero.tipoPasajero === "niño") {
          this.cantidadNinos++;
        }
      }
    }
  
    calcularCostoDulcesNinos() {
      this.costoDulcesNinos = 0;
      for (const pasajero of this.pasajeros) {
        if (pasajero.tipoPasajero === "niño") {
          this.costoDulcesNinos += 5000; // Precio del dulce por niño
        }
      }
    }
  }
   // Crear vuelos
   const vuelo1 = new Vuelo("San Andres", "Medellin", 200000, 0.1);
   const vuelo2 = new Vuelo("Cartagena", "Bogota", 150000, 0.05);
   const vuelo3 = new Vuelo("Santa Marta", "Cali", 120000, 0.12);
 
   // Crear pasajeros
   const pasajero1 = new Pasajero("Juan Perez", 35, "adulto", vuelo1);
   const pasajero2 = new Pasajero("Maria Gomez", 28, "adulto", vuelo2);
   const pasajero3 = new Pasajero("Pedro Lopez", 10, "niño", vuelo3);
   const mascota1 = new Pasajero("Toby", 0, "mascota", vuelo1);
 
   // Crear reserva
   const reserva = new Reserva();
   reserva.agregarPasajero(pasajero1);
   reserva.agregarPasajero(pasajero2);
   reserva.agregarPasajero(pasajero3);
   reserva.agregarPasajero(mascota1);
 
   // Mostrar resultados
   console.log("*Resultados de la reserva:*");
   console.log(`Total recaudado: ${reserva.totalRecaudado}`);
   console.log(`Destino preferido: ${reserva.destinoPreferido}`);
   console.log(`Impuestos por mascotas: ${reserva.impuestosMascotas}`);
   console.log(`Impuestos para San Andres: ${reserva.calcularImpuestosDestino("San Andres")}`);
   console.log(`Cantidad de niños: ${reserva.cantidadNinos}`);
   console.log(`Costo total de dulces: ${reserva.costoDulcesNinos}`);
 