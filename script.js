var count = 0;
var input1 = document.getElementById("task");
var input2 = document.getElementById("deadline");

initialize();

function initialize(){
    document.getElementById("task").focus();
    document.getElementById("task").value="";
    var d = new Date();
    var datetime = d.getFullYear() + "-";
    datetime += d.getMonth().toString().padStart(2,'0') + "-";
    datetime += d.getDate().toString().padStart(2,'0') + "T";
    datetime += "23:59";
    document.getElementById("deadline").value = datetime;
}

input1.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("add-button").click();
    }
})

input2.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("add-button").click();
    }
})

function deleteTask(){
    var nodeArray = document.querySelectorAll(".taskList");
    nodeArray.forEach(element => {
        if(element.firstChild.firstChild.checked){
            element.lastChild.click();
        }
    });
    var array = document.querySelectorAll(".taskList");
    var c=0;
    array.forEach(element => {
        c++;
        element.children[1].innerHTML = c;
    });
    count--;
}

function addTask(){
    if(input1.value==""){
        return;
    }
    if(count==0){
        document.getElementById("notasks").style.visibility="hidden";
    }
    count++;
    var countNode = document.createTextNode(count);
    var task = document.createTextNode(document.getElementById("task").value);
    var deadline = document.createTextNode(document.getElementById("deadline").value);
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "check")
    var tr = document.createElement("tr");
    tr.setAttribute("class", "taskList");
    var arr=[check, countNode, task, deadline];
    for(var i=0; i<4; i++){
        var td = document.createElement("td");
        td.appendChild(arr[i]);
        tr.appendChild(td);
    }
    var glyphicon = document.createElement("button");
    glyphicon.setAttribute("class", "glyphicon glyphicon-trash");
    glyphicon.setAttribute("style","margin:5px 10px; color:white; border:none; background:red; border-radius:6px;");
    glyphicon.addEventListener("click",removeTask);
    tr.appendChild(glyphicon);
    document.getElementById("body").appendChild(tr);
    initialize();
}

function removeTask(event, del=false){
    var target = event.target;
    target.parentNode.remove();
    var array = document.querySelectorAll(".taskList");
    if(array.length==0){
        document.getElementById("notasks").style.visibility="visible";
    }
    if(del){
        return;
    }
    var c=0;
    array.forEach(element => {
        c++;
        element.children[1].innerHTML = c;
    });
    count--;
    
}

