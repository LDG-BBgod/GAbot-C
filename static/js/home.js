// alert('ver1')
const dragBox = document.getElementById('dragBox')

if (window.innerWidth < 600 ) {
    window.addEventListener('scroll', scrollToSide)
}
else {
    window.removeEventListener('scroll', scrollToSide)
    dragBox.style.marginLeft =  0 + 'px'
}
window.addEventListener('resize', function() {
    if (window.innerWidth < 600 ) {
        window.addEventListener('scroll', scrollToSide)
    }
    else {
        window.removeEventListener('scroll', scrollToSide)
        dragBox.style.marginLeft =  0 + 'px'
    }
})

function scrollToSide() {
    var currentScrollPos = (window.pageYOffset - 700) * 0.7
    if (currentScrollPos <= 0) {
        dragBox.style.marginLeft =  0 + 'px'
    }
    else if (currentScrollPos > 0 && currentScrollPos < 640){
        dragBox.style.marginLeft =  -currentScrollPos + 'px'
    }
    else{
        dragBox.style.marginLeft =  -640 + 'px'
    }
}



// 시간체크 1 //
// let loadTime
// window.addEventListener('pageshow',function(){
//     loadTime = new Date().getTime() / 1000
// })

// window.addEventListener("unload", function() {
//     const unloadTime = new Date().getTime() / 1000
//     let timeData = new FormData()
//     timeData.append('data', unloadTime - loadTime)
//     navigator.sendBeacon("gettime/", timeData)
// });

// 시간체크 2 //
// TimeMe.initialize({
//     currentPageName: "my-home-page", // current page
//     idleTimeoutInSeconds: 30 // seconds
// });

// window.onbeforeunload = function (event) {
//     xmlhttp=new XMLHttpRequest();
//     xmlhttp.open("POST","/xmldata/", true);
//     xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
//     xmlhttp.send(timeSpentOnPage);
// }

// 시간체크 3 //
// function getTimeFuntion(){
//     let firstCheck = 0

//     let dotTwoTime = setInterval(DotTwoTimeCheck, 200)
//     setTimeout( function() {
//         clearInterval(dotTwoTime)
//     }, 999)

//     let oneTime = setInterval(oneTimeCheck, 1000)
//     setTimeout( function() {
//         clearInterval(oneTime)
//         firstCheck = 0
//     }, 4999)

//     let fiveTime = setInterval(FiveTimeCheck, 5000)
//     setTimeout( function() {
//         clearInterval(fiveTime)
//         firstCheck = 0
//     }, 29999)

//     let halfMinTime = setInterval(HalfMinTimeCheck, 30000)


//     function DotTwoTimeCheck() {
//         $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': 0.2}})
//     }
//     function oneTimeCheck() {
//         let data
//         if (firstCheck == 0) {
//             data = 0.2
//             firstCheck += 1
//         }
//         else {
//             data = 1
//         }
//         $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data}})
//     }
//     function FiveTimeCheck() {
//         let data
//         if (firstCheck == 0) {
//             data = 1
//             firstCheck += 1
//         }
//         else {
//             data = 5
//         }
//         $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data}})
//     }
//     function HalfMinTimeCheck() {
//         let data
//         if (firstCheck == 0) {
//             data = 5
//             firstCheck += 1
//         }
//         else {
//             data = 30
//         }
//         $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data}})
//     }
//     // window.addEventListener('visibilitychange', function(){
//     //     clearIntervalFuntion()
//     // })
//     // window.addEventListener('mozvisibilitychange', function(){
//     //     clearIntervalFuntion()
//     // })
//     // window.addEventListener('msvisibilitychange', function(){
//     //     clearIntervalFuntion()
//     // })
//     // window.addEventListener('webkitvisibilitychange', function(){
//     //     clearIntervalFuntion()
//     // })
//     window.addEventListener('blur', function(){
//         clearIntervalFuntion()
//     })
//     function clearIntervalFuntion() {
//         clearInterval(dotTwoTime)
//         clearInterval(oneTime)
//         clearInterval(fiveTime)
//         clearInterval(halfMinTime)
//     }
// }
// window.addEventListener('focusin', getTimeFuntion)
// window.addEventListener('pageshow', getTimeFuntion)
// window.addEventListener('webkitvisibilitychange', function(){
//     $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': 0.05}})
// })

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
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': 0.2, 'dataType': 'homeStayTime'}})
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
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'homeStayTime'}})
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
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'homeStayTime'}})
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
        $.ajax({type: 'GET', url: '/gettime/', dataType: 'json', data: {'data': data, 'dataType': 'homeStayTime'}})
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


