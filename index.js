async function fetchData() {
    // Pokémon
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error('Could not fetch Pokémon resource');
        }

        const data = await response.json();

        // Display Pokémon image
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Display Pokémon details
        const pokemonId = document.getElementById("pokemonId");
        pokemonId.textContent = `ID: ${data.id}`;
        const pokemonStats = document.getElementById("pokemonStats");
        pokemonStats.innerHTML = ""; // Clear previous stats
        data.stats.forEach((stat) => {
            const statElement = document.createElement("li");
            statElement.textContent = `${stat.stat.name}: ${stat.base_stat}`;
            pokemonStats.appendChild(statElement);
        });
        const pokemonAbilities = document.getElementById("pokemonAbilities");
        pokemonAbilities.innerHTML = ""; // Clear previous abilities
        data.abilities.forEach((abilityObject) => {
            const abilityElement = document.createElement("li");
            abilityElement.textContent = abilityObject.ability.name;
            pokemonAbilities.appendChild(abilityElement);
        });
        const pokemonTypes = document.getElementById("pokemonTypes");
        pokemonTypes.innerHTML = ""; // Clear previous types
        data.types.forEach((typeObject) => {
            const typeElement = document.createElement("li");
            typeElement.textContent = typeObject.type.name;
            pokemonTypes.appendChild(typeElement);
        });
    } catch (error) {
        console.error("error can't fetch");
        
    }

    // Dragon Ball
    try {
        const characterId = document.getElementById("characterIdInput").value.trim();

        const response1 = await fetch(`https://dragonball-api.com/api/characters/${characterId}`);

        if (!response1.ok) {
            throw new Error('Could not fetch Dragon Ball character resource');
        }

        const data1 = await response1.json();

        // Display Dragon Ball image
        const DBSprite = document.getElementById("DBSprite");
        DBSprite.src = data1.image; // Assuming the API has an 'image' field
        DBSprite.style.display = "block";

        // Display character details
        const characterDetails = document.getElementById("characterDetails");
        characterDetails.innerHTML = `
            <h3>${data1.name}</h3>
            <p>Ki: ${data1.ki || "Unknown"}</p>
            <p>Gender: ${data1.gender || "Unknown"}</p>
            <p>Race: ${data1.race || "Unknown"}</p>
        `;

        const characterTransformation = document.getElementById("characterTransformation");
        characterTransformation.innerHTML = ""; 

        data1.transformations.forEach((transformation) => {
        const transformationElement = document.createElement("li");
        transformationElement.textContent = transformation.name; 
        characterTransformation.appendChild(transformationElement);
});

    } catch (error) {
        console.error("error can't fetch");
    }
}
