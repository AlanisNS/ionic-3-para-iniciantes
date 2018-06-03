import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  //criando uma variável privada com a url que vai repetir
  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  //função para pegar os dados da api do site
  getLatestMovies() {
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=2e0da4eebc8acbd0149e5e5690b01387");
  }

}
