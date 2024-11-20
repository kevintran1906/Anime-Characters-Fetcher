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

        //display stats
        const pokemonStats = document.getElementById("pokemonStats");
        pokemonStats.innerHTML = "";

        data.stats.forEach((stat) => {
            const statElement = document.createElement("li");
            statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            pokemonStats.appendChild(statElement);
        });

    }
    catch(error){
        console.error(error);

    }

}
