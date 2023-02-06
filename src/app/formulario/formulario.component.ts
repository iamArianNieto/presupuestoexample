import { Egreso } from './../egreso/engreso.model';
import { Ingreso } from './../ingreso/ingreso.model';
import { EgresoServicios } from './../egreso/egreso.service';
import { IngresoServicio } from './../ingreso/ingreso.servicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;


  constructor(private ingresoServicios:IngresoServicio, private egresoServicio:EgresoServicios) { }

  ngOnInit() {
  }


  tipoOperacion(evento){
    this.tipo= evento.target.value;

  }

  agregarValor(){
    if (this.tipo ==="ingresoOperacion"){
      this.ingresoServicios.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
    }
    else{
      this.egresoServicio.engresos.push(new Egreso(this.descripcionInput,this.valorInput));
    }

  }





}
