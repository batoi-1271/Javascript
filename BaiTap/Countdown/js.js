window.addEventListener('load', function (e) {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    // $('.days')
    // $('.hours')
    // $('.minutes')
    // $('.seconds')

    function countDown(date) {
        // getTime trả về số mili giây bắt đầu từ 1/1/1970 00:00:00. -> endate
        const endDate = new Date(date).getTime();

        let currentDate = new Date().getTime();
        if (isNaN(endDate) || endDate - currentDate <= 0) return;

        setInterval(calculate, 1000);

        function calculate() {
            let days, hours, minutes, seconds;

            const now = new Date();
            // Convert to timestamp
            const startDate = now.getTime();

            // time remaining calculate to seconds 
            let timeRemaining = parseInt((endDate - startDate) / 1000);
            if (timeRemaining > 0) {
                // 1 ngay = 24 * 60 * 60 = 86400
                days = parseInt(timeRemaining / 86400)
                timeRemaining = timeRemaining % 86400;
                $('.days').textContent = `0${days}`.slice(-2);

                // 1 gio = 60 * 60 = 3600
                hours = parseInt(timeRemaining / 3600)
                timeRemaining = timeRemaining % 3600;
                $('.hours').textContent = `0${hours}`.slice(-2);

                // 1 phut = 60
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = timeRemaining % 60;
                $('.minutes').textContent = `0${minutes}`.slice(-2);

                // 1s = 1s
                seconds = parseInt(timeRemaining / 1);
                $('.seconds').textContent = `0${seconds}`.slice(-2);
            } else {
                return;
            }
        }
    }
    countDown('Sat Aug 23 2022 21:46:28 GMT+0700 (Indochina Time)')
})