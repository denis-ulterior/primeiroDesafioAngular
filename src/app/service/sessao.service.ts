import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class SessaoService {
    constructor(private router: Router) { }
    logado: boolean = false
    logar(usuario: string, senha: string) {
        this.logado = true
        console.log('logado')
        this.router.navigateByUrl('/home')
    }
    logOut():void{
        this.logado=false
    }
}