var miss = 0; 
var word;
var length = 0;
const character = []; 
var divElem = document.createElement('div');
divElem.setAttribute('style', 'text-align:center;');
function generate(){
    word = document.getElementById("word").value;
    for(let i = 0; i < word.length; ++i){
        character[i] = document.createElement('button');
        character[i].innerHTML = "_";
        character[i].setAttribute('number', i);
        character[i].setAttribute('class', "FindWord");
        document.body.appendChild(character[i]);
        divElem.appendChild(character[i]);
    }
    document.getElementById("word").value = "";
    document.body.appendChild(divElem);
    document.getElementById("word").disabled = true;
    document.getElementById("joaca").disabled = true;
  
}

function search(char){
    if(word.length != 0){
        let cont = 0;
        for(let i = 0; i < word.length; ++i){
            if(word[i] == char || word[i] == char.toLowerCase()){
            character[i].innerHTML = char;
            ++cont;
            ++length;
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
        if(length == word.length){
            window.setTimeout(function(){alert("Yow Win!")},900);
            window.setTimeout(function(){location.reload()},1500);
        
        }
        document.getElementById(char).disabled = true;
    }
}
