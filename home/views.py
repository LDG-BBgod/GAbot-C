from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.utils.dateformat import DateFormat
from .models import Home, UserCount
from gauser.models import Compare
from datetime import datetime

from django.views.decorators.csrf import csrf_exempt

def HomeView(request):

    userCount = UserCount.objects.last()
    userCount.userCount += 1
    userCount.save()

    def get_client_ip(request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    try:
        userIP = Home.objects.get(userIP = get_client_ip(request))
        request.session['user'] = userIP.userIP

        refreshCount = Home.objects.last()
        refreshCount.refreshCount += 1
        refreshCount.save()

    except Home.DoesNotExist:
        registerDate = DateFormat(datetime.now()).format('20y.m.d / h:i a')
        userIP = Home(userIP = get_client_ip(request))
        userIP.registerDate = registerDate
        userIP.refreshCount = 1
        userIP.save()
        request.session['user'] = userIP.userIP

    homeObjectCount = len(Compare.objects.all()) + 10000  #10000개 추가
    return render(request, 'home.html', {'count': homeObjectCount})

def SelectView(request):

    def get_client_ip(request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    try:
        userIP = Home.objects.get(userIP = get_client_ip(request))
        
    except Home.DoesNotExist:
        registerDate = DateFormat(datetime.now()).format('20y.m.d / h:i a')
        userIP = Home(userIP = get_client_ip(request))
        userIP.registerDate = registerDate
        userIP.refreshCount = 1
        userIP.save()
        request.session['user'] = userIP.userIP

    return render(request, 'select.html')

def AgreementView(request):
    
    return render(request, 'agreement.html')

def ServiceView(request):
    
    return render(request, 'service.html')

def CompanyView(request):
    
    return render(request, 'company.html')

def JsonDataView(request):
    data = request.GET.get('data')
    userIP = request.session.get('user')
    gaUser = Home.objects.get(userIP=userIP)
    if data == 'manageCount':
        gaUser.manageCount += 1
        gaUser.save()
    elif data == 'compareCount':
        gaUser.compareCount += 1
        gaUser.save()
    elif data == 'diagnosisCount':
        gaUser.diagnosisCount += 1
        gaUser.save()
    elif data == 'consultingCount':
        gaUser.consultingCount += 1
        gaUser.save()
    else:
        print('JSON DATA 알수없는 값 받음')

    return HttpResponse()

    
@csrf_exempt
def GetTimeView(request):
    dataType = request.GET.get('dataType')
    stayTime = request.GET.get('data')
    print(stayTime)
    userIP = request.session.get('user')
    gaUser = Home.objects.get(userIP=userIP) 

    if dataType == 'homeStayTime':
        gaUser.homeStayTime = gaUser.homeStayTime + float(stayTime)
        gaUser.save()
    elif dataType == 'selectStayTime':
        gaUser.selectStayTime = gaUser.selectStayTime + float(stayTime)
        gaUser.save()
    elif dataType == 'compareStayTime':
        gaUser.compareStayTime = gaUser.compareStayTime + float(stayTime)
        gaUser.save()
    elif dataType == 'consultingStayTime':
        gaUser.consultingStayTime = gaUser.consultingStayTime + float(stayTime)
        gaUser.save()
    elif dataType == 'diagnosisStayTime':
        gaUser.diagnosisStayTime = gaUser.diagnosisStayTime + float(stayTime)
        gaUser.save()
    else:
        print('JSON DATA 알수없는 값 받음')
    
    return HttpResponse()