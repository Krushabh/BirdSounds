import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data:any;
  data1:any;
  data2:any;
  pages:any;
  webmedia:any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController) {
this.data=[
  {icon:'assets/birds/canary_320.jpg',audio:'assets/sounds/canary.mp3'},
  {icon:'assets/birds/crow_320.jpg',audio:'assets/sounds/crow.mp3'},
  {icon:'assets/birds/duck_320.jpg',audio:'assets/sounds/duck.mp3'},
  {icon:'assets/birds/emubird_320.jpg',audio:'assets/sounds/emubird.mp3'},
  {icon:'assets/birds/flamingo_320.jpg',audio:'assets/sounds/flamingo.mp3'},
  {icon:'assets/birds/goldfinch_320.jpg',audio:'assets/sounds/goldfinch.mp3'},
  {icon:'assets/birds/grosbeak_320.jpg',audio:'assets/sounds/grosbeak.mp3'},
  {icon:'assets/birds/hawk_320.jpg',audio:'assets/sounds/hawk.wav'},
  {icon:'assets/birds/hummingbird_320.jpg',audio:'assets/sounds/hummingbird.mp3'},
];
this.data1=[
 
  {icon:'assets/birds/kingfisher_320.jpg',audio:'assets/sounds/kingfisher.mp3'},
  {icon:'assets/birds/nightingale_320.jpg',audio:'assets/sounds/nightingale.mp3'},
  {icon:'assets/birds/ostrich_320.jpg',audio:'assets/sounds/ostrich.mp3'},
  {icon:'assets/birds/owl_320.jpg',audio:'assets/sounds/owl.mp3'},
  {icon:'assets/birds/parakeet_320.jpg',audio:'assets/sounds/parakeet.mp3'},
  {icon:'assets/birds/parrot_320.jpg',audio:'assets/sounds/parrot.mp3'},
  {icon:'assets/birds/pelican_320.jpg',audio:'assets/sounds/pelican.mp3'},
  {icon:'assets/birds/pigeon_320.jpg',audio:'assets/sounds/pigeon.mp3'},
  {icon:'assets/birds/quail_320.jpg',audio:'assets/sounds/quail.mp3'},
];
this.data2=[
 
  {icon:'assets/birds/robin_320.jpg',audio:'assets/sounds/robin.mp3'},
  {icon:'assets/birds/rooster_320.jpg',audio:'assets/sounds/rooster.mp3'},
  {icon:'assets/birds/sandpiper_320.jpg',audio:'assets/sounds/sandpiper.mp3'},
  {icon:'assets/birds/sparrow_320.jpg',audio:'assets/sounds/sparrow.mp3'},
  {icon:'assets/birds/swallow_320.jpg',audio:'assets/sounds/swallow.mp3'},
  {icon:'assets/birds/turkey_320.jpg',audio:'assets/sounds/turkey.mp3'},
  {icon:'assets/birds/waxwing_320.jpg',audio:'assets/sounds/waxwing.mp3'},
  {icon:'assets/birds/woodpecker_320.jpg',audio:'assets/sounds/woodpecker.mp3'},
];
this.pages=[this.data,this.data1,this.data2];
  }
  play(soundFile){
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 200,
      dismissOnPageChange: true
    }).present();
    console.log(soundFile);
    const onStatusUpdate=(status)=>console.log(status)
    if(this.webmedia) {
      this.webmedia.pause();

    }
    this.webmedia=new Audio(soundFile);
    this.webmedia.load();
    this.webmedia.play();
  
  }

}
