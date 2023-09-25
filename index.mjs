import { getDataSilverFlame, getDataRustedRing } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import { Cauldron } from "./Cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Character from "./Character.mjs";

const execute = async () => {
    try{
        const dataIngredients = await getDataSilverFlame();
        const dataPlayers = await getDataRustedRing();
        const dataJoseph = dataPlayers.players[0];

        
        const ingredients = Ingredients.load(dataIngredients);
        
        const cauldron = new Cauldron (ingredients);
        const potionBag = new PotionBag();
        const character = new Character();


        const chosenPotionBag = potionBag.createPotions(dataJoseph.pouch_aged, cauldron);
        const joseph = character.from(dataJoseph, chosenPotionBag)

        // showPotions(chosenPotionBag.potions)

        // showCharacter(joseph);

        joseph.drinkEmAll()

    }
    catch{
        // console.error("Error in reaching DB");
    }
}

function showPotions(potionArray){

    potionArray.forEach(potion => {
        console.log(`${potion.name}`);
        console.log(`Value:              ${potion.value}`);
        console.log(`Weight:             ${potion.weight}`);
        console.log(`Time:               ${potion.time}`);
        console.log("--------------------------");
    });
    console.log("-------------------------------------------------------");
    console.log("-------------------------------------------------------");
}

function showCharacter(character){
    console.log(character.fullName);
    console.log("--------------------------");
    console.log(`Health:        ${character.health}`);
    console.log(`Magick:        ${character.magick}`);
    console.log(`Stamina:       ${character.stamina}`);
    character.potions.forEach((element,index) => {
        console.log(`Potion ${(index+1)}: ${element.name}`);
    })

}

execute();