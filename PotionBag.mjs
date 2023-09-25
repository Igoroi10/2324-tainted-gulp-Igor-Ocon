

export default class PotionBag {

    constructor (potions){
        this.potions    = potions;
    }

    createPotions(ingredients, cauldron){
        const usedIngredients = [];
        const potionArray = ingredients.forEach(element => {

            ingredients.forEach(el => {
                const newPotion = cauldron.createPotion(element, el);

                if(!potionAlreadyCreated(el, usedIngredients))
                    potionArray.push(newPotion);

            })

            usedIngredients.push(element);
        });

        console.log(potionArray);
    }


    potionAlreadyCreated(ingredient, array){
        return array.some(arrayPotion => ingredient.name === arrayPotion.name );
    }
}
