class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("Hi, My name is " + this.name);
    }

    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
    }

}

class Sensei extends Ninja{
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in a month, two programmer can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
