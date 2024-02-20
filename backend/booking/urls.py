from django.urls import path
from . import views

urlpatterns = [
    path('areas/', views.getAreas, name='areas'),
    path('games/', views.getGameTypes, name='games'),
    path('clubs/', views.getClubs, name='clubs'),
    path('filterclubs/',views.filterClubs, name='filter-clubs'),
    path('<str:pk>/', views.getClub, name="club"),
    path('clublocation/<str:pk>/', views.getClubLocation, name="club-location"),
    path('clubgame/<str:pk>/', views.getClubGame, name="club-game"),
    path('clubamenities/<str:pk>/', views.getClubAmenities, name="club-amenities"),
    path('clubworking/<str:pk>/', views.getClubWorkingDays, name="club-working-days"),
    path('clubimages/<str:pk>/', views.getClubImages, name="club-images"),
]