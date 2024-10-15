# party/views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Party
from .serializers import PartySerializer

# 1. Get Gender List
@api_view(['GET'])
def get_gender_list(request):
    """
    Retrieves a list of distinct genders from the opt_party table.
    """
    try:
        genders = Party.objects.values('pty_gender').distinct()  # Corrected column name
        gender_list = [gender['pty_gender'] for gender in genders]
        return Response(gender_list)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# 2. Find Count of Clients by Gender
@api_view(['GET'])
def find_count_of_gender(request, gender):
    """
    Counts the number of clients in the opt_party table based on gender.
    """
    try:
        count = Party.objects.filter(pty_gender=gender).count()  # Corrected column name
        return Response({'count': count})
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# 3. Get Clients by Age Range
@api_view(['GET'])
def get_clients_for_age(request, low_age, high_age, gender):
    """
    Retrieves a list of clients within the specified age range from the opt_party table.
    """
    try:
        clients = Party.objects.filter(pty_age__lte=high_age, pty_age__gte=low_age, pty_gender = gender)  # Corrected column name
        serializer = PartySerializer(clients, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
