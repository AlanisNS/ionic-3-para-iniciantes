import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  //inserindo uma seção para importar provedores
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    //isso é JSON
    titulo: "Alanis N Santos",
    data: "November 5, 1955",
    descricao: "Estou criando um App.",
    qnt_likes: 12,
    qnt_comments: 4,
    time_comment: "11h ago"
  }
  //objeto recebe um array tipo Any
  public lista_filmes = new Array<any>();

  //declarar uma variável pública
  public nome_usuario: string = "Alanis Santos";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //construindo uma 'variável' privada para receber o provedor
    private moovieProvider: MoovieProvider
  ) {
  }

  //modelo de função com parâmetros
  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //pega a função que veio do Provider MoovieProvider e coloca numa variável - subscribe é para 'subscrever' o que está acontecendo (?)
    this.moovieProvider.getLatestMovies().subscribe(
      data => {
        // data as any - data é qualquer tipo então recebe qualquer tipo de dado
        const response = (data as any);
        //retorna objeto como JSON pois apesar de receber em json é transformado em texto
        const objeto_retorno = JSON.parse(response._body);
        //objeto anterior recebe o JSON com o resultado da busca de filmes mais populares
        this.lista_filmes = objeto_retorno.results;
        // log do retorno ok
        console.log(objeto_retorno);
      }, error =>{
        // log do erro
        console.log(error);
      }
      
    )
  }

}
