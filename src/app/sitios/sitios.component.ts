import { Component } from '@angular/core';
import { Sitio } from '../sitios-service/sitio.model';
import { SitiosService } from '../sitios-service/sitio.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-sitios',
  imports: [SitiosComponent],
  templateUrl: './sitios.component.html',
  styleUrl: './sitios.component.css'
})
export class SitiosComponent {
  sitios: Sitio[] = [];
  sitioAleatorio?: Sitio;

  constructor(private sitiosService: SitiosService) {}

  ngOnInit() {
    this.sitiosService.getSitios(6).pipe(
      catchError(error => {
        console.error('Error al obtener sitios:', error);
        return of([]); // Retorna un array vacío para evitar errores en el template
      })
    ).subscribe(data => {
      this.sitios = data || []; // Asegura que no sea undefined
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
}
