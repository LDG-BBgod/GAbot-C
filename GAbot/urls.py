from django.contrib import admin
from django.urls import path
from home.views import HomeView, AgreementView, ServiceView, CompanyView, GetIPView, JsonDataView, GetTimeView
from gauser.views import CompareView, MyinsuranceView, MyinsuranceDirectView, CompareEndVIew

urlpatterns = [
    path('', HomeView),
    path('admin/', admin.site.urls),
    path('agreement/', AgreementView),
    path('service/', ServiceView),
    path('company/', CompanyView),
    path('myinsurance/', MyinsuranceView.as_view()),
    path('myinsurancedirect/', MyinsuranceDirectView.as_view()),
    path('compare/', CompareView.as_view()),
    path('compare/submit/', CompareEndVIew.as_view()),
    path('jsondata/', JsonDataView),
    path('getip/', GetIPView),
    path('gettime/', GetTimeView),
]
