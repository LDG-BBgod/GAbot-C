from django.contrib import admin
from django.urls import path
from home.views import HomeView, SelectView ,AgreementView, ServiceView, CompanyView, JsonDataView, GetTimeView, xmldataView
from gauser.views import CompareView, MyinsuranceView, MyinsuranceDirectView, CompareEndVIew

urlpatterns = [
    path('', HomeView),
    path('admin/', admin.site.urls),
    path('select/', SelectView),
    path('agreement/', AgreementView),
    path('service/', ServiceView),
    path('company/', CompanyView),
    path('myinsurance/', MyinsuranceView.as_view()),
    path('myinsurancedirect/', MyinsuranceDirectView.as_view()),
    path('compare/', CompareView.as_view()),
    path('compare/submit/', CompareEndVIew.as_view()),
    path('jsondata/', JsonDataView),
    path('gettime/', GetTimeView),
    path('xmldata/', xmldataView),
]
