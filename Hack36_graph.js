function setup() {
  createCanvas(550, 550);
}
let stringCheck="ADF";
let i=0;
let n=stringCheck.length-1;
let circleX=250;
let circleY=80;
let d=-1;
let s=0;
function draw(){
  background(176, 230, 176);
  make(); 
  if(i<n){
    let str1=stringCheck[i];
    let str2=stringCheck[i+1];
    if(str1=='A'&&str2=='B'){
      if(s==0){
        circleX=250;
        circleY=80;
        d=0;
      }
      if(d==0){
        main12();
      }
      else{
        s=0;
      }
    }
    if(str1=='A'&&str2=='D'){
      if(s==0){
        circleX=250;
        circleY=80;
        d=7;
      }
      if(d==7){
        main14();
      }
    }
    if(str1=='A'&&str2=='C'){
      if(s==0){
        circleX=250;
        circleY=80;
        d=8;
      }
      if(d==8){
        main13();
      }
    }
    if(str1=='B'&&str2=='C'){
      if(s==0){
        circleX=100;
        circleY=220;
        d=1;
      }
      if(d==1){
        main23();
      }
    }
    if(str1=='E'&&str2=='B'){
      if(s==0){
        circleX=100;
        circleY=325;
        d=6;
      }
      if(d==6){
        main52();
      }
    }
    if(str1=='C'&&str2=='D'){
      if(s==0){
        circleX=250;
        circleY=220;
        d=2;
      }
      if(d==2){
        main34();
      }
    }
    if(str1=='D'&&str2=='F'){
      if(s==0){
        circleX=400;
        circleY=220;
        d=3;
      }
      if(d==3){
        main46();
      }
    }
    if(str1=='F'&&str2=='G'){
      if(s==0){
        circleX=400;
        circleY=325;
        d=4;
      }
      if(d==4){
        main67();
      }
    }
    if(str1=='G'&&str2=='E'){
      if(s==0){
        circleX=250;
        circleY=450;
        d=5;
      }
      if(d==5){
        main75();
      }
    }
    if(str1=='C'&&str2=='G'){
      if(s==0){
        circleX=250;
        circleY=220;
        d=9;
      }
      if(d==9){
        main37();
      }
    
    }
    if(str1=='B'&&str2=='A'){
      if(s==0){
        circleX=100;
        circleY=220;
        d=10;
      }
      if(d==10){
        main21();
      }
    
    }
    if(str1=='C'&&str2=='B'){
      if(s==0){
        circleX=250;
        circleY=220;
        d=11;
      }
      if(d==11){
        main32();
      }
    
    }
    if(str1=='D'&&str2=='C'){
      if(s==0){
        circleX=400;
        circleY=220;
        d=12;
      }
      if(d==12){
        main43();
      }
    
    }
    if(str1=='G'&&str2=='F'){
      if(s==0){
        circleX=250;
        circleY=450;
        d=14;
      }
      if(d==14){
        main76();
      }
    
    }
    if(str1=='E'&&str2=='G'){
      if(s==0){
        circleX=100;
        circleY=325;
        d=15;
      }
      if(d==15){
        main57();
      }
    
    }
    if(str1=='B'&&str2=='E'){
      if(s==0){
        circleX=100;
        circleY=220;
        d=16;
      }
      if(d==16){
        main25();
      }
    
    }
    if(str1=='D'&&str2=='A'){
      if(s==0){
        circleX=400;
        circleY=220;
        d=17;
      }
      if(d==17){
        main41();
      }
    
    }
    if(str1=='C'&&str2=='A'){
      if(s==0){
        circleX=250;
        circleY=220;
        d=18;
      }
      if(d==18){
        main31();
      }
    
    }
    if(str1=='G'&&str2=='C'){
      if(s==0){
        circleX=250;
        circleY=450;
        d=19;
      }
      if(d==19){
        main73();
      }
    
    }
    if(str1=='F'&&str2=='D'){
      if(s==0){
        circleX=400;
        circleY=325;
        d=20;
      }
      if(d==20){
        main64();
      }
    
    }
  }
  
}
//main23();
function make() {
  
  line(250, 80, 250, 220);
  line(250, 80, 400, 220);
  line(100, 220, 250, 220);
  line(100, 220, 100, 325);
  line(250, 220, 250, 450);
  line(400, 220, 400, 325);
  strokeWeight(10);
  line(250, 80, 100, 220);
  line(250, 220, 400, 220);
  line(100, 325, 250, 450);
  line(400, 325, 250, 450);
  strokeWeight(1);
  rectMode(CENTER);
  fill(220, 0, 0);
  rect(250, 80, 30, 30);
  rect(250, 220, 30, 30);
  rect(250, 450, 30, 30);
  rect(100, 220, 30, 30);
  rect(400, 220, 30, 30);
  rect(100, 325, 30, 30);
  rect(400, 325, 30, 30);

  textSize(25);
  fill(0, 0, 0);
  text("A", 242, 89);
  text("B", 93, 228);
  text("C", 242, 228);
  text("D", 392, 228);
  text("E", 93, 333);
  text("F", 392, 333);
  text("G", 242, 458);
}

function main12(){
  if(circleX<=100||circleY>=220){
    //noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("1");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX-=1;
  circleY+=1;
  
}
function main23(){
  if(circleX>=250){
    //noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("2");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX+=1;
}
function main34(){
  if(circleX>=400){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  print("3");
  s=1;
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX+=1;
  
}
function main46(){
  if(circleY>=325){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("4");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY++;
  
}
function main67(){
  if(circleY>=450||circleX<=250){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("5");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX-=1;
  circleY+=1;
  
}
function main75(){
  if(circleY<=325||circleX<=100){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("6");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX-=1;
  circleY-=1;
  
}
function main52(){
  if(circleY<=220){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("7");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY-=1;
  
}
function main14(){
  if(circleX>=400||circleY>=220){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("8");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX+=1;
  circleY+=1;
  
}
function main13(){
  if(circleY>=220){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s++;
  print("9");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY+=1;
  
}
function main37(){
  if(circleY>=450){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("10");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY++; 
}
function main21(){
  if(circleY<=80||circleX>=250){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("11");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY--;
  circleX++;
}
function main32(){
  if(circleX<=100){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("12");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX--; 
}
function main43(){
  if(circleX<=250){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("13");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX--; 
}
function main64(){
  if(circleY<=220){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("14");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY--; 
}
function main76(){
  if(circleX>=400||circleY<=325){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("15");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX++;
  circleY--;
}
function main57(){
  if(circleX>=250||circleY>=450){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("16");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX++;
  circleY++;
}
function main25(){
  if(circleY>=325){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("17");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY++; 
}
function main41(){
  if(circleX<=250||circleY<=80){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("18");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleX--;
  circleY--;
}
function main31(){
  if(circleY<=80){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("19");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY--; 
}
function main73(){
  if(circleY<=220){
   // noLoop();
    s=0;
    d=-1;
    i++;
    return;
  }
  s=1;
  print("20");
  fill(0,0,190);
  circle(circleX,circleY,25);
  circleY--; 
}
