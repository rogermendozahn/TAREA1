var colors = require('colors');
let texto = ""
function sumar(n1, n2, colorenletras){
    const valorfinal = n1 + n2

    if (valorfinal < 65) {
        texto ="Su nota es APLAZADO!"
        colorenletras = "red";
      } else if (valorfinal < 80) {
        texto ="Su nota es MUY BUENO!"
        colorenletras = "yellow";
      } else {
        texto ="Su nota es SOBRESALIENTE!"
        colorenletras = "green";
      };

    console.log(texto,valorfinal.toString()[colorenletras]);
}

sumar(40, 30)
sumar(42, 58)
sumar(29, 35)


// console.log("Inicio de la aplicacion en modo de desarrollo ".black.underline.bgGreen)

// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass