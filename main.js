// função que lista professores////

var teacher = {
  id: ["teacher"],
  name: ["Lara", "Marzeu", "Almir", "Diogo", "Sheila"],
  classes: ["Francês", "Física", "Matemática", "Biologia", "Biologia"]
};


// Função responsável por criar a tabela dinamina tanto para alunos quanto para professores
function createTable(tableName) {
  let table = document.getElementById(tableName.id);
  let tbody = document.createElement('tbody');
  let numOfRows = tableName[Object.keys(tableName)[1]];
  let numOfCols = tableName[Object.keys(tableName)[2]];

  for (let j in numOfRows) {
    let createRow = document.createElement('tr');
    let firstData = document.createElement('td')
    firstData.style.textAlign = "center";
    let secondData = document.createElement('td');
    secondData.style.textAlign = "center";
    firstData.innerHTML = `${numOfRows[j]}`;
    secondData.innerHTML = `${numOfCols[j]}`;
    createRow.appendChild(firstData);
    createRow.appendChild(secondData);
    tbody.appendChild(createRow);
    table.appendChild(tbody);
  };
};


//função que lista alunos e pagamentos//

var students = {
  id: ["students"],
  name: ["Alice", "Breno", "Caio", "Luísa", "Paulo"],
  status: ["Pago", "Pendente", "Dívida", "Pago", "Pendente"],
};

