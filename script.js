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
    console.log(res)

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
    const filterByCity = results.filter((e) => e.adress.city === userCity);

    if (filterByName.length === 0 && userCity === "") {
        return divContainer.innerHTML = `
            <p>Não existe um usuário com esse nome.</p>
        `;
    };

    if (filterByCity.length === 0 && userName === "") {
        return divContainer.innerHTML = `
            <p>Não existe uma cidade com esse nome.</p>
        `;
    };

    if (filterByName.length === 0 && filterByCity.length === 0) {
        return divContainer.innerHTML = `
            <p>Não existe uma cidade e usuário com esse nome.</p>
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

    divContainer.innerHTML = "";
    filterByName.map((e) =>
        divContainer.innerHTML += `
            <h4>Nome: ${e.name}</h4>
            <p>Email: ${e.email}</p>
            <p>Cidade: ${e.address.city}</p>
    `
    );
});