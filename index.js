window.onload=function(){
    var searchX= document.getElementById("button");
    searchX.addEventListener("click", function(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange=function(){
        if(xml.readyState === 4 && xml.status ===200){
            alert(xml.responseText);
        }
        
    };
    xml.open("GET","request.php?q=definition",true);
    xml.send();
    });
};