window.addEventListener('load',function(){
    let nowDate = new Date()
    let step = 0

    while (step < 7) {
        if (nowDate.getDay() == 0 || nowDate.getDay() == 6){
            nowDate = new Date(nowDate.setDate(nowDate.getDate() + 1))
        }
        else {
            let Y = nowDate.getFullYear()
            let M = nowDate.getMonth() + 1
            let D = nowDate.getDate()
            if (M < 10) M = '0' + M
            if (D < 10) D = '0' + D
            document.getElementsByClassName(`dateSelectList${step}`)[0].innerHTML = `${Y} - ${M} - ${D}`
            nowDate = new Date(nowDate.setDate(nowDate.getDate() + 1))
            step++
        }
    }
})

function nextButton(data) {
    var modelArr = ['section-start', 'section-information']

    if (data == '1' && document.getElementsByClassName("section-input-phone")[0].value == '') {
        document.getElementsByClassName("error-information")[0].innerHTML = "연락처를 입력해 주세요"
    }
    else if (data == '1' && document.getElementsByClassName("section-input-consultingDate")[0].innerHTML == '날짜 선택') {
        document.getElementsByClassName("error-information")[0].innerHTML = "날짜를 선택해주세요"
    }
    else if (data == '1' && document.getElementsByClassName("section-input-consultingTime")[0].innerHTML == '시간 선택') {
        document.getElementsByClassName("error-information")[0].innerHTML = "시간을 선택해주세요"
    }
    else if (data == '1' && !$('input[name="section-input-agreement"]').is(":checked")) {
        document.getElementsByClassName("error-information")[0].innerHTML = "개인정보 처리방침 동의를 체크해주세요"
    }
    else if (data == 1) { 
        var textModelArr = ['phone']
        var selectModelArr = ['consultingDate', 'consultingTime']

        function textData(model) {
            var Data = document.getElementsByName(`section-input-${model}`)[0].value
            if (Data == '') Data = 'empty'
            document.getElementById(`form_id_${model}`).value = Data
        }

        function selectData(model) {
            var Data = document.getElementsByClassName(`section-input-${model}`)[0].innerHTML
            document.getElementById(`form_id_${model}`).value = Data
        }

        for (i = 0; i < textModelArr.length; i++) textData(textModelArr[i])
        for (i = 0; i < selectModelArr.length; i++) selectData(selectModelArr[i])

        var form = document.form
        Swal.fire({
            title: '상담 예약이 완료되었습니다',
            text: '예약하신 시간에 상담전화가 갑니다',
            incon: 'success',
            confirmButtonColor: '#F1D000',
            confirmButtonText: '확인'
        }).then((result) => {
            if (result.value) {
                form.submit()
            }
        })
    }
    else {
        document.getElementsByClassName(modelArr[data])[0].style.display = "none"
        document.getElementsByClassName(modelArr[data+1])[0].style.display = "block"
        document.getElementsByClassName("error-information")[0].innerHTML = ""
    }   
}

function prevButton(data) {
    var modelArr = ['section-start', 'section-information']
    document.getElementsByClassName(modelArr[data])[0].style.display = "none"
    document.getElementsByClassName(modelArr[data-1])[0].style.display = "block"
}


const sectionArea = document.querySelector('.section')
const dateToggleArea = document.querySelector('.dateSelectBox')
const dateSelectList = $('.dateSelectList')
let dateIsMouseMove = true
let dateIsMouseDown = false
let dateStartPosition, scrollTop
let dateSelectValue = ''

const timeToggleArea = document.querySelector('.timeSelectBox')
const timeSelectList = $('.timeSelectList')
let timeIsMouseMove = true
let timeIsMouseDown = false
let timeStartPosition
let timeSelectValue = ''

sectionArea.addEventListener('mousedown', function(e){
    if (e.target.classList[0] != 'dateSelectList' && e.target.classList[0] != 'timeSelectList'){
        dateToggleArea.classList.remove('on')
        timeToggleArea.classList.remove('on')
    }
})

dateToggleArea.addEventListener('mousedown',function(e){
    dateIsMouseMove = false
    dateIsMouseDown = true

    dateStartPosition = e.pageY - dateToggleArea.offsetTop
    scrollTop = dateToggleArea.scrollTop

})
dateToggleArea.addEventListener('mouseleave',function(){
    dateIsMouseDown = false
})
dateToggleArea.addEventListener('mouseup',function(e){
    if (dateToggleArea.classList[1] != 'on') {
        dateToggleArea.classList.add('on')
        if(timeToggleArea.classList[1] == 'on') timeToggleArea.classList.remove('on')
    }
    else if (!dateIsMouseMove) {
        dateToggleArea.classList.remove('on')
        dateSelectValue = e.target.textContent 
        document.getElementsByClassName('dateArea1')[0].innerHTML = dateSelectValue
    }
    dateIsMouseMove = false
    dateIsMouseDown = false
})    
dateToggleArea.addEventListener('mousemove',function(e){
    dateIsMouseMove = true
    if (!dateIsMouseDown) return

    e.preventDefault()
    const Y = e.pageY - dateToggleArea.offsetTop
    const walk = (Y - dateStartPosition) * 1
    dateToggleArea.scrollTop = scrollTop - walk

})

timeToggleArea.addEventListener('mousedown',function(e){
    timeIsMouseMove = false
    timeIsMouseDown = true

    timeStartPosition = e.pageY - timeToggleArea.offsetTop
    scrollTop = timeToggleArea.scrollTop

})
timeToggleArea.addEventListener('mouseleave',function(){
    timeIsMouseDown = false
})
timeToggleArea.addEventListener('mouseup',function(e){
    if (timeToggleArea.classList[1] != 'on') {
        timeToggleArea.classList.add('on')
        if(dateToggleArea.classList[1] == 'on') dateToggleArea.classList.remove('on')
    }
    else if (!timeIsMouseMove) {
        timeToggleArea.classList.remove('on')
        timeSelectValue = e.target.textContent 
        document.getElementsByClassName('timeArea1')[0].innerHTML = timeSelectValue
    }
    timeIsMouseMove = false
    timeIsMouseDown = false
})    
timeToggleArea.addEventListener('mousemove',function(e){
    timeIsMouseMove = true
    if (!timeIsMouseDown) return

    e.preventDefault()
    const Y = e.pageY - timeToggleArea.offsetTop
    const walk = (Y - timeStartPosition) * 1
    timeToggleArea.scrollTop = scrollTop - walk
})