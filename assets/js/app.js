let arrUsers = document.querySelectorAll('.users__userName');
let searchInput = document.querySelector('#searchInput');

//console.log(arrUsers.length);


function myFunc(){

    // console.log(searchInput.value);

    for(i = 0; i < arrUsers.length; i++){
        arrUsers[i].parentElement.parentElement.parentElement.style.display = "inline-flex";
    }

    hidingUsers = []; // Girilen değeri İÇERMEYEN isimleri tutar.
    
    for(i = 0; i < arrUsers.length ; i++){
        if( !( arrUsers[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) ) ){
            hidingUsers.push(arrUsers[i]);
        }
    }

    for(i = 0; i < hidingUsers.length; i++){
        hidingUsers[i].parentElement.parentElement.parentElement.style.display = "none";
    }
}

searchInput.addEventListener('input', myFunc);
