from rest_framework.serializers import ModelSerializer
from team_app.models import Team

class TeamSerializer(ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'sport', 'user']