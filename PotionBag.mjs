

export default class PotionBag {

    constructor (potions){
        this.potions    = potions;
    }

    createPotions(ingredients, cauldron){
        const usedIngredients = [];
        const potionArray = [];

        // ingredients.forEach(element => {

        //     ingredients.forEach(el => {
        //         if(element.name !== el.name){
        //             console.log("entra en creación de pociones")
        //             if(!potionAlreadyCreated(el, usedIngredients)){
        //                 const newPotion = cauldron.createPotion(element, el);
        //                     potionArray.push(newPotion);
        //             }
        //         }
        //     })

        //     usedIngredients.push(element);
        // });

        for(let i = 0; i < ingredients.length; i++){
            for(let l = i + 1; l < ingredients.length; l++){
                const newPotion = cauldron.createPotion(ingredients[i], ingredients[l]);
                potionArray.push(newPotion)
            }
        } 

        return new PotionBag(potionArray);
    }

}


function potionAlreadyCreated(ingredient, array){
    console.log(array);
    console.log(array.some(arrayPotion => ingredient.name === arrayPotion.name));
    // if(array.length === 0)
    //     return false;
    // else
    return array.some(arrayPotion => ingredient.name === arrayPotion.name);
}