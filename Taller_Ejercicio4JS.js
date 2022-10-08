let result = [1,2]


function inicio() {
let valor = document.querySelector('.value').value
document.querySelector('.value').value =''
// alert (valor)

// let result = [0,1]
for (let i = 0; i < valor-1; i++) {
    let insertar =result[i]+result[i+1]
    result.push(insertar)
    // alert(insertar)
    }

document.querySelector('.table').innerHTML = `<tr><td>Ciclo = ${result}</td></tr>`
}