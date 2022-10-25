(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum fuerza {
      Acuaman=0,
      Batman=1,
      Flash=5,
      Superman=100
    };

    const fuerzaFlash: fuerza = fuerza.Acuaman;
    const fuerzaSuperman: fuerza = fuerza.Batman;
    const fuerzaBatman: fuerza = fuerza.Flash;
    const fuerzaAcuaman: fuerza = fuerza.Superman;

  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  // Funciones Básicas
function sumar( a:number, b:number ):number{
  return a + b;
}

const contar:Function = ( heroes:[string] ):number => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar ) => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas ) => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero, texto, booleano, arreglo )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada
