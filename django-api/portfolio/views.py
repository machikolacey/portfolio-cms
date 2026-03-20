from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Project, SiteContent
from .serializers import ProjectSerializer, SiteContentSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]

class SiteContentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SiteContent.objects.all()
    serializer_class = SiteContentSerializer
    permission_classes = [AllowAny]