let manifiestoTitulo = "manifiesto del proyecto:";
let manifiestoTexto = "este proyecto es la respuesta de los datos recopilados en torno al los hitos sociales en chile, y cuales eran los principales temas abordados en el estallido social y la pandemia, a raiz de eso se conforma este poema navegable, donde encontraras los datos y sus clasificaciones ocultas.";

let palabrasPoema = [
  "ojala", "fuego", "colegio", "alimento", "pandemia", "fuego",
  "virus", "dinero", "vacunas", "doritos", "recuerdo", "justicia",
  "estudios", "opinion", "bromas", "rojo", "abrazo", "empatia",
  "comida", "trabajo", "mundo", "donde", "perfume", "inedito",
  "devastacion"
];

let categorias = {
  fuego: "politico", justicia: "politico", rojo: "politico", donde: "politico",
  ojala: "salud", pandemia: "salud", vacunas: "salud", virus: "salud",
  bromas: "bromas", recuerdo: "bromas", doritos: "bromas",
  dinero: "economia", empatia: "economia", trabajo: "economia",
  mundo: "espiritualidad", perfume: "espiritualidad",
  comida: "cultura", devastacion: "cultura"
};
for (let p of palabrasPoema) {
  if (!categorias[p]) categorias[p] = "educacion";
}

let eventos = {
  fuego: "estallido", justicia: "estallido", rojo: "estallido", donde: "estallido",
  dinero: "estallido", empatia: "estallido", trabajo: "estallido",
  colegio: "estallido", opinion: "estallido", abrazo: "estallido",
  mundo: "estallido", perfume: "estallido", inedito: "estallido", estudios: "estallido",
  ojala: "pandemia", pandemia: "pandemia", virus: "pandemia", vacunas: "pandemia",
  alimento: "pandemia", comida: "pandemia", doritos: "pandemia",
  recuerdo: "pandemia", bromas: "pandemia", devastacion: "pandemia"
};

let coloresCategoria = {
  politico: [200, 30, 30],
  salud: [30, 140, 90],
  bromas: [230, 160, 20],
  economia: [40, 90, 200],
  espiritualidad: [140, 60, 190],
  cultura: [210, 90, 150],
  educacion: [90, 90, 90]
};

let W, H, margin;
let palabraBoxes = [];
let palabraSeleccionada = null;
let btnX, btnY, btnW, btnH;

function setup() {
  W = 600;
  H = W * 2;
  margin = 50;
  createCanvas(W, H);
  textFont('Helvetica');
  noLoop();
  redrawCanvas();
}

function redrawCanvas() {
  background(255);
  fill(0);
  noStroke();

  if (palabraSeleccionada === null) {
    dibujarManifiesto();
  } else {
    dibujarPanelSeleccion();
    dibujarBotonVolver();
  }

  dibujarPoema();
}

function dibujarManifiesto() {
  let usableWidth = W - margin * 2;
  let yPos = 90;
  textAlign(LEFT, TOP);

  textSize(20);
  textStyle(BOLD);
  fill(0);
  text(manifiestoTitulo, margin, yPos, usableWidth);
  yPos += 50;

  textStyle(NORMAL);
  textSize(16);
  textLeading(26);
  text(manifiestoTexto, margin, yPos, usableWidth, H / 2 - yPos - 40);
}

function dibujarBotonVolver() {
  btnW = 200;
  btnH = 32;
  btnX = margin;
  btnY = H / 2 - btnH - 20;

  noFill();
  stroke(180);
  strokeWeight(1);
  rect(btnX, btnY, btnW, btnH, 6);
  noStroke();

  let arrowX = btnX + 14;
  let arrowY = btnY + btnH / 2;

  stroke(80);
  strokeWeight(1.5);
  line(arrowX, arrowY, arrowX + 10, arrowY);
  line(arrowX, arrowY, arrowX + 5, arrowY - 4);
  line(arrowX, arrowY, arrowX + 5, arrowY + 4);
  noStroke();

  textAlign(LEFT, CENTER);
  fill(80);
  textStyle(NORMAL);
  textSize(13);
  text("volver al manifiesto", btnX + 30, btnY + btnH / 2);
}

function calcularPorcentajeEvento(cat, evento) {
  let totalEvento = 0;
  let totalCatEnEvento = 0;
  for (let p of palabrasPoema) {
    if (eventos[p] === evento) {
      totalEvento++;
      if (categorias[p] === cat) totalCatEnEvento++;
    }
  }
  if (totalEvento === 0) return 0;
  return Math.round((totalCatEnEvento / totalEvento) * 100);
}

function dibujarPanelSeleccion() {
  let cat = categorias[palabraSeleccionada];
  let evento = eventos[palabraSeleccionada];
  let col = coloresCategoria[cat];
  let pct = calcularPorcentajeEvento(cat, evento);
  let nombreEvento = evento === "estallido" ? "estallido social" : "pandemia";

  let centerX = W / 2;
  let topY = 60;

  textAlign(CENTER, TOP);
  fill(0);
  textStyle(BOLD);
  textSize(26);
  text(palabraSeleccionada.toUpperCase(), centerX, topY);

  let boxSize = 200;
  let boxX = centerX - boxSize / 2;
  let boxY = topY + 50;

  noStroke();
  fill(col[0], col[1], col[2], 30);
  rect(boxX, boxY, boxSize, boxSize, 8);

  noFill();
  stroke(col[0], col[1], col[2]);
  strokeWeight(2);
  rect(boxX, boxY, boxSize, boxSize, 8);
  noStroke();

  let rectY = boxY + boxSize + 30;
  let rectW = 130;
  let rectH = 40;
  let gap = 16;

  let estX = centerX - gap / 2 - rectW;
  let panX = centerX + gap / 2;

  if (evento === "estallido") {
    fill(col[0], col[1], col[2], 30);
    stroke(col[0], col[1], col[2]);
  } else {
    fill(245);
    stroke(210);
  }
  strokeWeight(1.5);
  rect(estX, rectY, rectW, rectH, 6);

  if (evento === "pandemia") {
    fill(col[0], col[1], col[2], 30);
    stroke(col[0], col[1], col[2]);
  } else {
    fill(245);
    stroke(210);
  }
  strokeWeight(1.5);
  rect(panX, rectY, rectW, rectH, 6);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(14);

  fill(evento === "estallido" ? color(col[0], col[1], col[2]) : color(160));
  textStyle(evento === "estallido" ? BOLD : NORMAL);
  text("estallido social", estX + rectW / 2, rectY + rectH / 2);

  fill(evento === "pandemia" ? color(col[0], col[1], col[2]) : color(160));
  textStyle(evento === "pandemia" ? BOLD : NORMAL);
  text("pandemia", panX + rectW / 2, rectY + rectH / 2);

  let infoY = rectY + rectH + 25;

  textAlign(LEFT, TOP);
  fill(col[0], col[1], col[2]);
  textStyle(BOLD);
  textSize(16);
  text("categoria: " + cat, boxX, infoY);

  infoY += 26;

  fill(80);
  textStyle(NORMAL);
  textSize(14);
  text("porcentaje de esta tematica en " + nombreEvento + ": " + pct + "%", boxX, infoY, boxSize + 100);
}

function dibujarPoema() {
  let usableWidth = W - margin * 2;
  let poemaStartY = H / 2 + 60;
  let fs = 34;
  let lh = 46;
  textSize(fs);
  textLeading(lh);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);

  let x = margin;
  let y = poemaStartY;
  let spaceWidth = textWidth(" ");
  palabraBoxes = [];

  for (let palabra of palabrasPoema) {
    let palabraMayus = palabra.toUpperCase();
    let pw = textWidth(palabraMayus);

    if (x + pw > margin + usableWidth) {
      x = margin;
      y += lh;
    }

    let cat = categorias[palabra];
    let esMismaCategoria = palabraSeleccionada !== null && categorias[palabraSeleccionada] === cat;

    if (esMismaCategoria) {
      let col = coloresCategoria[cat];
      fill(col[0], col[1], col[2]);
    } else if (palabraSeleccionada !== null) {
      fill(190);
    } else {
      fill(0);
    }

    text(palabraMayus, x, y);
    palabraBoxes.push({ palabra, x, y, w: pw, h: lh });
    x += pw + spaceWidth;
  }
}

function mousePressed() {
  if (palabraSeleccionada !== null &&
      mouseX >= btnX && mouseX <= btnX + btnW &&
      mouseY >= btnY && mouseY <= btnY + btnH) {
    palabraSeleccionada = null;
    redrawCanvas();
    return;
  }

  for (let b of palabraBoxes) {
    if (mouseX >= b.x && mouseX <= b.x + b.w &&
        mouseY >= b.y && mouseY <= b.y + b.h * 0.85) {
      palabraSeleccionada = (palabraSeleccionada === b.palabra) ? null : b.palabra;
      redrawCanvas();
      return;
    }
  }
}
