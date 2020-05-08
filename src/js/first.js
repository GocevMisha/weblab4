export function start(){
    const content = document.getElementById('root');

    let pokemonButton = document.getElementById('pokemon-button');
    let infoButton = document.getElementById('info-button');

    pokemonButton.className = 'first-button';
    infoButton.className = 'first-button';

    content.innerHTML = '';
    content.className = 'first-page text-center';

    document.body.className = 'first';
    let list = document.createElement("li");
    let ul = document.createElement('ul');
    list.innerHTML = "Mikhail Gotsev";
    ul.appendChild(list);

    let name = document.createElement('h1');
    name.className = 'name';
    let info = document.createElement("div");
    info.className = 'info';
    name.innerHTML = "Mikhail Gotsev";
    info.appendChild(name);


    let restInfo = document.createElement("p");
    restInfo.className = 'rest-info';
    restInfo.innerHTML = "M3308";

    info.appendChild(restInfo);
    content.appendChild(info);
}







