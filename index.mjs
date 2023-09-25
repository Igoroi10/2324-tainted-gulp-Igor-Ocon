import { getDataSilverFlame, getDataRustedRing } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import { Cauldron } from "./Cauldron.mjs";
import PotionBag from "./PotionBag.mjs";

const execute = async () => {
    try{
        const dataIngredients = await getDataSilverFlame();
        const dataPlayers = await getDataRustedRing();
        const dataJoseph = dataPlayers.players[0];

        
        const ingredients = Ingredients.load(dataIngredients);
        
        const cauldron = new Cauldron (ingredients);
        const potionBag = new PotionBag();


        const chosenPotionBag = potionBag.createPotions(dataJoseph.pouch_aged, cauldron);

        // console.log(chosenPotionBag)

        showPotions(chosenPotionBag.potions)

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

}

execute();