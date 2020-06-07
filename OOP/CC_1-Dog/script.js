// A Dog is defined by:

// *A name property
// *A species property
// *A size property
// *A bark() method that returs "Grrr! Grrr!" for 
// Dogs taller than 60 emote and for others it simply returns "Woof! Woof!".

class Dog {
    constructor(name, species, size) {
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        if (this.size > 60) {
            return 'Grrr! Grrr!'
        }
        return 'Woof! Woof!';
    }
}