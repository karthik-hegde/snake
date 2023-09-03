import * as p5 from "p5";

export class Snake{
    private x: number = 0;
    private y = 0;
    private xspeed = 0;
    private yspeed = 0;
    
    constructor() {
        this.xspeed = 1;
    }
   
    public update(): void{
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    public show(p: p5): void{
        p.fill(255);
        p.rect(this.x,this.y,10,10);
    }

}