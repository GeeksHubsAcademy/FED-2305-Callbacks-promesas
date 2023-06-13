// const nuevaPromesa = new Promise((res, rej) => {
//   if (false) {
//     setTimeout(() => {
//       res("éxito, promesa resuelta");
//     }, 1000);
//   } else {
//     rej("fracaso, promesa rechazada");
//   }
// });

// console.log(nuevaPromesa);

// nuevaPromesa
// .then(res => console.log(res))
// .catch(error => console.error(error))

// console.log("Hola")

// KATA 1

const funcionPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hola mundo");
    }, 1000);
  });
};

// funcionPromise().then((res) => console.log(res));

// KATA 2

const funcionPromiseNumero = (num) => {
  return new Promise((res, rej) => {
    if (num % 2 === 0) {
      setTimeout(() => {
        res("Es par");
      }, 1000);
    } else {
      rej("Es impar");
    }
  });
};

// funcionPromiseNumero(3)
//   .then((res) => console.log(res))
//   .catch((rej) => console.error(rej));

// MANERA 2 - MÁS ABSTRAÍDO

const parImpar = (num, delay) => {
  return new Promise((res, rej) => {
    if (num % 2 === 0) {
      setTimeout(() => {
        res(`El número es par, ${delay}`);
      }, delay);
    } else {
      rej("El número es impar");
    }
  });
};

// parImpar(2, 3000)
// .then((res) => console.log(res))
// .catch((error) => console.error(error))

// parImpar(3, 4000)
// .then((res) => console.log(res))
// .catch((error) => console.error(error))

// const variosNumeros = Promise.all([
//   parImpar(2, 1000),
//   parImpar(4, 3000),
//   parImpar(6, 2000),
// ]).then(console.log);

// const carreraNumeros = Promise.race([
//   parImpar(2, 5000),
//   parImpar(4, 3000),
//   parImpar(6, 2000),
// ]).then(console.log);

// ENCADENAR .THEN

const devuelveNumeroUno = () => {
  return new Promise((resuelve, reject) => {
    resuelve(1);
  });
};
const promise = devuelveNumeroUno();

// promise
//   .then((val) => val + 1)
//   .then((val) => val + 1)
//   .then((val) => console.log(val)); // 3

// KATA PAG 31

// const promiseRandom = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(Math.floor(Math.random() * 10));
//     }, 1000);
//   });
// };

// CON ASYNC AWAIT

const promiseRandomAsync = async () => {
    let random = await new Promise((res, rej) =>
      setTimeout(() => {
        res(Math.ceil(Math.random() * 10));
      }, 1000)
    );
    return random;
  };

  const sumTwoPromises = async () => {
    let num1 = await promiseRandomAsync();
    console.log(num1);
    let num2 = await promiseRandomAsync();
    console.log(num2);
  
    return num1 + num2;
  };

  sumTwoPromises()
  .then(res => console.log(res))

 console.log(sumTwoPromises()) 


//   promiseRandom()
//   .then(res => {
//       promiseRandom().then(res2 => {
//           console.log(res + res2)
//       })
//   })

// let sum = Promise.all([promiseRandom(), promiseRandom()])
//     .then((res) => {
//         console.log(res);
//         let suma = 0;
//         res.map((num) => {
//              suma += num;
//         });
//         console.log(suma);
// });

// Promise.all([funcionPromise(), funcionPromise()])
// .then(([num1, num2]) => {
//     const suma = num1 + num2
//     console.log(`La suma de los numeros aleatorios es: ${suma}`)
// })

// .catch(error => {
//     console.error("Error");
// })
