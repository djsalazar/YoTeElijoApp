import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  @ViewChild('slides') slides: Slides;
  params;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  next() {
    this.slides.slideNext();
  }

  vistaregistro() {
    this.navCtrl.push(RegistroPage);
  }

 
/* hangeSlide(index: number): void {
    if (index > 0) {
      this.slider.slideNext(300);
    } else {
      this.slider.slidePrev(300);
    }
  }*/

}
