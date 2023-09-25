
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
}