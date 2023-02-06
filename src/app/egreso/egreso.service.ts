import { Egreso } from "./engreso.model";

export class EgresoServicios{

  engresos:Egreso[]=[
    new Egreso("Renta",1700),
    new Egreso("Comida",1200)

  ];

  eliminar(egreso:Egreso){
    const indice:number = this.engresos.indexOf(egreso);
    this.engresos.splice(indice,1);
  }

}
