

var selectStarter=document.getElementById('starter');
var selectValue=selectStarter.value;

//API link of each Pokemon
var pikachuAPI='https://pokeapi.co/api/v2/pokemon/pikachu';
var eeveeAPI='https://pokeapi.co/api/v2/pokemon/eevee';
var piplupAPI='https://pokeapi.co/api/v2/pokemon/piplup';
var charmanderAPI='https://pokeapi.co/api/v2/pokemon/charmander';
var rowletAPI='https://pokeapi.co/api/v2/pokemon/rowlet';
var froakieAPI='https://pokeapi.co/api/v2/pokemon/froakie';
var turtwigAPI='https://pokeapi.co/api/v2/pokemon/turtwig';

//Image Link of each Pokemon
var pikachuImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png';
var eeveeImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png';
var piplupImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png';
var charmanderImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png';
var rowletImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png';
var froakieImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png';
var turtwigImg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png';

function changingStats(stat,id){
    var statArea=document.getElementById(id);
    statArea.innerHTML=stat;   
}

function changingType(stat,id){
    var stat=capitalizeFirstLetter(stat);
    var statArea=document.getElementById(id);
    statArea.innerHTML=stat;   
}

function changingName(name){
    var name= capitalizeFirstLetter(name);
    document.getElementById('pokemon-name').innerHTML=name;
}

function changingImage(pokemonImg){
    document.getElementById('starter-img').src=pokemonImg;
    document.getElementById('pokemon-name').innerText='';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function checkPokemonAPI(selectValue){
    var finalPokemon;
    console.log(selectValue);
    switch(selectValue){
        
        case '1':
            finalPokemon=pikachuAPI;
            changingImage(pikachuImg);
            break;
        case '2':
            finalPokemon=eeveeAPI;
            changingImage(eeveeImg);
            break;
        case '3':
            finalPokemon=piplupAPI;
            changingImage(piplupImg);
            break;
        case '4':
            finalPokemon=charmanderAPI;
            changingImage(charmanderImg);
            break;
        case '5':
            finalPokemon=rowletAPI;
            changingImage(rowletImg);
            break;
        case '6':
            finalPokemon=froakieAPI;
            changingImage(froakieImg);
            break;
        case '7':
            finalPokemon=turtwigAPI;
            changingImage(turtwigImg);
            break;
        default:
            console.log("Error, Could not Find API");
            finalPokemon='error';
            break;
    }
    return finalPokemon;
}

function getPokemon(selectedPokemon){
    var selectValue=selectedPokemon.value;
    var pokemonAPI= checkPokemonAPI(selectValue);
    fetch(pokemonAPI)
    .then(function (response) {
        console.log(response);

        if(response.status!==200){
            console.log('Looks like there was a problem. Status Code: ' 
            + response.status);
            return;
        }

        response.json().then(function(data){
            var changeStat;//initial value   
            console.log(data);
            changingName(data.name);
            //type
            changeStat=data.types[0].type.name;
            changingType(changeStat,'type');
            //hp
            changeStat=data.stats[0].base_stat;
            changingStats(changeStat,'hp');
            //attack
            changeStat=data.stats[1].base_stat;
            changingStats(changeStat,'attack');
            //defense
            changeStat=data.stats[2].base_stat;
            changingStats(changeStat,'defense');
            //special-attack
            changeStat=data.stats[3].base_stat;
            changingStats(changeStat,'special-attack');
            //special-defense
            changeStat=data.stats[4].base_stat;
            changingStats(changeStat,'special-defense');
            //speed
            changeStat=data.stats[5].base_stat;
            changingStats(changeStat,'speed');
            
        })
    }
    )
    .catch(function(err){
        console.log(err+'404');
    }
    )
}