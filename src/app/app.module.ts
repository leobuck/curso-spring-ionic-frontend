import { ProdutosPage } from './../pages/produtos/produtos';
import { EstadoService } from './../services/domain/estado.service';
import { CidadeService } from './../services/domain/cidade.service';
import { SignupPage } from './../pages/signup/signup';
import { AuthInterceptorProvider } from './../interceptors/auth-interceptor';
import { ClienteService } from './../services/domain/cliente.service';
import { ProfilePage } from './../pages/profile/profile';
import { HomePage } from './../pages/home/home';
import { CategoriasPage } from './../pages/categorias/categorias';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { ErrorInterceptorProvider } from './../interceptors/error-interceptor';
import { CategoriaService } from './../services/domain/categoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoService } from '../services/domain/produto.service';

@NgModule({
  declarations: [
    MyApp,
    CategoriasPage,
    HomePage,
    ProfilePage,
    SignupPage,
    ProdutosPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriasPage,
    HomePage,
    ProfilePage,
    SignupPage,
    ProdutosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService,
    ClienteService,
    CidadeService,
    EstadoService,
    ProdutoService
  ]
})
export class AppModule {}
