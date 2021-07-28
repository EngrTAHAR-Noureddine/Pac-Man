var millisecond =1000;

var pacMan = document.querySelector('.pac-man').getBoundingClientRect();
var PacManCenter =((pacMan.right - pacMan.left)/2)*(-1);
var fieldFoods = document.querySelector('.field-foods').getBoundingClientRect();
var leftFieldFoods = fieldFoods.left;


var i =0;
function carousel() {
    
    const food = `<div class="field-food" id="food">
                    <div class="food-square"></div>
                </div>`;
    const ghost = `<div class="field-food white" id="ghost">
                    <div class="food-square"></div>
                </div>`;            
    const parent = document.querySelector('.field-foods');
    i = Math.floor(Math.random() * 10);
        if((i % 2) === 0){
             parent.innerHTML += ghost;//food;  
        }else{ parent.innerHTML += ghost;  }   
      
        
        
     if(parent.firstElementChild.className.indexOf("firstChild")<0) parent.firstElementChild.className += " firstChild";
        
        // var rect = document.querySelector('.firstChild').getBoundingClientRect();
    
    // if((rect.right - pacMan.right) <0){
    //     score(parent.firstElementChild);
    //     parent.firstElementChild.remove();
    // } 
}
var scoreVar = 0;
function score(element){
    if(element.id === "food"){
        scoreVar++;
        speedEat();
        clearInterval(myVar);
        myVar = setInterval(carousel, millisecond);
        document.getElementById('score').textContent = scoreVar;
    }
}


function speedEat(){
        if(scoreVar<=50){
           millisecond = millisecond - 10;

        }else if(millisecond >= 300){
          if((scoreVar%10)===0)millisecond = millisecond - 50;
        }else{
             millisecond = 250;
        }
}

var myVar = setInterval(carousel, millisecond);

// "rgba(255, 255, 255, 0.493)" => "blue"
// "rgba(255, 0, 0, 0.57)" => "red"

document.addEventListener('keydown',pressKeydown);
document.addEventListener('keyup',pressKeyup);
function pressKeyup(e){
    if(e.keyCode === 32){
        document.querySelector('.pac-man').style.background = "blue";
    }

}
function pressKeydown(e){
    if(e.keyCode === 32){
        document.querySelector('.pac-man').style.background = "red";
    }

}

var testDistance = setInterval(testDistance, 1);

function init(){
    document.querySelector('.pac-man').style.background = "blue";
}
init();



function testDistance(){

const parent = document.querySelector('.field-foods');
const cleanField = document.querySelector('.clean').getBoundingClientRect();

    var rect;
    let distancePac , distanceClean;
    if(document.querySelector('.firstChild')!==null){
        rect= document.querySelector('.firstChild').getBoundingClientRect();
        distancePac = rect.left -pacMan.right;
        distanceClean = rect.left - cleanField.right;
    }else {distancePac = 1; distanceClean = 1;}

// console.log("distancePac : ",distancePac);
// console.log("distanceClean : ",distanceClean);

if((parent.firstElementChild)&&(parent.firstElementChild.id === "ghost")){
    if(distancePac <=0){
        if(distancePac >= (-1)){
            console.log("im in ", parent.firstElementChild);
            
            if(document.querySelector('.pac-man').style.background === "blue"){
                parent.firstElementChild.remove();
                if(parent.firstElementChild.className.indexOf("firstChild")<0) parent.firstElementChild.className += " firstChild";      
            }
        }
        
    }else if(distanceClean<=0){
        if(document.querySelector('.pac-man').style.background === "red"){
                clearInterval(myVar);
                clearInterval(testDistance);
                alert("loose is opened");
        }
    }
}




    // if(distance<=0){
        
        
    //     if(document.querySelector('.pac-man').style.background === "rgba(255, 0, 0, 0.57)"){
    //         if(document.querySelector('.field-foods').firstElementChild.id === "ghost"){
    //             clearInterval(myVar);
    //             clearInterval(testDistance);
    //             alert("loose is opened");
    //         }
    //     }else{
    //         if(document.querySelector('.field-foods').firstElementChild.id === "food"){
    //             clearInterval(myVar);
    //             clearInterval(testDistance);
    //             alert("loose is close");
    //         }
            
    //     }
        
    // }
    // var cleanField = document.querySelector('.clean').getBoundingClientRect();
    // if((rect.left - cleanField.right) <=25){
    //     score(parent.firstElementChild);
    //     parent.firstElementChild.remove();
    //     if(parent.firstElementChild.className.indexOf("firstChild")<0) parent.firstElementChild.className += " firstChild";
    // }
}




 