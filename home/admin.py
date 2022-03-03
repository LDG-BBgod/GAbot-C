from django.contrib import admin
from .models import Home

class HomeAdmin(admin.ModelAdmin):

    list_display = ('userIP', 'refreshCount')
    
admin.site.register(Home, HomeAdmin)

