from django.contrib import admin
from .models import Compare, Myinsurance

class CompareAdmin(admin.ModelAdmin):

    list_display = ('userIP', 'contact')
    
admin.site.register(Compare, CompareAdmin)

class MyinsuranceAdmin(admin.ModelAdmin):

    list_display = ('userIP', 'phone')
    
admin.site.register(Myinsurance, MyinsuranceAdmin)
