import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { Snake } from '../Objects/snake';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  private canvas!: p5;
  constructor(){}

  ngOnInit(): void {
    this.setupCanvas();
  }

  private setupCanvas(): void{
     this.canvas = new p5(this.sketch);
  }

  private sketch(p: p5) {
    const snake = new Snake();
    p.setup = () => {
      p.createCanvas(600, 600);
    };
  
    p.draw = () => {
      p.background(51);
      snake.update();
      snake.show(p);
    };
  }


}
