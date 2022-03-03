from multiprocessing import context
from django.http import HttpResponse
from django.shortcuts import render
from .models import Home
from gauser.models import Compare

def HomeView(request):

    homeObjectCount = len(Compare.objects.all()) + 10000  #10000개 추가
    return render(request, 'home.html', {'count': homeObjectCount})

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
    if data == 'refreshCount':
        gaUser.refreshCount += 1
        gaUser.save()
    elif data == 'compareCount':
        gaUser.compareCount += 1
        gaUser.save()
    elif data == 'diagnosisCount':
        gaUser.diagnosisCount += 1
        gaUser.save()
    elif data == 'startCount':
        gaUser.startCount += 1
        gaUser.save()
    elif data == 'methodCount':
        gaUser.methodCount += 1
        gaUser.save()
    elif data == 'concernCount':
        gaUser.concernCount += 1
        gaUser.save()
    elif data == 'priceCount':
        gaUser.priceCount += 1
        gaUser.save()
    elif data == 'hospitalCount':
        gaUser.hospitalCount += 1
        gaUser.save()
    elif data == 'familyDiseaseCount':
        gaUser.familyDiseaseCount += 1
        gaUser.save()
    elif data == 'birthCount':
        gaUser.birthCount += 1
        gaUser.save()
    elif data == 'timer':
        print('test')
    else:
        print('JSON DATA 알수없는 값 받음')

    return HttpResponse()


def GetIPView(request):
    userIP = request.GET.get('data')

    try:
        userIP = Home.objects.get(userIP = userIP)
        request.session['user'] = userIP.userIP
    except Home.DoesNotExist:

        userIP = Home(userIP = userIP)
        userIP.save()
        request.session['user'] = userIP.userIP



    return HttpResponse()

def GetTimeView(request):
    stayTime = request.GET.get('data')
    userIP = request.session.get('user')
    gaUser = Home.objects.get(userIP=userIP)
    gaUser.stayTime = gaUser.stayTime + int(stayTime)
    gaUser.save()
    return HttpResponse()