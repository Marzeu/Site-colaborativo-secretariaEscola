// Objeto de alunos
var student = {
  id: "students",
  students: [{ name: "Alice", status: "Pago", turma: "101", teacher: "Marcos" }]
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
  for (let j in classes.students) {
    let createRow = document.createElement('tr');
    let firstData = document.createElement('td');
    firstData.style.textAlign = "center";
    let secondData = document.createElement('td');
    secondData.style.textAlign = "center";
    let thirdData = document.createElement('td');
    thirdData.style.textAlign = "center";
    let fourthData = document.createElement('td');
    fourthData.style.textAlign = "center";
    firstData.innerHTML = `${classes.students[j].name}`; secondData.innerHTML = `${classes.students[j].status}`;
    thirdData.innerHTML = `${classes.students[j].classNane}`;
    fourthData.innerHTML = `${classes.students[j].teacher}`;
    createRow.appendChild(firstData);
    createRow.appendChild(secondData);
    createRow.appendChild(thirdData);
    createRow.appendChild(fourthData);
    tbody.appendChild(createRow);
    table.appendChild(tbody);
  };
};

function add() {
  let classeName = document.getElementById('classId').value;
  let studentName = document.getElementById('studentId').value;
  let teacherName = document.getElementById('teacherId').value;
  classes.students.push({ name: `${studentName}`, status: "Pago", classNane: `${classeName}`, teacher: `${teacherName}` });
  console.log(classes);
};

var classes = {
  students: [{ name: "Alice", status: "Pago", classNane: "101", teacher: "Marcos" }]
};