window.onload = function()
{
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

        var i = 3;
        function countdownToStart() {
        setTimeout(() => {
            console.log(i);
            i--;
            if ( i > -1 ) {
                countdownToStart();
            }
            else {
                document.getElementById('isGame').style.visibility = "visible";
                tikTakBoom.run();
            }
        }, 1000);
    }

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

