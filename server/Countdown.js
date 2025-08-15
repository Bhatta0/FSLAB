console.log("Countdown starts:");

for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
        console.log(i);
    }, (5 - i) * 1000); // execute every 1 second
}

// Another asynchronous timeout after 1 second
setTimeout(() => {
    console.log("This message executes after 1 second");
}, 1000);
