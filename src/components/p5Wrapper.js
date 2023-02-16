import React from "react";
import Sketch from "react-p5";

const P5Wrapper = () => {
  let shapes = [];

  const setup = (p, canvasParentRef) => {
    class Circle extends Shape {
      constructor(p, x, y, size, speedX, speedY, color) {
        super(p, x, y, speedX, speedY, color);
        this.size = size;
      }

      draw() {
        p.fill(this.color);
        p.circle(this.x, this.y, this.size);
      }
    }

    class Rectangle extends Shape {
      constructor(p, x, y, width, height, speedX, speedY, color) {
        super(p, x, y, speedX, speedY, color);
        this.width = width;
        this.height = height;
      }

      draw() {
        p.stroke(this.color);

        p.fill(this.color);
        p.rect(this.x, this.y, this.width, this.height);
      }
    }

    class Triangle extends Shape {
      constructor(p, x, y, size, speedX, speedY, color) {
        super(p, x, y, speedX, speedY, color);
        this.size = size;
      }

      draw() {
        p.stroke(this.color);

        p.fill(this.color);
        p.triangle(
          this.x,
          this.y,
          this.x + this.size / 2,
          this.y + this.size,
          this.x - this.size / 2,
          this.y + this.size
        );
      }
    }
    let w;
    let h;
    p.windowHeight === undefined ? (h = 10) : (h = p.windowHeight);
    p.windowWidth === undefined ? (w = 10) : (w = p.windowWidth);

    p.createCanvas(w, h).parent(canvasParentRef);
    const colorArray = [
      "#38295C",
      "#f48fb1",
      "#5C6BC0",
      "#3F51B5",
      "#90caf9",
      "#BBDEFB",
      "#f48fb1",
      "#1C4D5C",
    ];

    for (let i = 0; i < 35; i++) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      let size = p.random(5, 20);
      let speedX = p.random(-1, 1);
      let speedY = p.random(-1, 1);
      let shapeType = p.floor(p.random(0, 3));
      let color = colorArray[Math.floor(Math.random() * colorArray.length)];

      switch (shapeType) {
        case 0:
          shapes.push(new Circle(p, x, y, size, speedX, speedY, color));
          break;
        case 1:
          shapes.push(
            new Rectangle(p, x, y, size, size, speedX, speedY, color)
          );
          break;
        case 2:
          shapes.push(new Triangle(p, x, y, size, speedX, speedY, color));
          break;
        default:
          // shapes.push(new Flower(x, y, size, speedX, speedY, color));
          break;
      }
    }
  };

  const draw = (p) => {
    p.clear();
    shapes.forEach((shape) => {
      shape.update();
      shape.draw();
    });
  };
  if (typeof window !== "undefined") {
    return <Sketch setup={setup} draw={draw} />;
  }
};

class Shape {
  constructor(p, x, y, speedX, speedY, color) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
  }

  update() {
    this.x += this.speedX / 4;
    this.y += this.speedY / 4;

    if (this.x > 1200 || this.x < 0) {
      this.speedX *= -1;
    }

    if (this.y > 1200 || this.y < 0) {
      this.speedY *= -1;
    }
  }
}

export default P5Wrapper;
