class Shape {
    constructor(textColor, shapeColor, logo) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.logo = logo;
    }

}

class Circle extends Shape {
    constructor(textColor, shapeColor, logo) {
        super(textColor, shapeColor, logo)
    }
    render() {
        const circleRadius = 50;
        const circleCenterX = 100;
        const circleCenterY = 100;
        const textX = circleCenterX;
        const textY = circleCenterY;
    
        return `
        <svg width="300" height="200">
          <circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${this.shapeColor}" />
          <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.logo}</text>
  
        </svg>
      `;
    }
}
class Square extends Shape {
    constructor(textColor, shapeColor, logo) {
        super(textColor, shapeColor, logo)
    }
    render() {
        const squareX = 50;
        const squareY = 50;
        const squareSize = 100;
        const textX = squareX + squareSize / 2;
        const textY = squareY + squareSize / 2;

        return `
          <svg width="300" height="200">
            <rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />
            <text x="75" y="125" fill="${this.textColor}">${this.logo}</text>

          </svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(textColor, shapeColor, logo) {
        super(textColor, shapeColor, logo)
    }
    render() {
        const trianglePoints = "150, 18 244, 182 56, 182";
        const textX = 150;
        const textY = 100;
    
        return `
        <svg width="300" height="200">
          <polygon points="${trianglePoints}" fill="${this.shapeColor}" />
          <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" fill="${this.textColor}">${this.logo}</text>
         
        </svg>
      `;
    }
}


module.exports = { Triangle, Circle, Square }