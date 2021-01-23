tikTakBoom = {
    init(
        tasks,
        playerNumber,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        textFieldAnswer3,
        textFieldAnswer4,
        textFieldAnswer5
    ) {
        this.boomTimer = [];
        this.countOfPlayers = playerNumber;
        this.tasks = JSON.parse(tasks);

        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.textFieldAnswer3 = textFieldAnswer3;
        this.textFieldAnswer4 = textFieldAnswer4;
        this.textFieldAnswer5 = textFieldAnswer5;

        this.needRightAnswers = 3;
    },

    delayRun() {
        window.setTimeout(run, 3000);
    },

    /*
     
    playersCount = this.countOfPlayers;
    
*/

    createTimers() {
        // Создание таймеров по числу игроков
        const playerNumber = document.querySelector('#playerNumber').value;
        this.countOfPlayers = playerNumber;

        for (j = 0; j < this.countOfPlayers; j++) {

            let timer_label = document.createElement("label");
            timer_label.innerHTML = 'Игрок_' + (j + 1);
            timer_label.className = "timer_label";
            document.getElementById("timers").appendChild(timer_label);
            let timerNth = document.createElement("div");
            timerNth.innerHTML = "00:00";
            timerNth.className = `timer-output timerField timer_${j}`;
            document.getElementsByClassName("timer_label")[j].appendChild(timerNth);
            this.boomTimer[j] = 30;
            // console.log(timerNth.className);
        };

    },

    run() {


        this.state = 1;
        this.rightAnswers = 0;

        this.createTimers();

        this.turnOn();

        this.timer();
    },

    turnOn() {

        this.gameStatusField.innerText += `Вопрос игроку №${this.state}`;

        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);

        this.tasks.splice(taskNumber, 1);

        this.state = (this.state == this.countOfPlayers) ? 1 : this.state + 1;
    },

    turnOff(value) {
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!';
            this.rightAnswers += 1;
        } else {
            this.gameStatusField.innerText = 'Неверно!';
        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose', this.state);
            } else {
                this.turnOn();
            }
        } else {
            this.finish('won', this.state);
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
        this.textFieldAnswer3.removeEventListener('click', answer3);
        this.textFieldAnswer4.removeEventListener('click', answer4);
        this.textFieldAnswer5.removeEventListener('click', answer5);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;
        this.textFieldAnswer3.innerText = task.answer3.value;
        this.textFieldAnswer4.innerText = task.answer4.value;
        this.textFieldAnswer5.innerText = task.answer5.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));
        this.textFieldAnswer3.addEventListener('click', answer3 = () => this.turnOff('answer3'));
        this.textFieldAnswer4.addEventListener('click', answer4 = () => this.turnOff('answer4'));
        this.textFieldAnswer5.addEventListener('click', answer5 = () => this.turnOff('answer5'));

        this.currentTask = task;
    },

    finish(result = 'lose', player = 'end') {
        console.log(player + 'pl');
        if (result === 'lose') {
            if (player === 'end') this.gameStatusField.innerText = `Вы проиграли!`;
            else this.gameStatusField.innerText = `Игрок ${player} проиграл!`;

        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Игрок ${player} выиграл!`;

        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        document.getElementById('main_field').style.visibility = "hidden";
        document.getElementById('button_start').style.visibility = "visible";
        document.getElementById('button_end').style.visibility = "hidden";
        // console.log(this);
        //   this.boomTimer = 30;
        //   this.rightAnswers = 0;
        //  this.gameStatusField.style.visibility = "hidden";

        // Удаление таймеров
        let element = document.getElementById("timers");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

    },

    timer() {
        // for (j = 0; j < this.countOfPlayers; j++) {
        if (this.state == 1) {
            // console.log(timerNth.className);
            this.boomTimer[0] -= 1;
            let sec = this.boomTimer[0] % 60;
            let min = (this.boomTimer[0] - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField[0].innerText = `${min}:${sec}`;

            if (this.boomTimer[0] > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose', this.state);
                console.log(this.state);
            }
        }
        // }
        if (this.state == 2) {

            this.boomTimer[1] -= 1;
            let sec = this.boomTimer[1] % 60;
            let min = (this.boomTimer[1] - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField[1].innerText = `${min}:${sec}`;

            if (this.boomTimer[1] > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose', this.state);
                console.log(this.state);
            }
        }

        if (this.state == 3) {

            this.boomTimer[2] -= 1;
            let sec = this.boomTimer[2] % 60;
            let min = (this.boomTimer[2] - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField[2].innerText = `${min}:${sec}`;

            if (this.boomTimer[2] > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose', this.state);
                console.log(this.state);
            }
        }

        if (this.state == 4) {

            this.boomTimer[3] -= 1;
            let sec = this.boomTimer[3] % 60;
            let min = (this.boomTimer[3] - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField[3].innerText = `${min}:${sec}`;

            if (this.boomTimer[3] > 0) {
                setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose', this.state);
                console.log(this.state);
            }
        }

    },
}