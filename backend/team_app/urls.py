from django.urls import path, include
from team_app.views import TeamViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('teams', TeamViewSet, basename='team')

urlpatterns = router.urls