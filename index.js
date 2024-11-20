async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error('Could not fetch resource')

        }
        
        const data = await response.json();
        console.log(data); //inspect element to see full pokemon details

        //display image
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        //display id
        const pokemonId = document.getElementById("pokemonId")
        pokemonId.textContent = `ID: ${data.id}`

        //display stats
        const pokemonStats = document.getElementById("pokemonStats");
        pokemonStats.innerHTML = "";

        data.stats.forEach((stat) => {
            const statElement = document.createElement("li");
            statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            pokemonStats.appendChild(statElement); //this erase previous pokemon stats. Without this, the previous stats will still be displayed when you fetch a new Pokemon

        });

        //display abilities
        const pokemonAbilities = document.getElementById("pokemonAbilities")
        pokemonAbilities.innerHTML = "";

        data.abilities.forEach((abilityObject) => {
            const abilityElement = document.createElement("li");
            abilityElement.textContent = abilityObject.ability.name;
            pokemonAbilities.appendChild(abilityElement); //this erase previous pokemon abilities. Without this, the previous abilities will still be displayed when you fetch a new Pokemon

        });

        //display types
        const pokemonTypes = document.getElementById("pokemonTypes")
        pokemonTypes.innerHTML = ""; //this erase previous pokemon types. Without this, the previous types will still be displayed when you fetch a new Pokemon

        data.types.forEach((typeObject) => {
            const typeElement = document.createElement("li")
            typeElement.textContent = typeObject.type.name;
            pokemonTypes.appendChild(typeElement);

        });

    }
    catch(error){
        console.error(error);
        alert("Pokemon not found")

    }

}
