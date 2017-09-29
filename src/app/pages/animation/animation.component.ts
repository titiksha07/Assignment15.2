import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
  trigger('myState', [
    state('active', style({
      backgroundColor: '#cfd8dc',
      transform:'scale(1.1)'
    })),
    state('inactive', style({
      backgroundColor: '#fff',
      transform: 'scale(1)'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
]
})

export class AnimationComponent implements OnInit {
  animationState: string;
  constructor() { }

  ngOnInit() {
  }
/*click(){
  if(this.animationState==='active')
    {
      this.animationState='inactive'
    }
    else{
      this.animationState='active'
    }
}*/
  mouseEnter(){
    this.activeState();
  }
  mouseLeave(){
    this.inactiveState();
  }
  inactiveState(){
    this.animationState ='inactive';
  }
  activeState(){
    this.animationState ='active';
  }

}
