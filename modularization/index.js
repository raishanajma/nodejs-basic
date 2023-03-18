const Tiger = require('./tiger');
const Wolf = require(`./wolf`)

const fighting = (Tiger, Wolf) => {
    if(Tiger.strength > Wolf.strength) {
        Tiger.growl();
        return;
    }

    if(Tiger.strength < Wolf.strength) {
        Wolf.howl();
        return;
    }

    console.log(`Tiger and Wolf have same strength`);
}

const tiger = new Tiger();
const wolf = new Wolf();

fighting(tiger, wolf)