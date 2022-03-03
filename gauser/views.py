from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.shortcuts import render
from django.utils.decorators import method_decorator
from .decorators import session_required
from .forms import CompareForm, MyinsuranceForm

@method_decorator(session_required, name='dispatch')
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

@method_decorator(session_required, name='dispatch')
class CompareEndVIew(TemplateView):
    template_name = 'comparesubmit.html'
        
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