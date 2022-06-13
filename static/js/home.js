(function (window, document) {
    'user strict';

    // window.addEventListener('load', async function(){
    //     try {
    //         const response = await axios.get('https://api.ipify.org?format=json');
    //         $.ajax({type: 'GET', url: 'getip/', dataType: 'json', data: {'data': response.data.ip}})

    //     } catch (error) {
    //         // location.reload()
    //         $.ajax({type: 'GET', url: 'getip/', dataType: 'json', data: {'data': 'error'}})

    //     }        
    // })
    

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-button');

    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 820) {
            offElments();
            
        }
    });
    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }
    function offElments() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }

    let loadTime
    window.addEventListener('pageshow',function(){
        loadTime = new Date().getTime() / 1000
    })
    // window.addEventListener('beforeunload', function(){
    //     const unloadTime = new Date().getTime() / 1000
    //     $.ajax({type: 'GET', url: 'gettime/', dataType: 'json', data: {'data': unloadTime - loadTime}})
    // })

    window.addEventListener("unload", function() {
        const unloadTime = new Date().getTime() / 1000
        let timeData = new FormData()
        timeData.append('data', unloadTime - loadTime)
        navigator.sendBeacon("gettime/", timeData)
    });

})(window, document)

