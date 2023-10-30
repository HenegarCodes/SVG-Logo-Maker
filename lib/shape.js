class Shape {
    constructor(textColor, shapeColor, logo) {
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.logo = logo;
    }
    render(){
        return `<svg width="300" height="200">
        <!-- Other SVG elements -->
      </svg>`;
    }
}

class Circle extends Shape {
    constructor(textColor, color, logo) {
        super(textColor, color, logo)
    }
}
class Square extends Shape {
    constructor(textColor, color, logo) {
        super(textColor, color, logo)
    }
}

class Triangle extends Shape {
    constructor(textColor, color, logo) {
        super(textColor, color, logo)
    }
}


module.exports = { Triangle, Circle, Square }