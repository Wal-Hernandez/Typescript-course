"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["Acuaman"] = 0] = "Acuaman";
        fuerza[fuerza["Batman"] = 1] = "Batman";
        fuerza[fuerza["Flash"] = 5] = "Flash";
        fuerza[fuerza["Superman"] = 100] = "Superman";
    })(fuerza || (fuerza = {}));
    ;
    const fuerzaFlash = fuerza.Acuaman;
    const fuerzaSuperman = fuerza.Batman;
    const fuerzaBatman = fuerza.Flash;
    const fuerzaAcuaman = fuerza.Superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
