

function agregar(e) {
    let valorVenta = Number(document.querySelector('.input-price').value);
    if (e.key == "Enter") {
        if (valorVenta != "") {
            let descuento = (valorVenta * 0.07).toFixed(2);
            let valorTotal = valorVenta - descuento;
            console.log(valorVenta, descuento, valorVenta)
            document.querySelector(".table tbody").innerHTML += `<tr><td>$${valorVenta}</td> <td> $${descuento}</td> <td>$${valorTotal}</td></tr>`;
            document.querySelector(".input-price").value = "";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No estas escribiendo, por favor llena los campos',
            })
        }
    }
}




