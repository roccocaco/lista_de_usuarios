// Imports

// Seletores
const inputName = document.getElementById('input-name');
const inputCity = document.getElementById('input-city');
const btnSearch = document.getElementById('btn-search');
const btnName = document.getElementById('btn-name');
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

btnName.addEventListener('click', () => {
    const userName = inputName.value;
    const filterByName = results.filter((e) => e.name === userName);

    if (filterByName.length === 0) {
        return divContainer.innerHTML = `
            <p>Não existe um usuário com esse nome.</p>
        `;
    };

    divContainer.innerHTML = "";
    filterByName.map((e) =>
        divContainer.innerHTML += `
            <h4>Nome: ${e.name}</h4>
            <p>Email: ${e.email}</p>
            <p>Cidade: ${e.address.city}</p>
    `
    );
})

btnSearch.addEventListener('click', () => {    
    const userCity = inputCity.value;
    const filterByCity = results.filter((e) => e.address.city === userCity);

    if (filterByCity.length === 0) {
        return divContainer.innerHTML = `
            <p>Não existe uma cidade com esse nome.</p>
        `;
    };

    divContainer.innerHTML = "";
    filterByCity.map((e) =>
        divContainer.innerHTML += `
            <h4>Nome: ${e.name}</h4>
            <p>Email: ${e.email}</p>
            <p>Cidade: ${e.address.city}</p>
    `
    );
});