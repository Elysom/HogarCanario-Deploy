import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado', this.contactoForm.value);
      alert('Mensaje enviado correctamente');
      this.contactoForm.reset();
    } else {
      alert('Por favor completa todos los campos correctamente');
    }
  }
}
