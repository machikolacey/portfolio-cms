from django.contrib import admin
from .models import Project, SiteContent

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'link', 'order']
    list_editable = ['order']

@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    pass