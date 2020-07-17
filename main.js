// Objeto de alunos
var student = {
  id: "students",
  students: [{ name: "Alice", status: "Pago", turma: "101", teacher: "Marcos"}]
};

//Objeto de professores
var teacher = {
  id: "teacher",
  teachers: [{ name: "Lara", classes: "Francês" },
  { name: "Marzeu", classes: "Física" },
  { name: "Almir", classes: "Matemática" },
  { name: "Diogo", classes: "Biologia" },
  { name: "Sheila", classes: "Biologia" }
  ]
};

// Função responsável por criar a tabela dinamina tanto para alunos quanto para professores

//função que lista alunos, pagamentos e turma//

function listTeacher() {
  let table = document.getElementById('teacher');
  let tbody = document.createElement('tbody'); 
 for (let j in teacher.teachers) {
  let createRow = document.createElement('tr');
  let firstData = document.createElement('td')
  firstData.style.textAlign = "center";
  let secondData = document.createElement('td');
  secondData.style.textAlign = "center";
  firstData.innerHTML = `${teacher.teachers[j].name}`;
  secondData.innerHTML = `${teacher.teachers[j].classes}`;
  createRow.appendChild(firstData);
  createRow.appendChild(secondData);
  tbody.appendChild(createRow);
  table.appendChild(tbody);
 };
};

function listStudent() {
  let table = document.getElementById('student');
  let tbody = document.createElement('tbody');
 for (let j in student.students) {
  let createRow = document.createElement('tr');
  let firstData = document.createElement('td');
  firstData.style.textAlign = "center";
  let secondData = document.createElement('td');
  secondData.style.textAlign = "center";
  let thirdData = document.createElement('td');
  thirdData.style.textAlign = "center";
  let fourthData = document.createElement('td');
  fourthData.style.textAlign = "center";
  firstData.innerHTML = `${student.students[j].name}`; secondData.innerHTML = `${student.students[j].status}`;
  thirdData.innerHTML = `${student.students[j].turma}`;
  fourthData.innerHTML = `${student.students[j].teacher}`;
  createRow.appendChild(firstData);
  createRow.appendChild(secondData);
  createRow.appendChild(thirdData);
  createRow.appendChild(fourthData);
  tbody.appendChild(createRow);
  table.appendChild(tbody);
 };
};

function add(){  
 let classeName = document.getElementById('turmaid').value;
 console.log(classeName);
}