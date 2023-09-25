
export default class Character{
    constructor(fullName, health, magick, stamina, potions){
        this.fullName       = fullName;
        this.health         = health;
        this.magick         = magick;
        this.stamina       = stamina;
        this.potions        = potions;
    }

    from(playerData, potions){
        const fullName = `${playerData.name} the ${playerData.class}`;
        return new Character (fullName, playerData.health, playerData.magick, playerData.stamina, potions.potions)
    }

    drinkEmAll(){


        let stillInGame = true;

        this.potions.forEach(currentPotion => {

            if(stillInGame){
                if(checkIfPotion(currentPotion)){
                    if(currentPotion.name.includes("Health")){
                        this.health += currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and gains ${currentPotion.value} points of health.`);
                    }
                
                    else if(currentPotion.name.includes("Stamina")){
                        this.stamina += currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and gains ${currentPotion.value} points of stamina.`);
                    
                    }

                    else if(currentPotion.name.includes("Magick")){
                        this.magick += currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and gains ${currentPotion.value} points of magick.`);
                    
                    }

                    else if(currentPotion.name.includes("Failed")){
                        console.log(`Failed Potion. ${this.fullName} cannot drink.`);
                    
                    }

                    else if(currentPotion.name.includes("Sanity")){
                        this.health += currentPotion.value;
                        this.magick += currentPotion.value;
                        this.stamina += currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and gains ${currentPotion.value} points of each attribute.`);
                    
                    }

                    else{
                        this.health++
                        this.magick++
                        this.stamina++
                        console.log(`${this.fullName} drinks ${currentPotion.name} and gains one point of each attribute.`);
                    }
                }

                else{

                    if(currentPotion.name.includes("Health")){
                        this.health -= currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and loses ${currentPotion.value} points of health.`);
                    }
                
                    else if(currentPotion.name.includes("Stamina")){
                        this.stamina -= currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and loses ${currentPotion.value} points of stamina.`);
                    
                    }

                    else if(currentPotion.name.includes("Magick")){
                        this.magick -= currentPotion.value;
                        console.log(`${this.fullName} drinks ${currentPotion.name} and loses ${currentPotion.value} points of magicka.`);
                    
                    }
                }


                console.log(`Health:        ${this.health}`);
                console.log(`Magick:        ${this.magick}`);
                console.log(`Stamina:       ${this.stamina}`);
                console.log("-----------------------------------------");


                if(this.health < 1){
                    console.log(`${this.fullName} has died.`);
                    stillInGame = false;
                }

                if(this.stamina < 1){
                    console.log(`${this.fullName} has lost all his stamina. He feels completely exhausted`);
                    stillInGame = false;
                }

                if(this.magick < 1){
                    console.log(`${this.fullName} has depleted all his magicka. He shall be no more a mage.`);
                    stillInGame = false;
                }

                if(currentPotion.name.includes("Sanity")){
                    console.log(`${this.fullName} has found the ${currentPotion.name}. His mind is healed. Well done!!`)
                }
            }

            
        });
    }
}

function checkIfPotion(potion){
    return potion.name.includes("Potion") || potion.name.includes("potion");
}
