// const hayRegistros = document.getElementById("userTable").children.length > 0;
// console.log(hayRegistros)
// if (!hayRegistros){
//   document.getElementById("botonBorrarAll").classList.add("hidden")
// }

document.getElementById("submitBtn").addEventListener("click", function () {
  let valido = true;

  // Validadmos el nombre
  const nombre = document.getElementById("nombre");
  const labelNombre = document.getElementById("labelNombre");

  if (nombre.value.trim() === "") {
    //El nombre está vació. Añadimos la clase de INVÁLIDO
    nombre.classList.add("invalido");
    labelNombre.classList.add("label-invalido");
    valido = false;
  } else {
    nombre.classList.remove("invalido");
    labelNombre.classList.remove("label-invalido");
    nombre.classList.add("valido");
    labelNombre.classList.add("label-valido");
  }

  // Validadmos el Email
  const email = document.getElementById("email");
  const labelEmail = document.getElementById("labelEmail");
  if (email.value.trim() === "") {
    //El nombre está vació. Añadimos la clase de INVÁLIDO
    email.classList.add("invalido");
    labelEmail.classList.add("label-invalido");
    valido = false;
  } else {
    email.classList.remove("invalido");
    labelEmail.classList.remove("label-invalido");
    email.classList.add("valido");
    labelEmail.classList.add("label-valido");
  }

  // Validadmos el Teléfono
  const telefono = document.getElementById("telefono");
  const labelTelefono = document.getElementById("labelTelefono");
  if (telefono.value.trim() === "") {
    //El nombre está vació. Añadimos la clase de INVÁLIDO
    telefono.classList.add("invalido");
    labelTelefono.classList.add("label-invalido");
    valido = false;
  } else {
    telefono.classList.remove("invalido");
    labelTelefono.classList.remove("label-invalido");
    telefono.classList.add("valido");
    labelTelefono.classList.add("label-valido");
  }

  // Validadmos los Comentario
  const comentarios = document.getElementById("comentarios");
  const labelComentarios = document.getElementById("labelComentarios");
  if (comentarios.value.trim() === "") {
    //El nombre está vació. Añadimos la clase de INVÁLIDO
    comentarios.classList.add("invalido");
    labelComentarios.classList.add("label-invalido");
    valido = false;
  } else {
    comentarios.classList.remove("invalido");
    labelComentarios.classList.remove("label-invalido");
    comentarios.classList.add("valido");
    labelComentarios.classList.add("label-valido");
  }

  // Validamos el país
  const pais = document.getElementById("pais");
  const labelPais = document.getElementById("labelPais");
  if (pais.value === "") {
    pais.classList.add("invalido");
    labelPais.classList.add("label-invalido");
    valido = false;
  } else {
    pais.classList.remove("invalido");
    labelPais.classList.remove("label-invalido");
    pais.classList.add("valido");
    labelPais.classList.add("label-valido");
  }

  //Validamos los intereses
  const labelIntereses = document.getElementById("labelIntereses");
  const intereses = document.querySelectorAll('input[type="checkbox"]');
  let checado = false;
  intereses.forEach((interes) => {
    if (interes.checked) {
      checado = true;
    }
  });
  if (!checado) {
    labelIntereses.classList.add("label-invalido");
    valido = false;
  } else {
    labelIntereses.classList.remove("label-invalido");
    labelIntereses.classList.add("label-valido");
  }

  // Vamos a checar si todos los campos están llenos
  if (valido) {
    // Entonces sí podemos mandar el formulario
    // alert("El Formulario se ha enviado correctamente.");

    const nuevaFila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre.value;

    const celdaEmail = document.createElement("td");
    celdaEmail.textContent = email.value;

    const celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = telefono.value;

    const celdaPais = document.createElement("td");
    celdaPais.textContent = pais.value;

    // Añadimos un botón para permitirnos borrar el registro
    const celdaBoton = document.createElement("td");
    celdaBoton.classList.add("celda-boton");
    const botonFila = document.createElement("button");
    botonFila.textContent = "Borrar";
    botonFila.classList.add("boton-rojo");

    // Añadimos esta función para borrar un registro
    botonFila.addEventListener("click", function () {
      nuevaFila.remove();
      visibilidadBtnBorrar()
    });
    celdaBoton.appendChild(botonFila);

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaEmail);
    nuevaFila.appendChild(celdaTelefono);
    nuevaFila.appendChild(celdaPais);
    nuevaFila.appendChild(celdaBoton);
    document.getElementById("userTable").appendChild(nuevaFila);
    visibilidadBtnBorrar()

    // Limpiamos los campos del formulario
    nombre.value = "";
    email.value = "";
    telefono.value = "";
    comentarios.value = "";
    pais.value = "";
    intereses.forEach((interes) => (interes.checked = false));

    // Quitamos las clases del formulario
    nombre.classList.remove("valido", "invalido");
    labelNombre.classList.remove("label-valido", "label-invalido");
    email.classList.remove("valido", "invalido");
    labelEmail.classList.remove("label-valido", "label-invalido");
    telefono.classList.remove("valido", "invalido");
    labelTelefono.classList.remove("label-valido", "label-invalido");
    comentarios.classList.remove("valido", "invalido");
    labelComentarios.classList.remove("label-valido", "label-invalido");
    pais.classList.remove("valido", "invalido");
    labelPais.classList.remove("label-valido", "label-invalido");
    labelIntereses.classList.remove("label-valido", "label-invalido");
  } else {
    alert("Todos los campos se deben de llenar");
  }
});

document.getElementById("botonBorrarAll").addEventListener("click", function(){
  // Con ".replaceChildren", borramos todos los children node que contiene "userTable"
  document.getElementById('userTable').replaceChildren();
  visibilidadBtnBorrar()
})

// Esta función nos ayuda a saber si se debe visualizar el boton de Borrado General
// Este botón sólo se visualizará si hay registros de Usuarios
function visibilidadBtnBorrar() {
  const hayRegistros = document.getElementById("userTable").children.length > 1;
  if (!hayRegistros) {
    document.getElementById("botonBorrarAll").classList.add("hidden");
  } else{
    document.getElementById("botonBorrarAll").classList.remove("hidden");
  }
}
