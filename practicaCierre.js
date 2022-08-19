// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO

function operationsNumbers(x, z) {
  let resultado;
  if (x < z) {
    resultado = z / x;
  } else {
    resultado = x * z;
  }
  return resultado;
}
console.log("funcion1: "+operationsNumbers(8, 7));

// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function tipoDato(a) {
  let tipoDato = typeof a;
  return tipoDato;
}
console.log("funcion2: "+tipoDato("flor"));

// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN

function operacionesParametros(a, b, c, d, e, f) {
  let suma = a + b;
  let resta = suma - c;
  let mult = resta * d;
  let div = mult / e;

  let potencia = Math.pow(div, f);
  return potencia;
}
console.log("funcion3: "+operacionesParametros(10, 10, 10, 10, 10, 10));

// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function nuevoArray(array) {
  let arrayNuevo = array.slice(array.length - 3);
  return arrayNuevo;
}
console.log("funcion4: "+nuevoArray(["flor", "maria", "sol", "robert", "milagros", "messi"]));

// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ordenarArray(array){
    let arrayOrdenado = array.sort((a, b)=>{return (b-a)})
 	return arrayOrdenado;
}
console.log("funcion5: "+ordenarArray([56, 90, 30, 20, 65, 88, 21, ]))

// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO

function limpiarArray(a,b){
    return a.filter(valor => (valor !=b))
}
console.log("funcion6: "+limpiarArray([5,5,5,58, 9,6], 5))

// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS (DEL ARRAY.

function sumaArray(array){
    let suma = 0
    for(let i=0; i<array.length; i++){
        suma += array[i]
    }
    return suma;
	
}
console.log("funcion7.a: "+sumaArray([5,5,5,5,5,5,5,5,5,5]))

function promArray(array){
    let suma = 0, promedio
    for(let i=0; i<array.length; i++){
        suma += array[i]
        promedio = suma / array.length
    }
    return promedio;
	
}
console.log("funcion7.b: "+promArray([5,5,5,5,5,5,5,5,5,5]))

// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO

function retornarPropiedad(obj, text){
    return obj[text];
}

console.log("funcion8: "+retornarPropiedad({nombre: "flor", apellido : "villalba", edad: 19}, "edad"))

// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

 function sumaObj(obj){
    let suma = 0, listaValores = Object.keys(obj)
    listaValores.forEach((key)=> {suma+= obj[key]})
 	return suma;
}
console.log("funcion9: "+sumaObj({valor1: 5, valor2: 5}))