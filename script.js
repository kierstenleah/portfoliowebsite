const gameButton = document.getElementById('games-button');
const webButton = document.getElementById('websites-button');
const moreButton = document.getElementById('more-button');
const gameFolders = document.getElementById('games');
const webFolders = document.getElementById('websites');
const moreFolders = document.getElementById('more');

function openGames(){
    gameFolders.style.display='flex';
    webFolders.style.display='none';
    moreFolders.style.display='none';
    gameButton.style.backgroundColor = 'pink';
    webButton.style.backgroundColor = 'transparent';
    moreButton.style.backgroundColor = 'transparent';
};

function openWeb(){
    webFolders.style.display='flex';
    gameFolders.style.display='none';
    moreFolders.style.display='none';
    webButton.style.backgroundColor = 'pink';
    gameButton.style.backgroundColor = 'transparent';
    moreButton.style.backgroundColor = 'transparent';
};

function openMore(){
    moreFolders.style.display='flex';
    webFolders.style.display='none';
    gameFolders.style.display='none';
    moreButton.style.backgroundColor = 'pink';
    gameButton.style.backgroundColor = 'transparent';
    webButton.style.backgroundColor = 'transparent';
};

gameButton.onclick = openGames;
webButton.onclick = openWeb;
moreButton.onclick = openMore;
