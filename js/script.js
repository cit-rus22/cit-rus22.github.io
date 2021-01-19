window.onload = function () {
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('answer3'),
        document.getElementById('answer4'),
        document.getElementById('answer5'),
    )

    document.getElementById('isGame').style.visibility = "hidden";

    // Для функции-счётчика
    var i = 3;

    // Куда выводить отсчёт
    var countdownHTML = document.getElementById('countdown');

    // Сама функция отсчёта с отображением скрытого isGame
    function countdownToStart() {
        setTimeout(() => {
            countdownHTML.innerHTML += i + '...';
            i--;
            if (i > -1) {
                countdownToStart();
            }
            else {
                document.getElementById('isGame').style.visibility = "visible";
                tikTakBoom.run();
            }
        }, 1000);
    }

    // Запуск игры по нажатию на кнопку Начать игру
    document.getElementById('button_start').addEventListener('click', () => {
        countdownToStart();
    })

    //function buttonStart () {
    //    document.getElementById('button_start').addEventListener('click', () => {
    //    document.getElementById('isGame').style.visibility = "visible";
    //    setTimeout(() => tikTakBoom.run(), 0);
    //})
    //}
};

