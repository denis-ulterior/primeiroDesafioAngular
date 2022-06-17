import { Injectable } from "@angular/core";
import { Usuario } from "../Usuario/usuario";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    pegarTodos(): Usuario[] {
        return usuarios
    }
    novoId(): number {
        let UltimoUser = <Usuario>usuarios[usuarios.length - 1]
        return UltimoUser.id + 1
    }
    logar(usuario: string, senha: string) {
        let userValido = usuarios.find((it: Usuario) => it.usuario === usuario)
        let senhaValida = usuarios.find((it: Usuario) => it.senha === senha)
        if (userValido && senhaValida) {
            console.log('logado')
        } else {
            console.log('Erro')
        }
    }
    pegarPorId(id: number) {
        return usuarios.find((it: Usuario) => it.id === id)
    }
    salvar(usuario: Usuario): void {
        if (this.pegarPorId(usuario.id)) {
            const index = usuarios.findIndex((iterator: Usuario) => iterator.id === usuario.id)
            usuarios[index] = usuario
            console.log('atualizacao')
        }
        else {
            const index = usuarios.length
            usuarios[index] = usuario
            console.log('grvacao')
        }
    }

}
let usuarios: Usuario[] = [
    {
        id: 1,
        usuario: 'denis',
        senha: '123456',
        perfil: 'admin',
        primeiroNome: 'Denis',
        sobrenome: 'Souza',
        endereco: 'Rua 2',
        cidade: 'Taubate',
        estado: 'SP',
        cep: '12000-000'
    },
    {
        id: 2,
        usuario: 'maria',
        senha: '123456',
        perfil: 'usuario',
        primeiroNome: 'Maria',
        sobrenome: 'Santos',
        endereco: 'Rua 9',
        cidade: 'Taubate',
        estado: 'SP',
        cep: '12000-100'
    },

];