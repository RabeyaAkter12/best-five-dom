
let count = 0;
function insertIntoSelection(playerName) {

    // 5 Player selected and others Player no add
    console.log(document.getElementById('player-list').childElementCount);
    if (document.getElementById('player-list').childElementCount > 4) {
        alert('No add anything.');
        return false;
    }

    count++;

    const element = document.createElement('li');
    element.innerHTML = count + '. ' + playerName;

    document.getElementById('player-list').appendChild(element);
}

//  disable button
function disableButton(btnId) {
    document.getElementById(btnId).disabled = true;
    document.getElementById(btnId).style.backgroundColor = 'gray';
}

// retrieving players
document
    .getElementById('player-one-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-one-btn');
    });
document
    .getElementById('player-two-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-two-btn');
    });
document
    .getElementById('player-three-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-three-btn');
    });
document
    .getElementById('player-four-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-four-btn');
    });
document
    .getElementById('player-five-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-five-btn');
    });
document
    .getElementById('player-six-btn')
    .addEventListener('click', function (event) {
        const flag = insertIntoSelection(event.target.value);

        if (flag === false) {
            return;
        }
        disableButton('player-six-btn');
    });





