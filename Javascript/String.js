------------------------------------------------------
#Input textArea enter Handling while Entering into DB 
------------------------------------------------------

var str = document.getElementById("textarea").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    document.getElementById("textarea").value = str;

------------------------------------------------------
#Input textArea enter Handling while Extracting from DB 
------------------------------------------------------
var str = document.getElementById("textarea").value;
    str = str.replaceAll("<br/>", "\r\n");
    document.getElementById("textarea").value = str;
