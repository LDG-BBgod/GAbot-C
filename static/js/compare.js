// prev, next버튼 //
function nextButton() {
    var modelArr = ['section-start', 'section-method', 'section-concern', 'section-price', 'section-hospital', 'section-familyDisease', 'section-birth']
    document.getElementsByClassName("error-method")[0].innerHTML = ""
    document.getElementsByClassName("error-concern")[0].innerHTML = ""
    document.getElementsByClassName("error-hospital")[0].innerHTML = ""
    document.getElementsByClassName("error-familyDisease")[0].innerHTML = ""
    document.getElementsByClassName("error-birth")[0].innerHTML = ""

    if (!$('input[name="section-input-method"]').is(":checked")) {
        document.getElementsByClassName("error-method")[0].innerHTML = "비교견적 받을 수단을 선택해 주세요"
        $('html, body').animate({scrollTop : $(".section-method").offset().top}, 300);

    }
    else if (document.getElementsByClassName("section-input-contact")[0].value == '') {
        if($('input[name="section-input-method"]:checked').val() == '메일') {
            document.getElementsByClassName("error-method")[0].innerHTML = "메일을 입력해주세요"
        }
        else if($('input[name="section-input-method"]:checked').val() == '카톡') {
            document.getElementsByClassName("error-method")[0].innerHTML = "카카오톡 아이디 혹은 전화번호를 입력해주세요"
        }
        else {
            document.getElementsByClassName("error-method")[0].innerHTML = "전화번호를 입력해주세요"
        }
        $('html, body').animate({scrollTop : $(".section-method").offset().top}, 300);
    }

    else if (!$('input[name="section-input-concern"]').is(":checked")) {
        document.getElementsByClassName("error-concern")[0].innerHTML = "관심보험을 선택해 주세요"
        $('html, body').animate({scrollTop : $(".section-concern").offset().top}, 300);
    }

    else if (!$('input[name="section-input-hospital"]').is(":checked")) {
        document.getElementsByClassName("error-hospital")[0].innerHTML = "병력이력을 선택해주세요"
        $('html, body').animate({scrollTop : $(".section-hospital").offset().top}, 300);
    }
    else if ($('input[name="section-input-hospital"]:checked').val() == '있어요' && !$('input[name="section-input-hospitalTreatment"]').is(":checked")){
        document.getElementsByClassName("error-hospital")[0].innerHTML = "의료행위를 선택해주세요"
        $('html, body').animate({scrollTop : $(".section-hospital").offset().top}, 300);
    }
    else if ($('input[name="section-input-hospital"]:checked').val() == '있어요' && document.getElementsByClassName("section-input-hospitalDisease")[0].value == ''){
        document.getElementsByClassName("error-hospital")[0].innerHTML = "증상이나 병명을 입력해 주세요"
        $('html, body').animate({scrollTop : $(".section-hospital").offset().top}, 300);
    }

    else if (!$('input[name="section-input-familyDisease"]').is(":checked")) {
        document.getElementsByClassName("error-familyDisease")[0].innerHTML = "가족력을 선택해 주세요"
        $('html, body').animate({scrollTop : $(".section-familyDisease").offset().top}, 300);
    }
    else if ($('input[name="section-input-familyDisease"][id="기타"]').is(":checked") && document.getElementsByClassName("section-input-familyDiseaseEtc")[0].value == '') {
        document.getElementsByClassName("error-familyDisease")[0].innerHTML = "내용을 입력해주세요"
        $('html, body').animate({scrollTop : $(".section-familyDisease").offset().top}, 300);
    }

    else if (document.getElementsByClassName("section-input-birth")[0].value == '') {
        document.getElementsByClassName("error-birth")[0].innerHTML = "생년월일을 입력해주세요"
        $('html, body').animate({scrollTop : $(".section-birth").offset().top}, 300);
    }
    else if (!$('input[name="section-input-gender"]').is(":checked")) {
        document.getElementsByClassName("error-birth")[0].innerHTML = "성별을 선택해 주세요"
        $('html, body').animate({scrollTop : $(".section-birth").offset().top}, 300);
    }
    else if (document.getElementsByClassName("section-input-job")[0].value == '') {
        document.getElementsByClassName("error-birth")[0].innerHTML = "직업을 입력해주세요"
        $('html, body').animate({scrollTop : $(".section-birth").offset().top}, 300);
    }
    else if (document.getElementsByClassName("section-input-region")[0].innerHTML == '지역을 선택해주세요') {
        document.getElementsByClassName("error-birth")[0].innerHTML = "지역을 선택해 주세요"
        $('html, body').animate({scrollTop : $(".section-birth").offset().top}, 300);
    }
    else if (!$('input[name="section-input-agreement"]').is(":checked")) {
        document.getElementsByClassName("error-birth")[0].innerHTML = "개인정보 처리방침 동의를 체크해주세요"
        $('html, body').animate({scrollTop : $(".section-birth").offset().top}, 300);
    }

    else { 
        var radioModelArr = ['method', 'hospital', 'gender']
        var textModelArr = ['contact', 'price', 'hospitalDisease', 'disease', 'familyDiseaseEtc', 'birth', 'job']
        var checkboxModelArr = ['concern', 'hospitalTreatment', 'familyDisease']  
        var selectModelArr = ['region']

        function radioData(model) {
            var Data = document.querySelector(`input[name="section-input-${model}"]:checked`).value
            $('#form_' + Data).prop("checked", true)
        }
        function textData(model) {
            var Data = document.getElementsByName(`section-input-${model}`)[0].value
            if (Data == '') Data = 'empty'
            document.getElementById(`form_id_${model}`).value = Data
        }
        function checkboxData(model) {
            var Data = []
            if ($(`input[name="section-input-${model}"]`).is(":checked")) {
                $(`input[name=section-input-${model}]:checked`).each(function(){
                    var chk = $(this).val()
                    Data.push(chk)
                })
                $(`input[name=${model}]`).each(function(){
                    var inputID = $(this).attr('id').replace('form_','')
                    if (Data.indexOf(inputID) >= 0) {
                        $(this).prop("checked", true)
                    }            
                })
            }            
        }
        function selectData(model) {
            var Data = document.getElementsByClassName(`section-input-${model}`)[0].innerHTML
            document.getElementById(`form_id_${model}`).value = Data
        }

        for (i = 0; i < radioModelArr.length; i++) radioData(radioModelArr[i])
        for (i = 0; i < textModelArr.length; i++) textData(textModelArr[i])
        for (i = 0; i < checkboxModelArr.length; i++) checkboxData(checkboxModelArr[i])
        for (i = 0; i < selectModelArr.length; i++) selectData(selectModelArr[i])

        var form = document.form
        form.submit()
    }

}

// 라디오버튼 //
function radioHospital() {
    if($('input[name="section-input-hospital"]:checked').val() == '있어요') {
        document.getElementsByClassName('section-hospital-toggle')[0].style.display = "block"
    }
    else {
        document.getElementsByClassName('section-hospital-toggle')[0].style.display = "none"
    }
}
function radioFamilyDisease() {
    if($('#기타').is(':checked')){
        document.getElementsByClassName('section-familyDisease-toggle')[0].style.display = "inline"
    }
    else{
        document.getElementsByClassName('section-familyDisease-toggle')[0].style.display = "none"
    }
}

function radioMethod() {
    if($('input[name="section-input-method"]:checked').val() == '메일') {
        document.getElementsByClassName("section-input-contact")[0].placeholder = "메일을 입력해 주세요 예) ldg0527@gmail.com"
    }
    else if($('input[name="section-input-method"]:checked').val() == '카톡') {
        document.getElementsByClassName("section-input-contact")[0].placeholder = "카카오톡 아이디 혹은 전화번호를 입력해주세요"
    }
    else {
        document.getElementsByClassName("section-input-contact")[0].placeholder = "전화번호를 입력해주세요"
    }  
}

// 슬라이드바 //
const sliderInputLeft = document.getElementById('slider-input-left')
const sliderInputRight = document.getElementById('slider-input-right')
const thumbLeft = document.querySelector('.slider > .thumb-left')
const thumbRight = document.querySelector('.slider > .thumb-right')
const sliderRange = document.querySelector('.slider > .range')

const sliderInputTextLeft = document.getElementById('input-price-text-left')
const sliderInputTextRight = document.getElementById('input-price-text-right')

$( "#amount" ).val(parseInt(sliderInputLeft.value).toLocaleString('ko-KR') + "원 - " +  parseInt(sliderInputRight.value).toLocaleString('ko-KR') + "원");
sliderRange.style.left = sliderInputLeft.value/(parseInt(sliderInputLeft.max)-parseInt(sliderInputLeft.min))*100 + '%'
sliderRange.style.right = 100-(sliderInputRight.value/(parseInt(sliderInputLeft.max)-parseInt(sliderInputLeft.min)))*100 + '%'
thumbLeft.style.left = sliderInputLeft.value/(parseInt(sliderInputLeft.max)-parseInt(sliderInputLeft.min))*100 + '%'
thumbRight.style.right = 100-(sliderInputRight.value/(parseInt(sliderInputLeft.max)-parseInt(sliderInputLeft.min)))*100 + '%'

function sliderSetLeftValue(type) {
    const _this = sliderInputLeft
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)]

    _this.value = Math.min(parseInt(_this.value), parseInt(sliderInputRight.value))

    const percent = ((_this.value - min)/(max - min)*100)
    if (percent > 50) {
        document.getElementById('slider-input-left').style.zIndex = '3'
        document.getElementById('slider-input-right').style.zIndex = '2'
    }
    else {
        document.getElementById('slider-input-left').style.zIndex = '2'
        document.getElementById('slider-input-right').style.zIndex = '3'
    }
    thumbLeft.style.left = percent + '%'
    sliderRange.style.left = percent + '%'
    if (type == 'slide'){
        const minPrice = Math.ceil(_this.value/1000)*1000
        const maxPrice = Math.ceil(sliderInputRight.value/1000)*1000
        
        _this.value = minPrice
        $( "#amount" ).val(parseInt(minPrice).toLocaleString('ko-KR') + "원 - " +  parseInt(maxPrice).toLocaleString('ko-KR') + "원");
        sliderInputTextLeft.value = minPrice
        updateTextView($('#input-price-text-left'));
    }
    else {
        const minPrice = Math.min(parseInt(_this.value), Math.ceil(parseInt(sliderInputRight.value)/1000)*1000)
        const maxPrice = Math.ceil(sliderInputRight.value/1000)*1000
        $( "#amount" ).val(parseInt(minPrice).toLocaleString('ko-KR') + "원 - " +  parseInt(maxPrice).toLocaleString('ko-KR') + "원");
        return minPrice
    }
}
function sliderSetRightValue(type) {
    const _this = sliderInputRight
    const [min, max] = [parseInt(_this.min), parseInt(_this.max)]

    _this.value = Math.max(parseInt(_this.value), parseInt(sliderInputLeft.value))

    const percent = ((_this.value - min)/(max - min)*100)
    thumbRight.style.right = 100 - percent + '%'
    sliderRange.style.right = 100 - percent + '%'
    if (type == 'slide'){
        const minPrice = Math.ceil(sliderInputLeft.value/1000)*1000
        const maxPrice = Math.ceil(_this.value/1000)*1000
        
        _this.value = maxPrice
        $( "#amount" ).val(parseInt(minPrice).toLocaleString('ko-KR') + "원 - " +  parseInt(maxPrice).toLocaleString('ko-KR') + "원")
        sliderInputTextRight.value = maxPrice
        updateTextView($('#input-price-text-right'));
    }
    else{
        const minPrice = Math.ceil(sliderInputLeft.value/1000)*1000
        const maxPrice = Math.max(parseInt(_this.value), Math.ceil(parseInt(sliderInputLeft.value)/1000)*1000)
        $( "#amount" ).val(parseInt(minPrice).toLocaleString('ko-KR') + "원 - " +  parseInt(maxPrice).toLocaleString('ko-KR') + "원");
        return maxPrice
    }
}
function sliderSetByTextLeft() {
    const price = sliderInputTextLeft.value.replace(/,/g, "");
    sliderInputLeft.value = price
    sliderSetLeftValue('text')
}
function sliderSetByTextRight() {
    const price = sliderInputTextRight.value.replace(/,/g, "");
    sliderInputRight.value = price
    sliderSetRightValue('text')
}

sliderInputLeft.addEventListener('input', function(){
    sliderSetLeftValue('slide')
})
sliderInputRight.addEventListener('input', function(){
    sliderSetRightValue('slide')
})
sliderInputTextLeft.addEventListener('input', sliderSetByTextLeft)
sliderInputTextRight.addEventListener('input', sliderSetByTextRight)
$('#input-price-text-left').focusout(function(){
    sliderInputTextLeft.value = sliderSetLeftValue('text')
    updateTextView($(this));
})
$('#input-price-text-right').focusout(function(){
    sliderInputTextRight.value = sliderSetRightValue('text')
    updateTextView($(this));
})

function updateTextView(_obj){
    var num = getNumber(_obj.val())
    if(num==0){
        _obj.val('0')
    }
    else{
      _obj.val(num.toLocaleString())
    }
}
function getNumber(_str){
    var arr = _str.split('')
    var out = new Array()
    for(var cnt=0;cnt<arr.length;cnt++){
        if(isNaN(arr[cnt])==false){
            out.push(arr[cnt])
        }
    }
    return Number(out.join(''))
}
$('#input-price-text-left').on('keyup',function(){
    updateTextView($(this));
});
$('#input-price-text-right').on('keyup',function(){
    updateTextView($(this));
});

// selectBox //
const sectionArea = document.querySelector('.section')
const toggleArea = document.querySelector('.selectBox')
const selectList = $('.selectList')

let isMouseMove = true
let isMouseDown = false
let startPosition, scrollTop
let selectValue = ''

sectionArea.addEventListener('mousedown', function(e){
    if (e.target.classList[0] != 'selectList'){
        toggleArea.classList.remove('on')
    }    
})
toggleArea.addEventListener('mousedown',function(e){
    isMouseMove = false
    isMouseDown = true

    startPosition = e.pageY - toggleArea.offsetTop
    scrollTop = toggleArea.scrollTop

})
toggleArea.addEventListener('mouseleave',function(){
    isMouseDown = false
})
toggleArea.addEventListener('mouseup',function(e){
    if (toggleArea.classList[1] != 'on') {
        toggleArea.classList.add('on')
    }
    else if (!isMouseMove) {
        toggleArea.classList.remove('on')
        selectValue = e.target.textContent 
        document.getElementsByClassName('area1')[0].innerHTML = selectValue
    }

    isMouseMove = false
    isMouseDown = false
})
toggleArea.addEventListener('mousemove',function(e){
    isMouseMove = true
    if (!isMouseDown) return

    e.preventDefault()
    const Y = e.pageY - toggleArea.offsetTop
    const walk = (Y - startPosition) * 1
    toggleArea.scrollTop = scrollTop - walk

})
