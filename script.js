let nota = 0;

function getNota(nota) {
  let A = nota >= 90 && nota <= 100;

  let B = nota >= 80 && nota <= 89;

  let C = nota >= 70 && nota <= 79;

  let D = nota >= 60 && nota <= 69;

  let F = nota < 60 && nota >= 0;

  let finalnota;

  if (A) {
    finalnota = "A - Parabéns, Aprovado!";
  } else if (B) {
    finalnota = "B - Parabéns, Aprovado!";
  } else if (C) {
    finalnota = "C - Parabéns, Aprovado!";
  } else if (D) {
    finalnota = "D - Parabéns, Aprovado!";
  } else if (F) {
    finalnota = "F -REPROVADO!";
  } else {
    finalnota = "Nota inválida";
  }

  return finalnota;
}


console.log(getNota (120))
console.log(getNota (-10))
console.log(getNota (90))
console.log(getNota (45))
console.log(getNota (70))
console.log(getNota (89))
console.log(getNota (23))
console.log(getNota (67))