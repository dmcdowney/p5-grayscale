function setup(){
    createCanvas(600,400);
    background(255);
    noStroke();
    num = 0;
}


function draw(){
    if(num < 256){
        fill(num);
        ellipse(width/2, height/2, 250, 250);
        
        num = num + 1;
        
        fill(0);
        text(num, width/2, height/2);
    }
}
