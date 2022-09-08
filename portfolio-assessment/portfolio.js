function show(name){
    var content=document.getElementsByClassName('tab-content');
    var tabs = document.getElementsByClassName('tab-link');
    for(var i=0;i<content.length;i++)
        content[i].classList.remove('active-content');
    document.getElementById(name).classList.add('active-content');
    for(var i=0;i<content.length;i++)
        tabs[i].classList.remove("active-link");
    event.currentTarget.classList.add("active-link")
}