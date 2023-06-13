// const operacionAsincrona = (cb) => {
//   // operaciones asincronas
//   cb();
// };

// const loguearConsola = () => {
//   console.log("Hola Mundo!!");
// };

// operacionAsincrona(loguearConsola);



// setTimeout(loguearConsola, 2000);


// let foo = 1;
// console.log(foo);
// const callback = (num) => {
// num++;
// }
//     setTimeout(() => {
//         callback(foo)
//     }, 0);
// console.log(foo);

// MANERA 1 - SOLO SET TIMEOUT

// setTimeout(() => {
//     console.log("Mara")
// }, 1000);

// MANERA 2 - FUNCIÓN SIN ARGUMENTOS

const printMyName = () => {
    console.log("Mara")
}

const asyncPrintMyName = (cb) => {
    setTimeout(cb, 1000);
}

// asyncPrintMyName(printMyName)

// MANERA 3 - CON ARGUMENTOS SIN CALLBACK

const asyncPrintMyNameNoCallback = (name) => {
    setTimeout(() => {
        console.log(name)
    }, 1000);
}

// asyncPrintMyNameNoCallback("Mara no callback")

// MANERA 4 - CON ARGUMENTOS Y FUNCIÓN CALLBACK

const printMyNameWithArgs = (name) => {
    console.log(name)
}

const asyncPrintMyNameCallback = (cb, name) => {
    setTimeout(() => {
        cb(name)
    }, 1000);
}

// asyncPrintMyNameCallback(printMyNameWithArgs, "Mara con callback")

// KATA 2

// MANERA 1

const asyncSumarDosNums = (num1, num2) => {
    setTimeout(() => {
        console.log(num1 + num2)
    }, 2000);
}

// let num1 = Number(prompt("Di un número"))
// let num2 = Number(prompt("Di otro número"))

// asyncSumarDosNums(num1, num2)


// MANERA 2

const sumarDosNums = (num1, num2) => {
    console.log(num1 + num2)
}

// setTimeout(() => {
//     sumarDosNums(3, 5)
// }, 2500);

// KATA 3

const sumaDosNumsConCallback = (num1, num2, cb) => {
    let resultado = num1 + num2

    setTimeout(() => {
        cb(resultado)
    }, 1000);
}

const sumaConsola = (suma) => {
    console.log(suma)
}

// sumaDosNumsConCallback(3, 5, sumaConsola)

const printNames = () => {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Mara")
            setTimeout(() => {
                console.log("Fran")
            }, 0);
        }, 3000);
        setTimeout(() => {
            setTimeout(() => {
                console.log("Maxi")
            }, 1000);
            console.log("Álvaro")
        }, 1500);
    console.log("David")
    }, 2000);
}

printNames()

// 