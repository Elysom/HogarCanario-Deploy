import { Component } from '@angular/core';

/**
 * @component FooterComponent
 * @description Este componente representa el pie de página de la aplicación.
 *              Muestra el año actual dinámicamente y enlaces a secciones importantes.
 */

@Component({
  selector: 'app-footer', 
  templateUrl: './footer.component.html', 
  styleUrls: ['./footer.component.css'] 
})
export class FooterComponent {
  /**
   * @property {number} currentYear
   * Contiene el año actual, utilizado en el aviso de derechos de autor.
   */
  currentYear: number;

  /**
   * @constructor
   * Inicializa la propiedad `currentYear` con el año actual.
   */

  constructor() {
    this.currentYear = new Date().getFullYear(); 
  }
}
