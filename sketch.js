let active_canvas = 1;
let character, ground;
let character_size = 64;
let canvas_size = 576;
let moveX = 0, moveY = 0;
let character_speed = character_size;
let input_name, btn_start;
let player_name;
let restart;

function preload(){
  character = loadImage('assets/images/character-front.png');
  ground = loadImage('assets/images/ground.png');
  
}

function setup(){
  createCanvas(canvas_size,canvas_size);
}

function draw(){
  if(active_canvas === 1){
    noLoop();
    //MENU CANVAS
    //name input
    input_name = createInput('Seu nome');
    input_name.position(canvas_size/2-250/2, canvas_size/2-40/2);
    input_name.size(250, 40);
    //play button
    btn_start = createButton('Jogar');
    btn_start.size(50, 50);
    btn_start.position(canvas_size/2-50/2, canvas_size/2+40);
    btn_start.mousePressed(start_game);
    
  }else if(active_canvas === 2){
    //GAME CANVAS
    if(moveX < 0){
      moveX = 0;
    }
    if(moveY < 0){
      moveY = 0;
    }

    if(moveX > canvas_size - character_size){
      moveX = canvas_size - character_size;
    }  
    if(moveY > canvas_size - character_size){
      moveY = canvas_size - character_size;
    }

    background(45, 28, 14);
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        image(ground, character_size * i, character_size * j, character_size, character_size);
      }
    }
    image(character, moveX, moveY, character_size, character_size);

    if(moveX === canvas_size - character_size && moveY === canvas_size - character_size){
      rect(160, 160, 256);
      textSize(35);
      text('VITÓRIA!', 215, 300);

      restart = createButton('Jogar Novamente');
      restart.mousePressed(reset);

      noLoop();
    }

    
  }

}

function start_game(){
  player_name = input_name.value(); //gets user name from input box
  input_name.remove();
  btn_start.remove();
  active_canvas = 2;
  loop();
}

function reset(){
  moveX = 0;
  moveY = 0;
  restart.remove();
  loop();
}

function keyPressed(){
  if(keyIsDown(UP_ARROW)){
    moveY -= character_speed;
  }
  if(keyIsDown(DOWN_ARROW)){
    moveY += character_speed;
  }
  if(keyIsDown(LEFT_ARROW)){
    moveX -= character_speed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    moveX += character_speed;
  }
}