const tasks = `

    [
        {
            "question": "2 * 2 = ",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "5" },
            "answer3": { "result": false, "value": "6" },
            "answer4": { "result": false, "value": "7" },
            "answer5": { "result": false, "value": "8" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" },
            "answer3": { "result": false, "value": "Велоцераптор" },
            "answer4": { "result": false, "value": "Абу" },
            "answer5": { "result": false, "value": "Кеша" }
        },
        {
            "question": "5 + 5",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "10" },
            "answer3": { "result": false, "value": "15" },
            "answer4": { "result": false, "value": "20" },
            "answer5": { "result": false, "value": "30" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": false, "value": "Ватикан" },
            "answer2": { "result": true, "value": "Рим" },
            "answer3": { "result": false, "value": "Москва" },
            "answer4": { "result": false, "value": "Киев" },
            "answer5": { "result": false, "value": "Минск" }
        },
        {
            "question": "Самый большой океан",
            "answer1": { "result": false, "value": "Атлантический" },
            "answer2": { "result": true, "value": "Тихий" },
            "answer3": { "result": false, "value": "Индийский" },
            "answer4": { "result": false, "value": "Северный Ледовитый" },
            "answer5": { "result": false, "value": "Южный" }
        },
        {
            "question": "На каком материке нет рек?",
            "answer1": { "result": false, "value": "Евразия" },
            "answer2": { "result": true, "value": "Антарктида" },
            "answer3": { "result": false, "value": "Африка" },
            "answer4": { "result": false, "value": "Австралия" },
            "answer5": { "result": false, "value": "Южная Америка" }
        },
        {
            "question": "Самое глубокое озеро",
            "answer1": { "result": false, "value": "Гурон" },
            "answer2": { "result": true, "value": "Байкал" },
            "answer3": { "result": false, "value": "Ладожское" },
            "answer4": { "result": false, "value": "Мичиган" },
            "answer5": { "result": false, "value": "Онтарио" }
        },
        {
            "question": "Как переводится фраза "Акуна Матата"?",
            "answer1": { "result": true, "value": "Без забот" },
            "answer2": { "result": false, "value": "Не сдавайся" },
            "answer3": { "result": false, "value": "Забудь о прошлом" },
            "answer4": { "result": false, "value": "Не унывай" },
            "answer5": { "result": false, "value": "Будь сильнее" }
        },
        {
            "question": "Во кого преваращается Джафар во время схватки с Аладдином?",
            "answer1": { "result": true, "value": "Змея" },
            "answer2": { "result": false, "value": "Дракона" },
            "answer3": { "result": false, "value": "Скорпиона" },
            "answer4": { "result": false, "value": "Великана" },
            "answer5": { "result": false, "value": "Крокодила" }
        },
        {
            "question": "Кто является лучшим другом Гуфи?",
            "answer1": { "result": true, "value": "Дональд Дак" },
            "answer2": { "result": false, "value": "Микки Маус" },
            "answer3": { "result": false, "value": "Чёрный плащ" },
            "answer4": { "result": false, "value": "Плуто" },
            "answer5": { "result": false, "value": "Инспектор Гаджет" }
        },
        {
            "question": "Какого бизнеса не было у Скруджа МакДака?",
            "answer1": { "result": true, "value": "IT компания" },
            "answer2": { "result": false, "value": "Нефтяная компания" },
            "answer3": { "result": false, "value": "Морской флот" },
            "answer4": { "result": false, "value": "Кондитерская фабрика" },
            "answer5": { "result": false, "value": "Промышленные предприятия" }
        },
        {
            "question": "К какому виду животных относится Тимон?",
            "answer1": { "result": true, "value": "Сурикат" },
            "answer2": { "result": false, "value": "Тушканчик" },
            "answer3": { "result": false, "value": "Мангуст" },
            "answer4": { "result": false, "value": "Хомяк" },
            "answer5": { "result": false, "value": "Хорёк" }
        },
        {
            "question": "Сколько игроков в футбольной команде?",
            "answer1": { "result": true, "value": "11" },
            "answer2": { "result": false, "value": "9" },
            "answer3": { "result": false, "value": "10" },
            "answer4": { "result": false, "value": "12" },
            "answer5": { "result": false, "value": "13" }
        },
        {
            "question": "Ближайшая к Солнцу планета",
            "answer1": { "result": true, "value": "Меркурий" },
            "answer2": { "result": false, "value": "Марс" },
            "answer3": { "result": false, "value": "Земля" },
            "answer4": { "result": false, "value": "Венера" },
            "answer5": { "result": false, "value": "Уран" }
        },
        {
            "question": "В високосном году изменяется количество дней в...",
            "answer1": { "result": true, "value": "Феврале" },
            "answer2": { "result": false, "value": "Январе" },
            "answer3": { "result": false, "value": "Марте" },
            "answer4": { "result": false, "value": "Апреле" },
            "answer5": { "result": false, "value": "Мае" }
        },
        {
            "question": "Ближайшая к Солнцу планета",
            "answer1": { "result": true, "value": "Меркурий" },
            "answer2": { "result": false, "value": "Марс" },
            "answer3": { "result": false, "value": "Земля" },
            "answer4": { "result": false, "value": "Венера" },
            "answer5": { "result": false, "value": "Уран" }
        },
        {
            "question": "Длина экватора",
            "answer1": { "result": true, "value": "40'000км" },
            "answer2": { "result": false, "value": "12'000км" },
            "answer3": { "result": false, "value": "24'000км" },
            "answer4": { "result": false, "value": "30'000км" },
            "answer5": { "result": false, "value": "42'000км" }
        },
        {
            "question": "Что такое событие?",
            "answer1": { "result": true, "value": "Способ взаимодействия между пользователем и сайтом"},
            "answer2": { "result": false, "value": "Вывод ошибки в консоль"},
            "answer3": { "result": false, "value": "Окончание работы программы"},
            "answer4": { "result": false, "value": "Исключение в коде"},
            "answer5": { "result": false, "value": "Процесс отладки"},
            "answer6": { "result": false, "value": "Начало работы программы"}
        },
        {
            "question": "Как вывести системное окно с полем для ввода значения?",
            "answer1": { "result": true, "value": "prompt()"},
            "answer2": { "result": false, "value": "confirm()"},
            "answer3": { "result": false, "value": "alert()"},
            "answer4": { "result": false, "value": "input()"},
            "answer5": { "result": false, "value": "slice()"},
            "answer6": { "result": false, "value": "push()"}
        },    
            "question": "Какой цикл в JavaScript проверяет условие после каждой итерации?",
            "answer1": { "result": true, "value": "do...while" },
            "answer2": { "result": false, "value": "while...until" },
            "answer3": { "result": false, "value": "for" },
            "answer4": { "result": false, "value": "while" },
            "answer5": { "result": false, "value": "for...in" }
        },
        {
            "question": "Какой цикл в JavaScript проверяет условие перед каждой итерацией?",
            "answer1": { "result": true, "value": "for" },
            "answer2": { "result": false, "value": "while" },
            "answer3": { "result": false, "value": "for...in" },
            "answer4": { "result": false, "value": "do...while" },
            "answer5": { "result": false, "value": "for...next" }
        },
        {
            "question": "Самые высокие горные системы на Земле",
            "answer1": { "result": true, "value": "Гималаи" },
            "answer2": { "result": false, "value": "Альпы" },
            "answer3": { "result": false, "value": "Аппалачи" },
            "answer4": { "result": false, "value": "Саяны" },
            "answer5": { "result": false, "value": "Урал" }
        },
        {
            "question": "Какой рыбы привозил 'шаланды полные' Костя в Одессу в знаменитой песне?",
            "answer1": { "result": true, "value": "Кефаль" },
            "answer2": { "result": false, "value": "Форель" },
            "answer3": { "result": false, "value": "Сом" },
            "answer4": { "result": false, "value": "Лосось" },
            "answer5": { "result": false, "value": "Сибас" }
        },
        {
            "question": "Какому животному разрывает пасть Самсон в знаменитом памятнике в Петергофе?",
            "answer1": { "result": true, "value": "Лев" },
            "answer2": { "result": false, "value": "Тигр" },
            "answer3": { "result": false, "value": "Медведь" },
            "answer4": { "result": false, "value": "Крокодил" },
            "answer5": { "result": false, "value": "Гепард" }
        },
        {
            "question": "Какое животное дало имя скоростному автомобилю?",
            "answer1": { "result": true, "value": "Мустанг" },
            "answer2": { "result": false, "value": "Орёл" },
            "answer3": { "result": false, "value": "Гепард" },
            "answer4": { "result": false, "value": "Улитка" },
            "answer5": { "result": false, "value": "Олень" }
        },
        {
            "question": "Какая птица является символом США?",
            "answer1": { "result": true, "value": "Орёл" },
            "answer2": { "result": false, "value": "Ястреб" },
            "answer3": { "result": false, "value": "Сокол" },
            "answer4": { "result": false, "value": "Голубь" },
            "answer5": { "result": false, "value": "Соловей" }
        },        
        {
            "question": "Кто является самым крупным представителем семейства кошачих?",
            "answer1": { "result": true, "value": "Тигр" },
            "answer2": { "result": false, "value": "Лев" },
            "answer3": { "result": false, "value": "Манул" },
            "answer4": { "result": false, "value": "Гепард" },
            "answer5": { "result": false, "value": "Ягуар" }
        },
        {
            "question": "Пчёлы водятся на всех континентах, кроме одного",
            "answer1": { "result": false, "value": "Евразия" },
            "answer2": { "result": true, "value": "Антарктида" },
            "answer3": { "result": false, "value": "Африка" },
            "answer4": { "result": false, "value": "Австралия" },
            "answer5": { "result": false, "value": "Южная Америка" }
        },
        {
            "question": "Какое сухопутное животное является самым быстрым?",
            "answer1": { "result": true, "value": "Гепард" },
            "answer2": { "result": false, "value": "Лев" },
            "answer3": { "result": false, "value": "Манул" },
            "answer4": { "result": false, "value": "Тигр" },
            "answer5": { "result": false, "value": "Ягуар" }
        },
        {
            "question": "Какое сухопутное животное является самым крупным?",
            "answer1": { "result": true, "value": "Слон" },
            "answer2": { "result": false, "value": "Лев" },
            "answer3": { "result": false, "value": "Манул" },
            "answer4": { "result": false, "value": "Гепард" },
            "answer5": { "result": false, "value": "Ягуар" }
        },
        {
            "question": "Единственный континент в мире, где живут жирафы",
            "answer1": { "result": false, "value": "Евразия" },
            "answer2": { "result": true, "value": "Африка" },
            "answer3": { "result": false, "value": "Антарктида" },
            "answer4": { "result": false, "value": "Австралия" },
            "answer5": { "result": false, "value": "Южная Америка" }
        },
        {
            "question": "Пчёлы водятся на всех континентах, кроме одного",
            "answer1": { "result": false, "value": "Евразия" },
            "answer2": { "result": true, "value": "Антарктида" },
            "answer3": { "result": false, "value": "Африка" },
            "answer4": { "result": false, "value": "Австралия" },
            "answer5": { "result": false, "value": "Южная Америка" }
        },
        {
            "question": "Какое животное является самым высоким в мире?",
            "answer1": { "result": true, "value": "Жираф" },
            "answer2": { "result": false, "value": "Лев" },
            "answer3": { "result": false, "value": "Слон" },
            "answer4": { "result": false, "value": "Медведь" },
            "answer5": { "result": false, "value": "Ягуар" }
        },
    ]
`;
