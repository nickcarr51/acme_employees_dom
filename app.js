const app = document.querySelector('#app');

const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const createHeader = () => {
    let headerContainer = document.createElement('div');
    let headerText = document.createElement('h1');
    headerText.innerText = 'ACME Employees DOM';
    headerContainer.appendChild(headerText);
    return headerContainer;
}

const employeeCardContainer = document.createElement('div');
employeeCardContainer.classList.add('cardContainer');

const createEmployeeCard = (state) => {
    let cardContainer = document.createElement('div');
    // cardContainer.classList.add('employeeCards')
    let employeeName = document.createElement('h2');
    employeeName.innerHTML = state.name;
    cardContainer.appendChild(employeeName);


    return cardContainer;
}


// cardContainer.addEventListener('click', function(ev) {
//     ev.stopPropagation();
//     if (cardContainer.style['backgroundColor'] === 'lightBlue') {
//         cardContainer.style['backgroundColor'] = 'yellow';
//     } else {
//         cardContainer.style['backgroundColor'] = 'lightBlue';
//     }

// })

// addEventListener('click', function(ev) {
//         ev.stopPropagation();
//         if (cardContainer.style['backgroundColor'] === 'lightBlue') {
//             cardContainer.style['backgroundColor'] = 'yellow';
//         } else {
//             cardContainer.style['backgroundColor'] = 'lightBlue';
//         }
//     })





const render = () => {
    app.innerHTML = '';
    app.appendChild(createHeader());
    let favorites = 0;
    for (let i = 0; i < employees.length; i++) {

        const card = createEmployeeCard(employees[i]);

        if (employees[i].favorite === true) {
            card.className = 'employeeCardsFavorite';  
        } else {
            card.className = 'employeeCards';
        }


        card.addEventListener('click', function(ev) {
            console.log(`I've been clicked`);
            ev.stopPropagation();
            if (card.className === 'employeeCards') {
                favorites++; 
                if (favorites < 4) {
                    card.className = 'employeeCardsFavorite';
                    employees[i].favorite = true;
                    console.log(employees[i]);                    
                } else {
                    alert('You can only pick 3 favorites');
                    favorites--;
                    // employees[i].favorite = false;
                }             
            } else {
                favorites--
                card.className = 'employeeCards'
                employees[i].favorite = false;
                console.log(employees[i]);
            }

            localStorage.setItem();


        })
        employeeCardContainer.appendChild(card);

    }
    app.appendChild(employeeCardContainer);
    // app.appendChild(createEmployeeCard());
}

render();