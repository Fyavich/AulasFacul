var canvas = document.getElementById('bubbleSortScreen');
var ctx = canvas.getContext('2d');

// Tamanho das barras
var bar_w = 10;
var bar_h = 1;

// Localização das barras
var x_pos = 0;
var y_pos = 100;

// Array de Barras
let barArraySize = [20, 30, 60, 50, 40, 10, 90, 80, 70, 100];

var barArrayValues = [
    {index: 0, x_pos: 15, y_pos: 100, largura: 10, altura: 20},
    {index: 1, x_pos: 15, y_pos: 100, largura: 10, altura: 30},
    {index: 2, x_pos: 15, y_pos: 100, largura: 10, altura: 100},
    {index: 3, x_pos: 15, y_pos: 100, largura: 10, altura: 40},
    {index: 4, x_pos: 15, y_pos: 100, largura: 10, altura: 10},
    {index: 5, x_pos: 15, y_pos: 100, largura: 10, altura: 90},
    {index: 6, x_pos: 15, y_pos: 100, largura: 10, altura: 80},
    {index: 7, x_pos: 15, y_pos: 100, largura: 10, altura: 70},
    {index: 8, x_pos: 15, y_pos: 100, largura: 10, altura: 50},
    {index: 9, x_pos: 15, y_pos: 100, largura: 10, altura: 60},
]

function desenharArray(){
    for(var i = 0; i<barArrayValues.length; i++){
    
        ctx.fillRect(
            barArrayValues[i].x_pos*i,
            barArrayValues[i].y_pos-barArrayValues[i].altura,
            barArrayValues[i].largura,
            barArrayValues[i].altura
        );
    
    }
}

function bubbleSort(){
    //ctx.fillStyle = 'rgb(136, 8, 8)';
    var temp;

    for(let i = 0; i<barArrayValues.length; i++){
        for(let j = 0; j<barArrayValues.length-1; j++){
            if(barArrayValues[j].altura > barArrayValues[j+1].altura){
                ctx.fillStyle = 'rgb(136, 8, 8)';
                temp = barArrayValues[j].altura;
                barArrayValues[j].altura = barArrayValues[j+1].altura;
                barArrayValues[j+1].altura = temp;
            }
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            desenharArray();
        }
    }
}

// Execução do Programa
desenharArray();
bubbleSort();