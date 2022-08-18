function wait(timer = 0) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, timer);
    })
}



async function run() {
    console.log("Starting...");
    await wait(2000)
    console.log("Ending...");
}
// run();

const run1 = async () => {
};
const student = {
    fullname: async function () { },
    async calcAge() { },
    yearly: async () => { },
}

function makeTimer(timer = 1000, str) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(str);
        }, timer);
    });
}

async function allTimer() {
    const timer1 = makeTimer(1000, "first time");
    const timer2 = makeTimer(2000, "second time");

    const timers = await Promise.all([timer1, timer2]);
    console.log(timers)
    // const timer3 = makeTimer(3000, "third time");
}

// allTimer();

function isFrontendDev(languages) {
    return new Promise(function (resolve, reject) {
        if (!languages.includes("html")) {
            reject("You are not Frontend developer");
        }
        setTimeout(() => {
            resolve("You are frontend developer");
        }, 1000);
    });
}

async function go() {
    try {
        const dev1 = await isFrontendDev(['css'])
        console.log(dev1);
    } catch (err) {
        console.log(err)
    }
}
go()