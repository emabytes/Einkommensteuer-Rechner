// 2020: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2020
// 2019: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2019
// 2018: https://www.finanz-tools.de/einkommensteuer/berechnung-formeln/2018

function calculate() {
  console.log("works");
  let zve;
  let zve1 = Number(document.getElementById("zve1").value);
  let zve2 = Number(document.getElementById("zve2").value);
  let year = document.getElementById("year").value;
  let relStatus = document.getElementById("rel-status");
  let est;

  if (relStatus.value == "single") {
    zve = zve1;
  } else {
    zve = (zve1 + zve2) / 2;
  }

  //2020
  if (year == "2020" && zve <= 9408) {
    est = 0;
  } else if (year == "2020" && zve >= 9409 && zve <= 14532) {
    let y = (zve - 9408) / 10000;
    est = (972.87 * y + 1400) * y;
  } else if (year == "2020" && zve >= 14533 && zve <= 57051) {
    let z = (zve - 14532) / 10000;
    est = (212.02 * z + 2397) * z + 972.79;
  } else if (year == "2020" && zve >= 57052 && zve <= 270500) {
    est = 0.42 * zve - 8963.74;
    console.log(est);
  } else if (year == "2020" && zve >= 270501) {
    est = 0.45 * zve - 17078.74;
  }

  //2019
  if (year == "2019" && zve <= 9168) {
    est = 0;
  } else if (year == "2019" && zve >= 9169 && zve <= 14254) {
    let y = (zve - 9168) / 10000;
    est = (980.14 * y + 1400) * y;
  } else if (year == "2019" && zve >= 14255 && zve <= 55960) {
    let z = (zve - 14254) / 10000;
    est = (216.16 * z + 2397) * z + 965.58;
  } else if (year == "2019" && zve >= 55961 && zve <= 265326) {
    est = 0.42 * zve - 8780.9;
  } else if (year == "2019" && zve >= 265327) {
    est = 0.45 * zve - 16740.68;
  }

  //2018
  if (year == "2018" && zve <= 9000) {
    est = 0;
  } else if (year == "2018" && zve >= 9001 && zve <= 13996) {
    let y = (zve - 9000) / 10000;
    est = Math.floor((997.8 * y + 1400) * y).toFixed(2);
  } else if (year == "2018" && zve >= 13997 && zve <= 54949) {
    let z = (zve - 13996) / 10000;
    est = (220.13 * z + 2397) * z + 948.49;
  } else if (year == "2018" && zve >= 54950 && zve <= 260532) {
    est = 0.42 * zve - 8621.75;
  } else if (year == "2018" && zve >= 260533) {
    est = 0.45 * zve - 16437.7;
  }

  //result
  let est2 = est * 2;
  if (relStatus.value == "married") {
    est2;
    document.getElementById("income-tax").innerHTML =
      "Einkommensteuer: " + Math.floor(est2).toFixed(2) + " &euro;";
  } else {
    est;
    document.getElementById("income-tax").innerHTML =
      "Einkommensteuer: " + Math.floor(est).toFixed(2) + " &euro;";
  }
}

//shows box for person 2
function showBox() {
  console.log("working");
  if (document.getElementById("married").selected == true) {
    document.getElementById("box2").style.display = "block";
    console.log("test");
  } else {
    document.getElementById("box2").style.display = "none";
    console.log("false");
  }
}
