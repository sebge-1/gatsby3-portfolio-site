import React, { useEffect, useRef } from "react";
import p5 from "p5";

const P5Wrapper = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const p = new p5((p) => {
      let shapes = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent("canvasContainer");
        p.background(153);
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
              shapes.push(new Circle(x, y, size, speedX, speedY, color));
              break;
            case 1:
              shapes.push(
                new Rectangle(x, y, size, size, speedX, speedY, color)
              );
              break;
            case 2:
              shapes.push(new Triangle(x, y, size, speedX, speedY, color));
              break;
            default:
              // shapes.push(new Flower(x, y, size, speedX, speedY, color));
              break;
          }
        }
      };

      class Circle extends Shape {
        constructor(x, y, size, speedX, speedY, color) {
          super(x, y, speedX, speedY, color);
          this.size = size;
        }

        draw() {
          p.fill(this.color);
          p.circle(this.x, this.y, this.size);
        }
      }

      class Rectangle extends Shape {
        constructor(x, y, width, height, speedX, speedY, color) {
          super(x, y, speedX, speedY, color);
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
        constructor(x, y, size, speedX, speedY, color) {
          super(x, y, speedX, speedY, color);
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

      p.draw = () => {
        p.clear();
        shapes.forEach((shape) => {
          shape.update();
          shape.draw();
        });
      };
    }, sketchRef.current);
  }, []);

  return <div ref={sketchRef} id="canvasContainer" />;
};

class Shape {
  constructor(x, y, speedX, speedY, color) {
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
