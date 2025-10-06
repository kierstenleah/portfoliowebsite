let ogPhoto = document.getElementById('photo');
let copyPhoto = ogPhoto.cloneNode(true);
copyPhoto.id = 'copyphoto';
let container = document.querySelector('.container');

function layeredTabs(){
    ogPhoto.append(copyPhoto); 
}

