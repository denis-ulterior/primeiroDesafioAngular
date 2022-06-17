import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../Usuario/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario!:Usuario

  constructor(private rotaAtiva:ActivatedRoute,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    let valorRotaAtual = this.rotaAtiva.snapshot.paramMap.get('id') as string
    this.usuario = this.usuarioService.pegarPorId(Number(valorRotaAtual)) as Usuario
    console.log(this.usuario)
  }

}
