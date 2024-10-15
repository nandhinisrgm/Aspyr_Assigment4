# party/serializers.py
from rest_framework import serializers
from .models import Party

class PartySerializer(serializers.ModelSerializer):
    """
    Serializer for the Party model to convert between model instances and JSON format.
    """
    class Meta:
        model = Party
        fields = '__all__'  # Include all fields from the Party model
