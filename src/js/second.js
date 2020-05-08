export function render() {
    const content = document.getElementById('root');
    content.className = 'second-page';
    content.innerHTML = '';

    let pokemonButton = document.getElementById('pokemon-button');
    let infoButton = document.getElementById('info-button');
    pokemonButton.className = 'second-button';
    infoButton.className = 'second-button';

    document.body.className = 'second';
    let name = document.createElement('h1');
    name.className = 'poke-name text-center';
    let abilities = document.createElement('div');
    let header = document.createElement('h1');
    header.className = 'header';
    header.innerHTML = "Abilities";

    async function getPokemon() {

        let id = Math.floor(Math.random() * (808));

        const url = 'https://pokeapi.co/api/v2/pokemon/' + id.toString() + '/';
        const response = await fetch(url, {method: 'GET'});
        const json = await response.json();
        name.innerHTML = json.name;

        for (let i = 0; i < json.abilities.length; i++) {

            let abilityName = json.abilities[i].ability.name;
            let abilityURL = json.abilities[i].ability.url;

            let div = document.createElement('div');
            div.className = 'div';

            let ability = document.createElement('span');
            ability.className = 'ability';
            ability.innerHTML = abilityName;

            let description = document.createElement('p');
            description.className = 'description';


            div.appendChild(ability);
            content.appendChild(div);

            async function apiCall(url) {
                const response = await fetch(url, {method: 'GET'});
                const json = await response.json();
                description.innerHTML = json.effect_entries[0].effect;
                div.appendChild(description);
            }

            await apiCall(abilityURL);
            abilities.appendChild(div);
        }
    }
    getPokemon().then();
    content.appendChild(name);
    abilities.appendChild(header);
    content.appendChild(abilities);
}
