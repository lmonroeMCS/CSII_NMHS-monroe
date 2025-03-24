
    
    let someName;
    let someText;
    let allText;

    document.getElementById("mySubmit").onclick = function(){
        someName = document.getElementById("myName").value;
        //document.getElementById("passName").innerHTML = 'Hello <b>' + someName;
        
        someText = document.getElementById("myText").value;
        //document.getElementById("passText").innerHTML = 'You said: <b><u>' + someText;

        allText = 'Hello <b>' + someName + '<br></b>You said: <b><i>' + someText + '</b></i>';
        document.getElementById("passAllText").innerHTML = allText;
    }
    



 

