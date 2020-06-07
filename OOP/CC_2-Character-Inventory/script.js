class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.invetory = [10, 1];
        this.xp = 0; // XP is always zero for new characters
    }
    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`
            );
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                this.invetory[0] += target.invetory[0];
                this.invetory[1] += target.invetory[1];
                target.invetory[0] = 0;
                target.invetory[1] = 0;
                console.log(
                    `${this.name} eliminated ${target.name} and winds ${bonusXP} experience points`
                );
                this.xp += bonusXP;
            }
        } else {
            console.log(`${this.name} can't attack (they have been eliminated)`);
        } 
    }
    // Retzrn the character description
    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength}
        as strength, ${this.xp} XP points, ${this.gold} and ${this.keys}`;
    };
}