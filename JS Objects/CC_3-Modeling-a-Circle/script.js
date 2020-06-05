const circle = {
    radius: 20,
    circumference() {
        return 2 * Math.PI * this.radius;
    },
    area() {
        return Math.PI * this.radius**2;
    }
}

