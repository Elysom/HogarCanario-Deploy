import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**
 * @component ContactoComponent
 * @description Componente de formulario de contacto donde los usuarios pueden enviar mensajes.
 */
@Component({
  selector: 'app-contacto', // Selector del componente para su uso en otras partes de la aplicación
  templateUrl: './contacto.component.html', // Plantilla HTML asociada al componente
  standalone: true, // Indica que el componente es independiente
  imports: [ReactiveFormsModule, CommonModule], // Módulos requeridos
  styleUrls: ['./contacto.component.css'] // Archivo de estilos asociado
})
export class ContactoComponent {
  
  /**
   * @property {FormGroup} contactoForm
   * @description Grupo de controles para gestionar el formulario de contacto.
   */
  contactoForm: FormGroup;

  /**
   * @constructor
   * @param {FormBuilder} fb - Servicio para construir el formulario de manera reactiva.
   * @description Inicializa el formulario con validaciones para cada campo.
   */
  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]], // Campo obligatorio, mínimo 3 caracteres
      email: ['', [Validators.required, Validators.email]], // Campo obligatorio con validación de correo
      mensaje: ['', [Validators.required, Validators.minLength(10)]] // Campo obligatorio, mínimo 10 caracteres
    });
  }

  /**
   * @method enviarFormulario
   * @description Valida el formulario y muestra un mensaje de éxito o error.
   */
  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado', this.contactoForm.value);
      alert('Mensaje enviado correctamente');
      this.contactoForm.reset(); // Reinicia el formulario tras el envío exitoso
    } else {
      alert('Por favor completa todos los campos correctamente'); // Alerta en caso de error en la validación
    }
  }
}
