import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Usuario/usuario';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login={usuario:'',senha:''}
  constructor(private usuarioService:UsuarioService) { }
  
  ngOnInit(): void {
  }
  logar():void{
    this.usuarioService.logar(this.login.usuario,this.login.senha)
  }
}
