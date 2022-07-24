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