
let edadMayor = 0;
let edadMenor = 120;

let nombreMayor = '';
let nombreMenor = '';

function agregarDatos() {
    let name = document.querySelector('.input-name').value;
    let age = document.querySelector('.input-age').value;
    if (age && name != "") {
        fillTable(name, age);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No estas escribiendo, por favor llena los campos',
          })
    }

}

function fillTable(name, age) {
    document.querySelector(".table tbody tr").innerHTML += `<tr><td>${name}</td> <td>${age}</td></tr>`;
    document.querySelector(".input-name").value = "";
    document.querySelector(".input-age").value = "";
}

function comparar(name1,age1) {
    
}


