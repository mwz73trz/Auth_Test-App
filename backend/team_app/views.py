from urllib import request
from django.db.models import query
from rest_framework.viewsets import ModelViewSet
from team_app.serializers import TeamSerializer
from team_app.models import Team

class TeamViewSet(ModelViewSet):
    serializer_class = TeamSerializer
    
    def get_queryset(self):
        user = self.request.user
        return Team.objects.filter(user=user)
