from django.contrib import admin
from django.urls import path
from home.views import HomeView, SelectView ,AgreementView, ServiceView, CompanyView, JsonDataView, GetTimeView
from gauser.views import CompareView, CompareEndVIew, MyinsuranceView, MyinsuranceDirectView, ConsultingView, ConsultingDataView

urlpatterns = [
    path('', HomeView),
    path('admin/', admin.site.urls),
    path('select/', SelectView),
    path('consulting/', ConsultingView.as_view()),
    path('agreement/', AgreementView),
    path('service/', ServiceView),
    path('company/', CompanyView),
    path('myinsurance/', MyinsuranceView.as_view()),
    path('myinsurancedirect/', MyinsuranceDirectView.as_view()),
    path('compare/', CompareView.as_view()),
    path('compare/submit/', CompareEndVIew),
    path('jsondata/', JsonDataView),
    path('gettime/', GetTimeView),
    path('consulting/consultingdata/', ConsultingDataView),
]
