import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CadastroComponent,
    ListaUsuariosComponent,
    LoginComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'home', component: HomeComponent
      }, {
        path: 'usuarios/info/:id', component: CadastroComponent
      }, {
        path: "usuario", component: CadastroComponent
      }
    ]),
    BrowserAnimationsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
