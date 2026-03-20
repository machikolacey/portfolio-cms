from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, SiteContentViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'site-content', SiteContentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]