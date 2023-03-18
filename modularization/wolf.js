class Wolf{
    constructor() {
        this.strength = Math.floor(Math.random()*1000);
    }

    howl() {
        console.log(`owoooooo!`);
    }
}

module.exports = Wolf;