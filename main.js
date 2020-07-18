//Objeto de professores

var teacher = {
  teachers: [{ name: "Lara", classes: "Francês" },
  { name: "Marzeu", classes: "Física" },
  { name: "Almir", classes: "Matemática" },
  { name: "Diogo", classes: "Biologia" },
  { name: "Sheila", classes: "Biologia" }]
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
    thirdData.innerHTML = `${classes.students[j].className}`;
    fourthData.innerHTML = `${classes.students[j].teacher}`;
    createRow.appendChild(firstData);
    createRow.appendChild(secondData);
    createRow.appendChild(thirdData);
    createRow.appendChild(fourthData);
    tbody.appendChild(createRow);
    table.appendChild(tbody);
  };
};

var classes = {
  students: [{}]
};

//armazenar os dados no navagador
function createlocalData() {
  classes.students = JSON.parse(localStorage.getItem('data'));

  if (classes.students == null) {
    classes.students = [];
  }

  let classeName = document.getElementById('classId').value;
  let studentName = document.getElementById('studentId').value;
  let teacherName = document.getElementById('teacherId').value;
  classes.students.push({ name: `${studentName}`, status: "Pago", className: `${classeName}`, teacher: `${teacherName}` });

  let classesJson = JSON.stringify(classes.students);
  localStorage.setItem('data', classesJson);

  alert("Cadastro realizado com sucesso");
  location.reload();
};


function listData() {
  classes.students = JSON.parse(localStorage.getItem('data'));
  if (typeof (Storage) !== "undefined") {

    if (classes == null) {
      classes = {};
    };
  };
  listStudent();
};
