function submitAngle(){
    ang1 = document.querySelector('.angle1');
    ang2 = document.querySelector('.angle2');
    ang3 = document.querySelector('.angle3');

    if((parseInt(ang1.value) + parseInt(ang2.value) + parseInt(ang3.value)) == 180){
        document.querySelector('.true-angle').style.display = "block";
        document.querySelector('.false-angle').style.display = "none";
    }
    else{
        document.querySelector('.true-angle').style.display = "none";
        document.querySelector('.false-angle').style.display = "block";
    }
}

function submitHypo(){
    side1 = document.querySelector('.side1');
    side2 = document.querySelector('.side2');

    var res = (parseInt(side1.value) * parseInt(side1.value)) + (parseInt(side2.value) * parseInt(side2.value))
    document.querySelector('.result-hypo').style.display = "inline";
    document.querySelector('.hypo-result').innerHTML = Math.sqrt(res);
}

function areaFun(areaSel){
    document.querySelector('.area1-box').style.display= 'none';
    document.querySelector('.area2-box').style.display= 'none';
    document.querySelector('.area3-box').style.display= 'none';

    switch(areaSel){
        case 'a':
            document.querySelector('.area1-box').style.display= 'block';
            break;
        case 'b':
            document.querySelector('.area2-box').style.display= 'block';
            break;
        case 'c':
            document.querySelector('.area3-box').style.display= 'block';
            break
    }
}


function subArea1(){
    var bace = document.querySelector('.bace');
    var height = document.querySelector('.height');

    var area1= parseInt(bace.value) * parseInt(height.value) * 0.5;
    document.querySelector('.result1').style.display = 'inline';
    document.querySelector('.area1-result').innerHTML= area1; 
}

function subArea2(){
    side1 = parseInt(document.querySelector('.side1').value);
    side2 = parseInt(document.querySelector('.side2').value);
    side3 = parseInt(document.querySelector('.side3').value);
    
    var s= (side1+side2+side3)*0.5;
    var area2= Math.sqrt(s * (s-side1) * (s-side2) * (s-side3))
    document.querySelector('.result2').style.display = 'inline';
    document.querySelector('.area2-result').innerHTML= area2;
}

function subArea3(){
    var b = document.querySelector('.b');
    var c = document.querySelector('.c');
    var angle = document.querySelector('.angle');

    var area3= 0.5 * parseInt(b.value) * parseInt(c.value) * Math.sin(parseInt(angle.value));
    document.querySelector('.result3').style.display = 'inline';
    document.querySelector('.area3-result').innerHTML= area3; 
}

function submitQuiz(){
    var ans= {'q1':'true', 'q2':'false', 'q3':'true', 'q4':'isosceles', 'q5':'5cm'};
    var res=0;
    answered=[];
    var quizForm = document.querySelector('.quiz-form');
    var radioSelected= new FormData(quizForm);

    for(val of radioSelected.entries()){
        if(ans[val[0]] == val[1]){
            res+=1;
        }
    }
    document.querySelector('.result-quiz').style.display = 'inline';
    document.querySelector('.quiz-result').innerHTML= res;
}