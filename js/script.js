window.onload = function() {
    tikTakBoom.init(
        tasks,
        document.querySelector('#playerNumber').value,

        document.getElementsByClassName('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4'),
        document.getElementById('answer5'),
    )

    document.getElementById('isGame').style.visibility = "hidden";
    document.getElementById('button_end').style.visibility = "hidden";
    // Для функции-счётчика
    let i = 3;

    // Куда выводить отсчёт
    var countdownHTML = document.getElementById('countdown');

    // Сама функция отсчёта с отображением скрытого isGame
    function countdownToStart() {
        tikTakBoom.gameStatusField.style.visibility = "hidden";
        tikTakBoom.state = 1;
        for (j = 0; j < this.countOfPlayers; j++)
            tikTakBoom.boomTimer[j] = 30;

        tikTakBoom.rightAnswers = 0;
        setTimeout(() => {
            countdownHTML.innerHTML += i + '...';
            i--;
            if (i > -1) {
                countdownToStart();
                document.getElementById('button_start').style.visibility = "hidden";
            } else {
                document.getElementById('isGame').style.visibility = "visible";
                document.getElementById('button_end').style.visibility = "visible";
                document.getElementById('main_field').style.visibility = "visible";
                tikTakBoom.gameStatusField.style.visibility = "visible";
                countdownHTML.innerHTML = '';
                tikTakBoom.run();
            }
        }, 1000);

    }


    // Запуск игры по нажатию на кнопку Начать игру
    document.getElementById('button_start').addEventListener('click', () => {
        i = 3;
        tikTakBoom.gameStatusField.innerText = ``;
        tikTakBoom.gameStatusField.style.visibility = "hidden";
        countdownToStart();

        countdownHTML.innerHTML = "";

    })

    function stopGame() {
        document.getElementById('main_field').style.visibility = "hidden";
        tikTakBoom.finish();
    }

    //Прекращение игры при нажатии на кнопку "Конец игры"
    document.getElementById('button_end').addEventListener('click', () => {
        stopGame();
    })

};