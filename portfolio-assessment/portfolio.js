function show(name){
    var content;
    content=document.getElementsByClassName('tab-content');
    for(var i=0;i<content.length;i++)
        content[i].style.display='none';
    document.getElementById(name).style.display='block';
}