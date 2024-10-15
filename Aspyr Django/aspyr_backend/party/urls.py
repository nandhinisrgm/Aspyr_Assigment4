# party/urls.py
from django.urls import path
from .views import (
    get_gender_list,
    find_count_of_gender,
    get_clients_for_age,
)

urlpatterns = [
    path('genders/', get_gender_list, name='get_gender_list'),
    path('countByGender/<str:gender>/', find_count_of_gender, name='find_count_of_gender'),
    path('clientsByAge/<int:low_age>/<int:high_age>/<str:gender>/', get_clients_for_age, name='get_clients_for_age'),
]
