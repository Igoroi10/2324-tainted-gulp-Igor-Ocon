import fetch from 'node-fetch';

const getDataSilverFlame = async() => {
    try {
        const result = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        return result.json();
    }
    catch (error){
        console.log(error.message);
    }
}

const getDataRustedRing = async() => {
    try {
        const result = await fetch('https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json');
        return result.json();
    }
    catch (error){
        console.log(error.message);
    }
}

export {getData};