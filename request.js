

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



function changingStats(stat,id){
    var statArea=document.getElementById(id);
    statArea.innerHTML=stat;
}

function checkPokemonAPI(selectValue){
    var finalPokemon;
    console.log(selectValue);
    switch(selectValue){
        
        case '1':
            finalPokemon=pikachuAPI;
            break;
        case '2':
            finalPokemon=eeveeAPI;
            break;
        case '3':
            finalPokemon=piplupAPI;
            break;
        case '4':
            finalPokemon=charmanderAPI;
            break;
        case '5':
            finalPokemon=rowletAPI;
            break;
        case '6':
            finalPokemon=froakieAPI;
            break;
        case '7':
            finalPokemon=turtwigAPI;
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

            var changeStat;
            console.log(data);

            //type
            changeStat=data.types[0].type.name;
            changingStats(changeStat,'type');

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