import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessaoService } from './service/sessao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio1Angular';
  constructor(private sessao: SessaoService,private router:Router) {

  }

  ngOnInit():void{
    this.logado()
  }
  logado(): void {
    if (this.sessao.logado) {
      console.log('logado')
      this.router.navigateByUrl('/home')
    } else {
      console.log('não logado')
      this.router.navigateByUrl('/login')
    }
  }

}
