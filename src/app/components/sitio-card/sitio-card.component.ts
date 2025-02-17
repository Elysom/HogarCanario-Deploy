import { Component, Input } from '@angular/core';
import { Sitio } from '../../sitios-service/sitio.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sitio-card',
  templateUrl: './sitio-card.component.html',
  styleUrls: ['./sitio-card.component.css'],
  imports: [ CommonModule]
})

export class SitioCardComponent {
  @Input() sitio!: Sitio;
}
