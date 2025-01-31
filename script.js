// Imports

// Seletores
const inputName = document.getElementById('input-name');
const inputCity = document.getElementById('input-city');
const btnSearch = document.getElementById('btn-search');
const divContainer = document.getElementById('container');

// Variaveis
let results = [];

// Funções
const fetchApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const req = await fetch(url);
    const res = await req.json();

    return res
};

// Eventos
window.addEventListener('load', async () => {
    results = await fetchApi();

    results.map((e) =>
        divContainer.innerHTML += `
            <h4>Nome: ${e.name}</h4>
            <p>Email: ${e.email}</p>
            <p>Cidade: ${e.address.city}</p>
    `
    );
});

btnSearch.addEventListener('click', () => {
    const userName = inputName.Value;
    const userCity = inputCity.Value;

    const filterByName = results.filter((e) => e.name === userName);

    divContainer.innerHTML = "";
    filterByName.map((e) =>
        divContainer.innerHTML += `
            <h4>Nome: ${e.name}</h4>
            <p>Email: ${e.email}</p>
            <p>Cidade: ${e.address.city}</p>
    `
    );
});