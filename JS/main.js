function show(){
    var a= parseInt( document.getElementById('number1').value);
    if(isNaN(a)){
        alert("Enter Number only like 1,2,3,4....");
        return false;
    }
    if(a%2 == 0){
        document.getElementById('ans').innerHTML="Even Number";
    }
    else{
        document.getElementById('ans').innerHTML= "Odd Number";
    }
}

function leap(){
    var years= parseInt(document.getElementById('year').value);
    if(isNaN(years)){
        alert("Enter year only like 2001, 2003....");
        return false;
    }
    if((0== years %4)&& (0 != years %100)|| (0== years %400)){
        document.getElementById('leap-result').innerHTML="<span style=' margin-left : 5px'>Its a Leap Year";
    }
    else {
        document.getElementById('leap-result').innerHTML="<span style=' margin-left : 10px'>Its not a Leap Year";
    }

}