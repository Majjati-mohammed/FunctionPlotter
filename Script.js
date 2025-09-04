function func(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = canvas.width;
    ctx.transform(1, 0, 0, -1, 0, canvas.height);
    
    let exp = document.getElementById("txt").value;
    exp = exp.toLowerCase();
    let exp1 = "Math."+exp;
    let opt = document.getElementById('opt').value;

    const xvalue = [];
    const yvalue = [];

    for(let x=0;x<10; x+= 0.1){
        xvalue.push(x);
        if( opt == "lineaire"){
        yvalue.push(eval(exp));
        }
        else if(opt == "trigonometrique"){
            yvalue.push(eval(exp1));
        }
    }
    
    ctx.fillStyle = "blue";
    for(let i=0; i<xvalue.length-1; i++){
     let x = xvalue[i]*500/10;
     let y = yvalue[i]*500/10;
    ctx.beginPath();
    ctx.ellipse(x, y, 2, 2, 0, 0, Math.PI * 2);
    ctx.fill();
    }
    
}

