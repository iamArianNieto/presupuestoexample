import { Egreso } from './engreso.model';
import { Component, Input, OnInit } from '@angular/core';
import { EgresoServicios } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;


  constructor(private egresoServicio:EgresoServicios) { }

  ngOnInit() {
    this.egresos=this.egresoServicio.engresos;
  }

  eliminarEgreso(egreso:Egreso){
  this.egresoServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;

  }

}
