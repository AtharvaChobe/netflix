const menu = document.querySelector('.ham');
const Listmenu = document.querySelector('.left ul');

function toggle(){
    Listmenu.style.top = "10%";
    Listmenu.style.right = "10px";
    menu.style.display = "none";
    document.querySelector('.cancel').style.display = "block";
}

function cancel(){
    Listmenu.style.top = "-80%";
    Listmenu.style.right = "-80px";
    menu.style.display = "block";
}

// setTimeout(changeVideo(), 5000);

// function changeVideo(){
//     document.querySelector('.banner h1').innerHTML = "The Flash"
//     document.querySelector('.vdo').src = 'img\THE FLASH - FINAL TRAILER.mp4';
    
// }

