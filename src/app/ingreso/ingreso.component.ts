import { IngresoServicio } from './ingreso.servicio';
import { Ingreso } from './ingreso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[] =[];

  constructor(private ingresosServicio:IngresoServicio) {

  }

  ngOnInit() {
    this.ingresos = this.ingresosServicio.ingresos;
  }

  eliminarRegistro(ingreso: Ingreso){
      this.ingresosServicio.eliminar(ingreso);

  }


}
