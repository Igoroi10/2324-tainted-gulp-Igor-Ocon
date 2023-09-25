import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import { Cauldron } from "./Cauldron.mjs";

const execute = async () => {
    try{
        const data = await getData();
        
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients);
        const cauldron = new Cauldron (ingredients);

        const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        showPotion(potion1);

        const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
        showPotion(potion2);

        const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
        showPotion(potion3)

        const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        showPotion(potion4);

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