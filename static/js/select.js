if (typeof document.hidden !== "undefined") {
    visibilityChangeEventName = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
    visibilityChangeEventName = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    visibilityChangeEventName = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    visibilityChangeEventName = "webkitvisibilitychange";
}

let dotTwoTime
let oneTime
let fiveTime
let halfMinTime
let runningCheck = true

function getTimeFuntion(){

    let oneTimeFirstCheck = 0
    let fiveTimeFirstCheck = 0
    let halfMinTimeFirstCheck = 0

    dotTwoTime = setInterval(() => {
        DotTwoTimeCheck()
    }, 200)
    oneTime = setInterval(() => {
        oneTimeCheck()
        clearInterval(dotTwoTime)
    }, 1000)
    fiveTime = setInterval(() => {
        FiveTimeCheck()
        clearInterval(oneTime)
    }, 5000)
    halfMinTime = setInterval(() => {
        HalfMinTimeCheck()
        clearInterval(fiveTime)
    }, 30000)


    function DotTwoTimeCheck() {
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': 0.2, 'dataType': 'selectStayTime'}})
    }
    function oneTimeCheck() {
        let data
        if (oneTimeFirstCheck == 0) {
            data = 0
            oneTimeFirstCheck += 1
        }
        else {
            data = 1
        }
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'selectStayTime'}})
    }
    function FiveTimeCheck() {
        let data
        if (fiveTimeFirstCheck == 0) {
            data = 0
            fiveTimeFirstCheck += 1
        }
        else {
            data = 5
        }
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'selectStayTime'}})
    }
    function HalfMinTimeCheck() {
        let data
        if (halfMinTimeFirstCheck == 0) {
            data = 0
            halfMinTimeFirstCheck += 1
        }
        else {
            data = 30
        }
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'selectStayTime'}})
    }    
}
window.addEventListener('pageshow', () => {
    if (runningCheck == true) {
        runningCheck = false
        getTimeFuntion()
    }
    else return    
})
window.addEventListener(visibilityChangeEventName, () => {
    if (runningCheck == true) {
        runningCheck = false
        getTimeFuntion()
    }
    if (document.hidden) {
        clearInterval(dotTwoTime)
        clearInterval(oneTime)
        clearInterval(fiveTime)
        clearInterval(halfMinTime)
        runningCheck = true
    }
    else return   
}, false)
