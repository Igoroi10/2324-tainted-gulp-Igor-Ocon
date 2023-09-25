
export default class Character{
    constructor(fullName, health, magick, stamina, potions){
        this.fullName       = fullName;
        this.health         = health;
        this.magick         = magick;
        this.staminta       = stamina;
        this.potions        = potions;
    }

    from(playerData, potions){
        console.log(playerData.name)
        const fullName = `${playerData.name} the ${playerData.class}`;
        return new Character (fullName, playerData.health, playerData.magick, playerData.stamina, potions)
    }
}