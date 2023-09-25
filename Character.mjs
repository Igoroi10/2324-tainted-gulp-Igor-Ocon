
export default class Character{
    constructor(fullName, health, magick, stamina, potions){
        fullName,
        health,
        magick,
        stamina,
        potions
    }

    from(playerData, potions){
        const fullName = `${playerData.name} the ${playerData.class}`;
        return new Character (fullName, playerData.health, playerData.magick, playerData.stamina, potions)
    }
}