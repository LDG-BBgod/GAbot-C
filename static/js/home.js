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



//시간체크//
let loadTime
window.addEventListener('pageshow',function(){
    loadTime = new Date().getTime() / 1000
})

window.addEventListener("beforeunload", function() {
    const unloadTime = new Date().getTime() / 1000
    let timeData = new FormData()
    timeData.append('data', unloadTime - loadTime)
    navigator.sendBeacon("gettime/", timeData)
});

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

