function counter(n) {
    let intervalId = setInterval(() => {
        console.log(n);
        n--;
        if (n < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

function createCounter(n) {
    let current = n;
    let intervalId = null;

    return {
        start: function() {
            if (intervalId) {
                return;
            }
            intervalId = setInterval(() => {
                console.log(current);
                current--;
                if (current < 0) {
                    this.stop();
                }
            }, 1000);
        },
        pause: function() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        },
        stop: function() {
            this.pause();
            current = n;
        }
    };
}

let c = createCounter(10);
c.start(); // начинает отсчет
c.pause(); // приостанавливает отсчет
c.start(); // возобновляет отсчет
c.stop(); // останавливает и сбрасывает отсчет