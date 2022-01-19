from urllib import request
from rest_framework.viewsets import ModelViewSet
from team_app.serializers import TeamSerializer
from team_app.models import Team

class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
