// Add your Circle class here
class Circle{
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return radius * 2;
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    get circumfrence() {
        return diameter * Math.PI;
    }

    set circumfrence(newCircumfrence){
        this.radius = newCircumfrence/ Math.PI;
    }

    get area() {
        return Math.PI * (radius * radius);
    }

    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }

}