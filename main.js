const cpYprovincias = [
  [01, "Álava"],
  [02, "Albacete"],
  [03, "Alicante"],
  [04, "Almería"],
  [05, "Ávila"],
  [06, "Badajoz"],
  [07, "Baleares"],
  [08, "Barcelona"],
  [09, "Burgos"],
  [10, "Cáceres"],
  [11, "Cádiz"],
  [12, "Castellón"],
  [13, "Ciudad Real"],
  [14, "Córdoba"],
  [15, "Coruña"],
  [16, "Cuenca"],
  [17, "Gerona"],
  [18, "Granada"],
  [19, "Guadalajara"],
  [20, "Guipúzcoa"],
  [21, "Huelva"],
  [22, "Huesca]"],
  [23, "Jaén"],
  [24, "León"],
  [25, "Lérida"],
  [26, "La Rioja"],
  [27, "Lugo"],
  [28, "Madrid"],
  [29, "Málaga"],
  [30, "Murcia"],
  [31, "Navarra"],
  [32, "Orense"],
  [33, "Asturias"],
  [34, "Palencia"],
  [35, "Las Palmas"],
  [36, "Pontevedra"],
  [37, "Salamanca"],
  [38, "Santa Cruz de Tenerife"],
  [39, "Cantabria"],
  [40, "Segovia"],
  [41, "Sevilla"],
  [42, "Soria"],
  [43, "Tarragona"],
  [44, "Teruel"],
  [45, "Toledo"],
  [46, "Valencia"],
  [47, "Valladolid"],
  [48, "Vizcaya"],
  [49, "Zamora"],
  [50, "Zaragoza"],
  [51, "Ceuta"],
  [52, "Melilla"],
];

const provincias = [
  "ALAVA",
  "ALBACETE",
  "ALICANTE",
  "ALMERIA",
  "AVILA",
  "BADAJOZ",
  "ISLAS BALEARES",
  "BARCELONA",
  "BURGOS",
  "CACERES",
  "CADIZ",
  "CASTELLON",
  "CIUDAD REAL",
  "CORDOBA",
  "LA CORUNHA",
  "CUENCA",
  "GERONA",
  "GRANADA",
  "GUADALAJARA",
  "GUIPUZCOA",
  "HUELVA",
  "HUESCA",
  "JAEN",
  "LEON",
  "LERIDA",
  "LA RIOJA",
  "LUGO",
  "MADRID",
  "MALAGA",
  "MURCIA",
  "NAVARRA",
  "ORENSE",
  "ASTURIAS",
  "PALENCIA",
  "LAS PALMAS",
  "PONTEVEDRA",
  "SALAMANCA",
  "SANTA CRUZ DE TENERIFE",
  "CANTABRIA",
  "SEGOVIA",
  "SEVILLA",
  "SORIA",
  "TARRAGONA",
  "TERUEL",
  "TOLEDO",
  "VALENCIA",
  "VALLADOLID",
  "VIZCAYA",
  "ZAMORA",
  "ZARAGOZA",
  "CEUTA",
  "MELILLA",
];

//functions to show form values

function showPoints() {
  const points = document.querySelector("#valoracion").value;

  alert(`Has valorado con ${points} puntos`);
}

function showAccountNumber() {
  const pais = document.querySelector("#pais").value;
  const control = document.querySelector("#control").value;
  const entidad = document.querySelector("#entidad").value;
  const sucursal = document.querySelector("#sucursal").value;
  const dc = document.querySelector("#dc").value;
  const cuenta = document.querySelector("#cuenta").value;
  alert(
    `Su número de cuenta es: ${pais}-${control}-${entidad}-${sucursal}-${dc}-${cuenta}`
  );
}

function showDate() {
  const date_dom = document.getElementById("date").value;
  const fecha_date = new Date(date_dom);
  let date_format = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
  }).format(fecha_date);

  alert(`La fecha seleccionada es ${date_dom}, ${date_format}`);
}


//DOM msg
function showedText(validatedText, color) {
  let msg = document.querySelector("#showedText");
  msg.innerText = validatedText;
  msg.style.color = color;
}

//Validations

//CP format
function validation() {
  const codigopostalRegex = /^[0-9]{5,5}$/;
  const provinciaRegex = /^[a-zA-Z\s]{4,25}$/;
  const codigopostal = document.querySelector("#postal");
  let numerocp = codigopostal.value;

  if (!codigopostalRegex.test(numerocp) || codigopostal.length < 5) {
    showedText("El código postal no tiene el formato correcto.", "red");
    return false;
  }

  let doscodigopostal = numerocp.slice(0, 2);
  console.log(parseInt(doscodigopostal, 10));
  let provCodigopostal = cpYprovincias[parseInt(doscodigopostal, 10)];
  console.log(provCodigopostal);
  const localidad = document.querySelector("#localidad");

  if (localidad.value.toLowerCase() != provCodigopostal) {
    showedText("La localidad no coincide con el código postal.", "red");
    return false;
  } else {
    showedText("La localidad coincide con el código postal.", "green");
    return false;
  }
}

//Only CP

function validationCp() {
  let codigoPostal = document.getElementById("postal").value;
  if (codigoPostal < 0 || codigoPostal > 52999 || isNaN(codigoPostal)) {
    window.alert("Introduce un código postal correcto.");
    return false;
  } else if ((codigoPostal == "") | (codigoPostal == " ")) {
    window.alert("El campo código postal no es válido.");
    return false;
  } else if (codigoPostal.length < 5) {
    window.alert("El código postal debe tener 5 caracteres.");
    return false;
  }
}

//Only city

function validationCity() {
  let provinciav = document.getElementById("localidad").value;
  let prov = provinciav.toUpperCase();
  const pattern = /^([0-9])*$/;

  if (pattern.test(prov)) {
    window.alert("Campo inválido");
    return false;
  } else if (prov == "" || provinciav == " ") {
    window.alert("El campo provincia no es válido.");
    return false;
  } else if (provincias.indexOf(prov) < 0) {
    window.alert("La provincia introducida no existe");
    return false;
  }
}
