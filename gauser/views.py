from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.shortcuts import redirect, render
from django.utils.decorators import method_decorator
from .decorators import session_required
from .forms import CompareForm, MyinsuranceForm, ConsultingForm
from .models import Consulting
from home.models import Home
from django.utils.dateformat import DateFormat
from datetime import datetime
from django.http import HttpResponse
from django.core import serializers

import hashlib, hmac, base64, time
import requests




class CompareView(FormView):
    template_name = 'compare.html'
    form_class = CompareForm
    success_url = 'submit/'

    def get_form_kwargs(self, **kwargs):
        kw = super().get_form_kwargs(**kwargs)
        kw.update({
            'request': self.request
        })

        return kw

    def get_context_data(self, **kwargs):
    
        def get_client_ip(request):
            x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
            if x_forwarded_for:
                ip = x_forwarded_for.split(',')[0]
            else:
                ip = request.META.get('REMOTE_ADDR')
            return ip
        try:
            userIP = Home.objects.get(userIP = get_client_ip(self.request))
            
        except Home.DoesNotExist:
            registerDate = DateFormat(datetime.now()).format('20y.m.d / h:i a')
            userIP = Home(userIP = get_client_ip(self.request))
            userIP.registerDate = registerDate
            userIP.manageCount = 1
            userIP.compareCount = 1
            userIP.save()
            self.request.session['user'] = userIP.userIP

        return super().get_context_data(**kwargs)

def CompareEndVIew(request):
    userIP = request.session.get('user')
    gaUser = Home.objects.get(userIP=userIP)
    gaUser.compareSubmitCount += 1
    gaUser.save()

    return render(request, 'comparesubmit.html')
    
@method_decorator(session_required, name='dispatch')
class ConsultingView(FormView):
    template_name = 'consulting.html'
    form_class = ConsultingForm
    success_url = '/'

    def get_form_kwargs(self, **kwargs):
        kw = super().get_form_kwargs(**kwargs)
        kw.update({
            'request': self.request
        })
        return kw

def SendMessageView(request):
    dataType = request.GET.get('dataType')
    if dataType == 'consulting':
        selectType = request.GET.get('selectType')
        phone = request.GET.get('phone')
        consultingDate = request.GET.get('consultingDate')
        consultingTime = request.GET.get('consultingTime')
        content = '상담수단 : ' + selectType + '\n연락처 : ' + phone + '\n상담 시간 : ' + consultingDate + ' ' +  consultingTime

    elif dataType == 'compare':
        content = '비교견적 서비스 신청'

    
    
    def getSigningKey():

        timestamp = str(int(time.time() * 1000))

        access_key = "Lyf4UlLYnAqvptuxG9Oq"
        secret_key = "O8DxN19g9zaRZ335Wgx5FCzQfXPIbZfkLR5dng4C"
        secret_key = bytes(secret_key, 'UTF-8')

        method = "POST"
        
        uri = "/sms/v2/services/ncp:sms:kr:289661419957:gabot/messages"

        message = method + " " + uri + "\n" + timestamp + "\n" + access_key
        message = bytes(message, 'UTF-8')
        signingKey = base64.b64encode(hmac.new(secret_key, message, digestmod=hashlib.sha256).digest())
        return signingKey
 

    headers = {
        "Contenc-type": "application/json; charset=utf-8",
        "x-ncp-apigw-timestamp": str(int(time.time() * 1000)),
        "x-ncp-iam-access-key": 'Lyf4UlLYnAqvptuxG9Oq',
        "x-ncp-apigw-signature-v2": getSigningKey(),
        }
    body = {
        'type': 'SMS',
        'contentType': 'COMM',
        'countryCode': '82',
        'from': '01054088229',
        'content': content,
        'messages': [{
            'to': '01050487229',
        }],
    }
    res = requests.post('https://sens.apigw.ntruss.com/sms/v2/services/ncp:sms:kr:289661419957:gabot/messages', json=body, headers=headers)
    print(res.json())

    return HttpResponse()

@method_decorator(session_required, name='dispatch')
class MyinsuranceView(FormView):
    template_name = 'myinsurance.html'
    form_class = MyinsuranceForm
    success_url = '/'

    def get_form_kwargs(self, **kwargs):
        kw = super().get_form_kwargs(**kwargs)
        kw.update({
            'request': self.request
        })
        return kw

@method_decorator(session_required, name='dispatch')
class MyinsuranceDirectView(FormView):
    template_name = 'myinsurancedirect.html'
    form_class = MyinsuranceForm
    success_url = '/'

    def get_form_kwargs(self, **kwargs):
        kw = super().get_form_kwargs(**kwargs)
        kw.update({
            'request': self.request
        })
        return kw 


def ConsultingDataView(request):
    data = request.GET.get('data')
    consultingObject = Consulting.objects.filter(consultingDate=data)
    responseData = serializers.serialize('json', consultingObject)

    return HttpResponse(responseData, content_type="text/json-comment-filtered")