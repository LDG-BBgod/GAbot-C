from django.contrib import admin
from .models import Home, UserCount

class HomeAdmin(admin.ModelAdmin):

    list_display = ('id', 'userIP', 'homeStayTime', 'registerDate')
    
admin.site.register(Home, HomeAdmin)

class UserCountAdmin(admin.ModelAdmin):

    list_display = ('userCount', )
    
admin.site.register(UserCount, UserCountAdmin)

