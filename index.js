var miss = 0; 
var cuv;
var length2 = 0;
var length1 = 0;
const lit = []; 
var divElem = document.createElement('div');
divElem.setAttribute('style', 'text-align:center;');
function generate(){
    cuv = document.getElementById("word").value;
    length1 = cuv.length;
    for(let i = 0; i < length1; ++i){
        lit[i] = document.createElement('button');
        lit[i].innerHTML = "_";
        lit[i].setAttribute('number', i);
        lit[i].setAttribute('class', "FindWord");
        document.body.appendChild(lit[i]);
        divElem.appendChild(lit[i]);
    }
    document.getElementById("word").value = "";
    document.body.appendChild(divElem);
    document.getElementById("word").disabled = true;
    document.getElementById("joaca").disabled = true;
  
}

function search(char){
    if(length1 != 0){
        let cont = 0;
        for(let i = 0; i < length1; ++i){
            if(cuv[i] == char || cuv[i] == char.toLowerCase()){
            lit[i].innerHTML = char;
            ++cont;
            ++length2;
            }
     }
       if(cont == 0){
            ++miss;
            document.getElementById(miss).style.display ="inline";
            if(miss == 6){
                window.setTimeout(function(){alert("You lost")},500);
                window.setTimeout(function(){location.reload()},1500);
            }
        }
        if(length2 == length1){
            window.setTimeout(function(){alert("Yow Win!")},900);
            window.setTimeout(function(){location.reload()},1500);
        
        }
        document.getElementById(char).disabled = true;
    }
}
