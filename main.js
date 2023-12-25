var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];

  var saldoActual;
  var cuentaSeleccionada;

  function login() {
    var seleccion = document.getElementById("cuentas");
    var password = document.getElementById("password").value;
    cuentaSeleccionada = seleccion.options[seleccion.selectedIndex].value;

    if (password === "123") {
      saldoActual = cuentas[cuentaSeleccionada].saldo;
      document.getElementById("operaciones").style.display = "block";
      document.getElementById("resultado").style.display = "none";
    } else {
      alert("Contraseña incorrecta. Inténtalo nuevamente.");
    }
  }

  function consultarSaldo() {
    mostrarResultado("Saldo actual: $" + saldoActual);
  }

  function ingresarMonto() {
    var monto = prompt("Ingresa el monto a ingresar:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0 && monto + saldoActual <= 990) {
      saldoActual += monto;
      mostrarResultado("Monto ingresado: $" + monto + "<br>Saldo actual: $" + saldoActual);
    } else {
      alert("Ingresa un monto válido.");
    }
  }

  function retirarMonto() {
    var monto = prompt("Ingresa el monto a retirar:");
    monto = parseFloat(monto);

    if (!isNaN(monto) && monto > 0 && saldoActual - monto >= 10 && saldoActual - monto <= 990) {
      saldoActual -= monto;
      mostrarResultado("Monto retirado: $" + monto + "<br>Saldo actual: $" + saldoActual);
    } else {
      alert("Monto no válido o excede los límites.");
    }
  }

  function mostrarResultado(mensaje) {
    document.getElementById("resultado").innerHTML = mensaje;
    document.getElementById("resultado").style.display = "block";
  }