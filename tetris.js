const canvas = document.getElementById('tetris');

function startUp(){
    var canvas = document.getElementById('tetris');

    if(!canvas){
        alert('Error: Cannot find the canvas element!');
    }

    if(!canvas.getContext){
        alert('Error: Canvas context does not exist');
    }

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#3d3";
    ctx.fillRect(0,0,100,100);
}

startUp();