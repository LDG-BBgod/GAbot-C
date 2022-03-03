function CountButton(data) {
    $.ajax({type: 'GET', url: '/jsondata/', dataType: 'json', data: {'data': data}})
}
