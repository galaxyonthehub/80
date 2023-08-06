function adicionar(){

    let text = document.getElementById("textinput").value;
    let list = document.getElementById("lista").innerHTML;

    list += "<li>" +text+ "</li>"

    document.getElementById("lista").innerHTML = list;

}

function searching(){
 var s= documen.getElementById("listinput").value;
 var found=0;
 var j;
 for(j=0; j<namesOfProple.length; j++)
 {
    if(s==namesOfPeople[j]){
        found=found+1;
    }
 }
 document.getElementById("p2").innerHTML="Nome encontrado"+found+"vez(es)"
}