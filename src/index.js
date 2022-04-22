class Circle{
    constructor(width, height, backgroundColor) {
        this.color = backgroundColor;
        this.height = `${height}px`;
        this.width = `${width}px`;

    }

    render() {
        const body = document.body;
        const div = document.createElement("div");
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.backgroundColor = this.color;
        div.style.borderRadius = "50%";
        body.appendChild(div);
        
        
    }
}

const myCircle = new Circle(50, 50, "red");
myCircle.render();
myCircle.render();