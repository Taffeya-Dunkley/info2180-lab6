window.onload=function(){
     let answer = document.getElementById("result");
     let text =document.getElementByClass("text").value;
    
    var searchX= document.getElementById("button");
    searchX.addEventListener("click", function(){
    let xml = new XMLHttpRequest();
    xml.onreadystatechange=function(){
        if(xml.readyState === 4 && xml.status ===200){
           let response = xml.responseText;
                answer.innerHTML = response;
        }
        
    };
    xml.open("GET","request.php?q=definition"+text,true);
    xml.send();
    });
    
 var searchY= document.getElementById("buttn");
 searchY.addEventListener("click",function(){
        let xmls = new XMLHttpRequest();
        xmls.onreadystatechange = function(){
            if (this.readyState ==4 && this.status == 200){
                let response = xmls.responseText;
                
                answer.innerHTML = response;
                
            }
        }
        xmls.open("GET", "request.php?q=&all="+true, true);
        xmls.send();
    });
    
};