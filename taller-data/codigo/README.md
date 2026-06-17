let estado = "manifiesto";
let seleccion = null;
let ultimoMovimiento;

let poema = [
  {
    palabra: "DIGNIDAD",
    x: 250,
    y: 250,
    periodo: "Estallido Social",
    tematica: "Política",
    resultado: "60% de los registros"
  },
  {
    palabra: "SALUD",
    x: 500,
    y: 350,
    periodo: "Pandemia",
    tematica: "Salud",
    resultado: "45% de los registros"
  },
  {
    palabra: "ESPERANZA",
    x: 800,
    y: 250,
    periodo: "Pandemia",
    tematica: "Espiritualidad",
    resultado: "20% de los registros"
  }
];

function setup() {
  createCanvas(1200, 800);
  textAlign(CENTER, CENTER);

  ultimoMovimiento = millis();
}

function draw() {

  // Si pasan 20 segundos sin interacción,
  // vuelve al manifiesto

  if (millis() - ultimoMovimiento > 20000) {
    estado = "manifiesto";
    seleccion = null;
  }

  background(255);

  if (estado === "manifiesto") {
    mostrarManifiesto();
  }

  if (estado === "poema") {
    mostrarPoema();
  }

  if (estado === "detalle") {
    mostrarDetalle();
  }
}

function mostrarManifiesto() {

  fill(0);
  textSize(30);

  text(
    "MANIFIESTO\n\nLas palabras recopiladas representan los discursos presentes durante los hitos sociales.\n\nHaz clic para continuar.",
    width / 2,
    height / 2
  );
}

function mostrarPoema() {

  fill(0);
  textSize(42);

  for (let p of poema) {
    text(p.palabra, p.x, p.y);
  }

  textSize(16);

  text(
    "Selecciona una palabra",
    width / 2,
    height - 50
  );
}

function mostrarDetalle() {

  rectMode(CENTER);

  // Simulación de fotografía
  fill(220);
  stroke(0);

  rect(width / 2, 250, 500, 300);

  fill(0);
  noStroke();

  textSize(20);

  text(
    "Fotografía",
    width / 2,
    250
  );

  text(
    "Período: " + seleccion.periodo,
    width / 2,
    520
  );

  text(
    "Temática: " + seleccion.tematica,
    width / 2,
    560
  );

  text(
    seleccion.resultado,
    width / 2,
    600
  );

  textSize(14);

  text(
    "Haz clic para volver al poema",
    width / 2,
    700
  );
}

function mousePressed() {

  ultimoMovimiento = millis();

  if (estado === "manifiesto") {
    estado = "poema";
    return;
  }

  if (estado === "poema") {

    for (let p of poema) {

      let ancho = textWidth(p.palabra);

      if (
        mouseX > p.x - ancho / 2 &&
        mouseX < p.x + ancho / 2 &&
        mouseY > p.y - 25 &&
        mouseY < p.y + 25
      ) {

        seleccion = p;
        estado = "detalle";
        return;
      }
    }
  }

  else if (estado === "detalle") {
    estado = "poema";
  }
}

function mouseMoved() {
  ultimoMovimiento = millis();
}

function touchStarted() {
  ultimoMovimiento = millis();
}
