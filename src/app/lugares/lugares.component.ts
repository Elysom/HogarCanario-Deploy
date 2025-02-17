import { Component } from '@angular/core';
import { SitiosService } from '../sitios-service/sitio.service';
import { Sitio } from '../sitios-service/sitio.model';
import { SitioCardComponent } from "../components/sitio-card/sitio-card.component";
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lugares',
  imports: [SitioCardComponent, CommonModule,FormsModule],
  templateUrl: './lugares.component.html',
  styleUrl: './lugares.component.css'
})
export class LugaresComponent {
  sitios: Sitio[] = [];
  sitioAleatorio?: Sitio;
  filtroTipo: string = '';
  terminoBusqueda: string = '';

  constructor(private sitiosService: SitiosService) {}
  
  ngOnInit() {
    this.sitiosService.getSitios().pipe(
      catchError(error => {
        console.error('Error al obtener sitios:', error);
        return of([]);
      })
    ).subscribe(data => {
      this.sitios = data || [];
    });
  }

  obtenerSitioAleatorio() {
    this.sitiosService.getRandomSitio().pipe(
      catchError(error => {
        console.error('Error al obtener sitio aleatorio:', error);
        return of(null);
      })
    ).subscribe(data => {
      this.sitioAleatorio = data || undefined;
    });
  }

  get sitiosFiltrados(): Sitio[] {
    let sitiosFiltrados = this.filtroTipo ? this.sitios.filter(s => s.tipo === this.filtroTipo) : this.sitios;
    return this.terminoBusqueda ? sitiosFiltrados.filter(s => s.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())) : sitiosFiltrados;
  }
}
