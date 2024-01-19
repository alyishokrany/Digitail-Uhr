let hrsEl = document.getElementById('hrs');
let minEl = document.getElementById('min');
let sceEL = document.getElementById('sce');

setInterval(()=>{

    let currentTime = new Date();

    hrsEl.innerHTML = (currentTime.getHours()<10?"0":" ") +  currentTime.getHours();
    minEl.innerHTML = (currentTime.getMinutes()<10?"0":" ") +  currentTime.getMinutes();
    sceEL.innerHTML = (currentTime.getSeconds()<10?"0":" ") +  currentTime.getSeconds();
},1000)

