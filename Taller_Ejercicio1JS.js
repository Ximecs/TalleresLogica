
let edadMayor = 0;
let edadMenor = 120;

let nombreMayor = '';
let nombreMenor = '';
let cont = 0;
let registros = [];
let idMenor = 0;
let idMayor = 0;

function agregarDatos() {
    let name = document.querySelector('.input-name').value;
    let age = Number(document.querySelector('.input-age').value);
    if (age && name != "") {
        registros.push({
            'id': cont,
            'name': name,
            'age': age
        });
        // registros[cont].name = name;
        // registros[cont].age = age;
        fillTable(name, age, cont);
        cont++;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No estas escribiendo, por favor llena los campos',
        })
    }

}

function fillTable(name, age, id) {
    document.querySelector(".table tbody ").innerHTML += `<tr id='${id}'><td>${name}</td> <td>${age}</td></tr>`;
    document.querySelector(".input-name").value = "";
    document.querySelector(".input-age").value = "";
}

function comparar() {

    if (registros != "") {
        document.getElementById(idMayor).style.backgroundColor = "white";
        document.getElementById(idMenor).style.backgroundColor = "white";
        registros.forEach(registro => {
            if (registro.age >= edadMayor) {
                edadMayor = registro.age;
                nombreMayor = registro.name;
                idMayor = registro.id;
            } if (registro.age <= edadMenor) {
                edadMenor = registro.age;
                nombreMenor = registro.name;
                idMenor = registro.id;
            }
        });
        let resultadoMayor = document.querySelector('.datoMayor');
        let resultadoMenor = document.querySelector('.datoMenor');

        resultadoMayor.innerHTML = nombreMayor + " " + edadMayor;
        resultadoMenor.innerHTML = nombreMenor + " " + edadMenor;

        resultadoMayor.style.color = "pink";
        resultadoMenor.style.color = "gray";

        document.getElementById(idMayor).style.backgroundColor = "pink";
        document.getElementById(idMenor).style.backgroundColor = "gray";

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay registros en la Tabla',
        })
    }

}


