import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-photo-slider',
  templateUrl: './photo-slider.component.html',
  styleUrls: ['./photo-slider.component.css']
})
export class PhotoSliderComponent implements AfterViewInit {

  // Array de imágenes para el slider
  images: string[] = [
    'images/SliderPrincipal/slide1.jpg', // Ruta relativa a la raíz
    'images/SliderPrincipal/slide2.jpg',
    'images/SliderPrincipal/slide3.jpg',
    'images/SliderPrincipal/slide4.jpg'
  ];

  ngAfterViewInit(): void {
    // Inicializa Swiper después de que la vista se haya cargado
    const swiper = new Swiper('.swiper-container', {
      loop: true, // Permite el desplazamiento infinito
      pagination: {
        el: '.swiper-pagination', // Añade paginación
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Botón de siguiente
        prevEl: '.swiper-button-prev', // Botón de anterior
      },
    });
  }
}