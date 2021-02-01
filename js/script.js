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
    function countdownToStart(singlePlayer = 'true') {

        tikTakBoom.gameStatusField.style.visibility = "hidden";
        //  tikTakBoom.state = 1;
        for (j = 0; j < this.countOfPlayers; j++)
            tikTakBoom.boomTimer[j] = 30;

        //  tikTakBoom.rightAnswers = [];
        setTimeout(() => {
            countdownHTML.innerHTML += i + '...';
            i--;
            if (i > -1) {
                countdownToStart(singlePlayer);
                document.getElementById('button_start').style.visibility = "hidden";
                document.getElementById('button_ownTime').style.visibility = "hidden";
            } else {
                document.getElementById('isGame').style.visibility = "visible";
                document.getElementById('button_end').style.visibility = "visible";
                document.getElementById('main_field').style.visibility = "visible";
                tikTakBoom.gameStatusField.style.visibility = "visible";
                countdownHTML.innerHTML = '';
                tikTakBoom.run(singlePlayer);
            }
        }, 1000);
    }

    // Для активации функции Собственное время
    let activeOwnTime = 1;
    document.getElementById('button_ownTime').addEventListener('click', () => {
        //   button_ownTime.style.backgroundColor = "red";
        if (activeOwnTime == 0) activeOwnTime = 1;
        else activeOwnTime = 0;
    })

    // Запуск игры по нажатию на кнопку Начать игру
    document.getElementById('button_start').addEventListener('click', () => {
        tikTakBoom.gameStatusField.innerHTML = ``;
        tikTakBoom.gameStatusField.style.visibility = "hidden";

        if (activeOwnTime == 1) {
            countdownToStart();
        } else {
            // Активация отдельных таймеров для каждого игрока при нажатии кпопки "Собственное время"
            countdownToStart(0);
        }

        countdownHTML.innerHTML = "";
    })

    //Прекращение игры при нажатии на кнопку "Конец игры"
    document.getElementById('button_end').addEventListener('click', () => {
        document.getElementById('main_field').style.visibility = "hidden";
        tikTakBoom.finish();
    })
};