const readlineSync = require(`readline-sync`)
// Clase para representar un vuelo
class Vuelo {
    constructor(origen, destino, costoBase) {
      this.origen = origen;
      this.destino = destino;
      this.costoBase = costoBase;
      this.impuestoDestino = 0;
      this.enPromocion = false;
    }
  
    // Método para calcular el costo del vuelo con impuestos
    calcularCosto() {
      const costoConImpuesto = this.costoBase + (this.costoBase * this.impuestoDestino);
      return this.enPromocion ? costoConImpuesto * 0.9 : costoConImpuesto;
    }
  }
  
  // Clase para representar la aerolínea y sus operaciones
  class Aerolinea {
    constructor() {
      this.vuelos = [];
      this.totalRecaudado = 0;
      this.dineroPorMascotas = 0;
      this.infantesViajados = 0;
      this.costoDulces = 0;
      this.destinos = {};
    }
  
    // Método para agregar un vuelo a la aerolínea
    agregarVuelo(vuelo) {
      this.vuelos.push(vuelo);
      this.totalRecaudado += vuelo.calcularCosto();
      if (this.destinos[vuelo.destino]) {
        this.destinos[vuelo.destino]++;
      } else {
        this.destinos[vuelo.destino] = 1;
      }
    }
  
    // Método para calcular el total recaudado por transporte de mascotas
    agregarMascota(costoVuelo) {
      this.dineroPorMascotas += costoVuelo;
    }
  
    // Método para agregar un infante y calcular el costo de los dulces
    agregarInfante(costoDulce) {
      this.infantesViajados++;
      this.costoDulces += costoDulce;
    }
  
    // Método para obtener el destino preferido
    destinoPreferido() {
      return Object.keys(this.destinos).reduce((a, b) => this.destinos[a] > this.destinos[b] ? a : b);
    }
  
    // Método para calcular el total de impuestos recaudados por un destino específico
    calcularImpuestoDestino(destino) {
      return this.vuelos.filter(vuelo => vuelo.destino === destino)
                        .reduce((total, vuelo) => total + (vuelo.costoBase * vuelo.impuestoDestino), 0);
    }
  }
  
  // Ejemplo de uso
  const aerolinea = new Aerolinea();
  const vuelo1 = new Vuelo('Bogotá', 'San Andrés', 300000);
  vuelo1.impuestoDestino = 0.19; // 19% de impuesto para San Andrés
  vuelo1.enPromocion = true; // Vuelo en promoción
  aerolinea.agregarVuelo(vuelo1);
  
  // Agregar más vuelos, mascotas e infantes según sea necesario
  
  // Consultas
  console.log(Total recaudado por venta de tiquetes: ${aerolinea.totalRecaudado});
  console.log(Destino preferido: ${aerolinea.destinoPreferido()});
  console.log(Dinero recaudado por transporte de mascotas: ${aerolinea.dineroPorMascotas});
  console.log(Total de impuestos para San Andrés: ${aerolinea.calcularImpuestoDestino('San Andrés')});
  console.log(Infantes que han viajado: ${aerolinea.infantesViajados});
  console.log(Costo total de dulces para infantes: ${aerolinea.costoDulces});