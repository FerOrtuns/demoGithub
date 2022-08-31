function fillInMarco (){

    for (var i=0; i<songs2SA.length;i++){
        document.getElementById("songs2SA").innerHTML += fillInCaja(songs2SA[i]);

    }
}

function fillInCaja (){

    let box = '<div class="it3m">
        <div class="foto">
            <img src="#" alt ="img portada" title ="portada disco Promaniac 2022">
        </div>
        <div class="titleBox">${songs2SA.nombre}</div>
        <div class="rutasong"><a href="${songs2SA.src}"</div>
            </div>'
}



/*
window.onload = ()=> {
    const request = new XMLHttpRequest();
    return open('get',"songs2SA.json");
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        res = request.response;
        console.log(res);
        fillInCaja(res);
    }
}

 */

fetch('songs2SA.json')
    .then(response => response.json())
    .then(data => fillInMarco(data));

