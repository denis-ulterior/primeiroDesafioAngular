import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Usuario/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  private usuarios: Usuario[] = []
  columnsToDisplay = ['id', 'usuario','primeiroNome','perfil','editar'];
  constructor(private usuariosService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios = this.usuariosService.pegarTodos()
    console.log(this.usuarios)
  }
  getUsuarios() {
    return this.usuarios
  }
}
