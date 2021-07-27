var millisecond =1000;

var pacMan = document.querySelector('.pac-man').getBoundingClientRect();
var PacManBar = (pacMan.right - pacMan.left)/10;
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
    //let children = document.getElementsByClassName('field-food');

    const parent = document.querySelector('.field-foods');
    i = Math.floor(Math.random() * 10);
        if((i % 2) === 0){
             parent.innerHTML += food;  
        }else{ parent.innerHTML += ghost;  }   
       // console.log("milli : ",millisecond);
        
        
     if(parent.firstElementChild.className.indexOf("firstChild")<0) parent.firstElementChild.className += " firstChild";
        
        var rect = document.querySelector('.firstChild').getBoundingClientRect();
        //console.log(rect.left - leftFieldFoods);
    if((rect.left - leftFieldFoods)<PacManBar){
        score(parent.firstElementChild);
        parent.firstElementChild.remove();
    } //clearInterval(myVar);
}
var scoreVar = 0;
function score(element){
    if(element.id === "food"){
        scoreVar++;
        console.log("score : ",scoreVar,"milli : ",millisecond);
        speedEat();
        clearInterval(myVar);
        myVar = setInterval(carousel, millisecond);
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


 