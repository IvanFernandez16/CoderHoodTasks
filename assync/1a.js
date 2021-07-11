// Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout),
//devolviendo elmismo resultado que la función dada.

// function dividirNumeros(dividendo, divisor) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(dividendo / divisor);
//     }, 3000);
//   });
// }

// async function final(divd, divs) {
//   const Result = await dividirNumeros(divd, divs);
//   console.log("Resultado de la divsión: " + Result);
// }

// final(121, 11);

function dividirNumeros(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor > 0) {
      setTimeout(() => {
        resolve(dividendo / divisor);
      }, 3000);
    } else {
      reject("Tu divisor es 0, aka no puede dividir");
    }
  });
}

async function final(divd, divs) {
  try {
    const Result = await dividirNumeros(divd, divs);
    console.log("Resultado de la divsión: " + Result);
  } catch (error) {
    console.log("error catastrofico:", error);
  }
}

final(1000000, 100000);
