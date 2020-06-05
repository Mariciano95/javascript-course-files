const aurora = {
    name: 'aurora',
    health: 150,
    strength: 25,
    xp: 0,
    describe() {
        return `${this.name} has ${this.health} health points and ${this.strength} as strength and 
        ${this.xp} xp`;
    }
}