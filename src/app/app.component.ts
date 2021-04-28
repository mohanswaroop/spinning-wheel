import { Component, OnInit, ViewChild} from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spinningWheel';
  @ViewChild(NgxWheelComponent) wheel;
  //...Array(12).keys()
seed = [0,1,2,3,4,5,6,7,8,9,10,11];
idToLandOn: any;
items: any[];
textOrientation: TextOrientation = TextOrientation.HORIZONTAL
textAlignment: TextAlignment = TextAlignment.OUTER

ngOnInit() {
  this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
  const colors = ['#FF0000', '#000000','#999']
  this.items = this.seed.map((value) => ({
    fillStyle: colors[value % 3],
    text: `Prize ${value}`,
    id: value,
    textFillStyle: 'white',
    textFontSize: '16'
  }))
}

reset() {
  this.wheel.reset()
}
before() {
  alert('Your wheel is about to spin')
}

async spin(prize) {
  this.idToLandOn = prize
  await new Promise(resolve => setTimeout(resolve, 0));
  this.wheel.spin()
}

after() {
  alert('You have been bamboozled');
  this.reset();
}


}
