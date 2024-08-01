import { Component, inject, OnInit } from '@angular/core';
import { MyApiService } from '../../services/my-api.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,MatButtonModule,ReactiveFormsModule,FormsModule, MatFormFieldModule, 
    MatInputModule,MatButtonModule,MatIconModule, RouterLinkActive,HttpClientModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  MyApiService = inject(MyApiService);
  fb = inject(FormBuilder);

  constructor() { }

  clase : any = [];
  subclase : any = [];
  armas : any = [];
  armadurasExotica : any = [];

  imagenSeleccionada: string = '';
  form!: FormGroup;



ngOnInit(): void {
  this.form = this.fb.group({
    nombre: ['', Validators.required],
    claseId: ['', Validators.required],
    subclaseId: ['', Validators.required],
    armaPrincipalId: ['', Validators.required],
    armaSecundariaId: ['', Validators.required],
    armaTerciariaId: ['', Validators.required],
    armaduraExoticaId: ['', Validators.required],
    mods: [''],
  });
    this.llenarData();
}

llenarData(){
    this.MyApiService.getDataClases().subscribe((data) => {
      this.clase = data
      console.log(this.clase);
    })

    this.MyApiService.getDataSubclases().subscribe((data) => {
      this.subclase = data
      console.log(this.subclase);
    })

    this.MyApiService.getDataArmas().subscribe((data) => {
      this.armas = data
      console.log(this.armas);
    })

    this.MyApiService.getDataArmadurasExoticas().subscribe((data) => {
      this.armadurasExotica = data
      console.log(this.armadurasExotica);
    })
  };

  onSubmit(){

    console.log(this.form.value);
    if (this.form.valid) {
      
      this.MyApiService.postBuild(this.form.value).subscribe((data) => {
        console.log(data);
      });


    } else {
      console.log('El formulario no es válido');
    }
  }



  

  
  


    

}
