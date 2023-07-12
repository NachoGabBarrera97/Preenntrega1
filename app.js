let dolar = 500;
let euro = 293.55;
let yen = 1.91;
let libra = 342.90;
let real = 54.86;

let monedaIngresada;
let montoIngresado;
let valorFinal;
let respuesta;

function conversionDeMoneda(monedaIngresada, montoIngresado){
    switch(monedaIngresada){
        case 'dolar':
            valorFinal = montoIngresado / dolar;
            return  'Monto ingresado: ' + montoIngresado +'\nValor en Dolares: '+ valorFinal.toFixed(2)

        case 'euro':
            valorFinal = montoIngresado / euro;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Euros: '+ valorFinal.toFixed(2)

        case 'yen':
            valorFinal = montoIngresado / yen;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Yens: '+ valorFinal.toFixed(2)
        
        case 'libra':
            valorFinal = montoIngresado / libra;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Libras: '+ valorFinal.toFixed(2)

        case 'real':
            valorFinal = montoIngresado / real;
            return 'Monto ingresado: ' + montoIngresado +'\nValor en Reales: '+ valorFinal.toFixed(2)
        
        default:
            return 'Ingrese una de las opcinoes correctas'
    }
}
do{
    monedaIngresada = prompt('Seleccione una de las siguientes monedas a convertir: "Dolar" "Euro" "Real" "Yen" o "Libra"').toLocaleLowerCase()

    while(monedaIngresada != 'dolar' && monedaIngresada != 'euro' && monedaIngresada != 'real' && monedaIngresada != 'yen' && monedaIngresada != 'libra' ){
    monedaIngresada = prompt('Opcion no valida, ingrese una de las siguientes opciones: "Dolar" "Euro" "Real" "Yen" o "Libra"')     
    
    }
    montoIngresado = Number(prompt('Ingrese el monto que desea convertir'))

    while(isNaN(montoIngresado) || montoIngresado < 0){
        montoIngresado=Number(prompt('ingrese un monto correcto'))
    }
    alert(conversionDeMoneda(monedaIngresada, montoIngresado))
    respuesta = prompt('Desea seguir convirtiendo? (si o no)').toLocaleLowerCase();

}while (respuesta != 'no')



