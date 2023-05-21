import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {timeout} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  Ingresar() {
    console.log(this.form);
    const user = this.form.value.user
    const password = this.form.value.password
    console.log(user)
    console.log(password)


    // Se realiza el harcord de codigo para no conectar con el backend
    if (user == 'admin' && password == 'admin') {
      //Redireccionar al dashboard
      this.fakeLoading();
    } else {
      //mensaje de error
      this.error()
      this.form.reset()

    }
  }

  // Mensaje de error cuando las credenciales son incorrectas
  error() {
    this._snackBar.open('Usuario o contraseña ingresado son invalidos', '', {
      horizontalPosition: "center",
      duration: 5000,
      verticalPosition: "bottom"
    })
  }

  fakeLoading() {
    this.loading = true;

    setTimeout(()=>{

      //Redireccionamiento al dashboard
      this.loading = false;
    },1500)

  }
}
