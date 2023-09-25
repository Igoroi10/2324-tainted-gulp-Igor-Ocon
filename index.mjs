import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import { Cauldron } from "./Cauldron.mjs";
import PotionBag from "./PotionBag.mjs";

const execute = async () => {
    try{
        const dataIngredients = await getData();
        
        const ingredients = Ingredients.load(dataIngredients);
        showIngredients(ingredients);
        const cauldron = new Cauldron (ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");


    }
    catch{
        // console.error("Error in reaching DB");
    }
}

const showIngredients = (ingredients) =>{
    ingredients.ingredients.forEach(ingredient => {
        console.log(ingredient.name);
        console.log(ingredient.effects);
        console.log("--------------------------")
        
    });
    console.log("-------------------------------------")
    console.log("-------------------------------------")
}

function showPotion(potion){
    console.log(`${potion.name}`);
    console.log(`Value:              ${potion.value}`);
    console.log(`Weight:             ${potion.weight}`);
    console.log(`Time:               ${potion.time}`);
    console.log("--------------------------");
}

execute();