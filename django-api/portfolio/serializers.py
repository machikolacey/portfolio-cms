from rest_framework import serializers
from .models import Project, SiteContent

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = '__all__'