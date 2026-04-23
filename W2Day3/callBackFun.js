// use callbacks to handle asynchronous tasks in JavaScript. 

let browser = "Chrome";

// Function with callback
function checkBrowserVersion(callBack){
    setTimeout(() => {
        // after 2 seconds, call the callback and pass browser
        callBack(browser);
    }, 2000 );
}

// Callback function
function browserVersion(version){
    console.log("Browser version is:", version);
}

// Call function and pass callback
checkBrowserVersion(browserVersion);