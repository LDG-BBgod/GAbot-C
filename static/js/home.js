(function (window, document) {
    'user strict';

    const $dragBox = document.querySelector('#dragBox')
    const dragBox = document.getElementById('dragBox')
    let isMouseDown = false
    let positionX
    let imgPosition
    let marginL = 0

    window.addEventListener('resize', function() {
        if (window.innerWidth < 600 ) {
            $dragBox.addEventListener('mousemove', MouseDragEvent)
            $dragBox.addEventListener('mousedown', MouseDownEvent)
            $dragBox.addEventListener('mouseup', MouseUpEvent)
            $dragBox.addEventListener('mouseleave', MouseLeaveEvent)
    
            $dragBox.addEventListener('touchmove', TouchDragEvent)
            $dragBox.addEventListener('touchstart', TouchDownEvent)
            $dragBox.addEventListener('touchend', MouseUpEvent)
        }
        else {
            $dragBox.removeEventListener('mousemove', MouseDragEvent)
            $dragBox.removeEventListener('mousedown', MouseDownEvent)
            $dragBox.removeEventListener('mouseup', MouseUpEvent)
            $dragBox.removeEventListener('mouseleave', MouseLeaveEvent)
    
            $dragBox.removeEventListener('touchmove', TouchDragEvent)
            $dragBox.removeEventListener('touchstart', TouchDownEvent)
            $dragBox.removeEventListener('touchend', MouseUpEvent)
            dragBox.style.marginLeft = '0px'
        }
    });

    function MouseDownEvent(e) {
        isMouseDown = true
        positionX = e.clientX
        marginL = (dragBox.style.marginLeft).replace("px","")
    }
    function TouchDownEvent(e) {
        isMouseDown = true
        positionX = e.changedTouches[0].clientX
        marginL = (dragBox.style.marginLeft).replace("px","")
    }

    function MouseUpEvent(e) {
        isMouseDown = false
        if (imgPosition >= -(window.innerWidth/4) - 50) {
            imgPosition = 0
        }
        else if (imgPosition < -(window.innerWidth/4) - 50 && imgPosition >=  -((3*window.innerWidth)/4) - 150){
            imgPosition = -(window.innerWidth/2) - 100
        }
        else {
            imgPosition = -window.innerWidth - 200
        }
        dragBox.style.marginLeft = imgPosition + 'px'
        dragBox.style.transition = '0.5s'
    }
    function MouseLeaveEvent(e) {
        isMouseDown = false
        if (imgPosition >= -(window.innerWidth/4) - 50) {
            imgPosition = 0
        }
        else if (imgPosition < -(window.innerWidth/4) - 50 && imgPosition >=  -((3*window.innerWidth)/4) - 150){
            imgPosition = -(window.innerWidth/2) - 100
        }
        else {
            imgPosition = -window.innerWidth - 200
        }
        dragBox.style.marginLeft = imgPosition + 'px'
    }
    
    function MouseDragEvent(e) {
        if (isMouseDown == true){
            let mousePosition = (e.clientX - positionX)*1.4
            marginL *= 1
            imgPosition = mousePosition + marginL
            
            dragBox.style.marginLeft = imgPosition + 'px'
            dragBox.style.transition = '0s'
        }
    }
    function TouchDragEvent(e) {
        if (isMouseDown == true){
            let touchPosition = (e.changedTouches[0].clientX - positionX)*1.4
            marginL *= 1
            imgPosition = touchPosition + marginL
          
            dragBox.style.marginLeft = imgPosition + 'px'
            dragBox.style.transition = '0s'
        }
    }


    let loadTime
    window.addEventListener('pageshow',function(){
        loadTime = new Date().getTime() / 1000
    })

    window.addEventListener("unload", function() {
        const unloadTime = new Date().getTime() / 1000
        let timeData = new FormData()
        timeData.append('data', unloadTime - loadTime)
        navigator.sendBeacon("gettime/", timeData)
    });

})(window, document)

