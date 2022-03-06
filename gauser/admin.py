from django.contrib import admin
from .models import Compare, Myinsurance

class CompareAdmin(admin.ModelAdmin):

    list_display = ('userIP', 'registerDate','contact')
    
admin.site.register(Compare, CompareAdmin)

class MyinsuranceAdmin(admin.ModelAdmin):

    list_display = ('userIP', 'registerDate','phone')
    
admin.site.register(Myinsurance, MyinsuranceAdmin)
