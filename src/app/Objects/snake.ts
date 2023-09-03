import * as p5 from "p5";

export class Snake {
    private x: number = 0;
    private y = 0;
    private xspeed = 0;
    private yspeed = 0;

    constructor() {
        this.xspeed = 1;
    }

    public update(): void {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    public show(p: p5): void {
        p.fill(255);
        p.rect(this.x, this.y, 20, 20);
    }

    public changeDirection(dir: string) {
        if (this.yspeed) {
            if (dir === "LEFT") {
                this.updateDirection(-1, 0);
            } else if (dir === "RIGHT") {
                this.updateDirection(1, 0);
            }
        } else if (this.xspeed) {
            if (dir === "UP") {
                this.updateDirection(0, -1);
            } else if (dir === "DOWN") {
                this.updateDirection(0, 1);
            }
        }
    }

    private updateDirection(x: number, y: number): void {
        this.xspeed = x ?? this.xspeed;
        this.yspeed = y ?? this.yspeed;
    }
}