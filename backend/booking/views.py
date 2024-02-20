from django.shortcuts import render
import datetime

# Create your views here.from django.shortcuts import render
from .organizations import organizations
from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import *
from booking.serializers import *
from rest_framework import status


@api_view(['GET'])
def getAreas(request):
    areas = Area.objects.all()
    serializer = AreaSerializer(areas, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getGameTypes(request):
    games = GameType.objects.all()
    serializer = GameTypeSerializer(games, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClubs(request):
    clubs = Organization.objects.all()
    serializer = ClubSerializer(clubs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClub(request, pk):
    club = Organization.objects.get(id=pk)
    serializer = ClubSerializer(club, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getClubLocation(request, pk):
    club = OrganizationLocation.objects.get(organization_id=pk)
    serializer = ClubLocationSerializer(club, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getClubGame(request, pk):
    game = OrganizationLocationGameType.objects.filter(organization_location_id=pk)
    serializer = OrganizationLocationGameTypeSerializer(game, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClubAmenities(request, pk):
    amenities = OrganizationLocationAmenities.objects.get(organization_location_id=pk)
    serializer = OrganizationLocationAmenitiesSerializer(amenities, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getClubWorkingDays(request, pk):
    days = OrganizationLocationWorkingDays.objects.filter(organization_location_id=pk)
    serializer = OrganizationLocationWorkingDaysSerializer(days, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClubImages(request, pk):
    images = OrganizationGameImages.objects.filter(organization_id=pk)
    serializer = OrganizationGameImagesSerializer(images, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def filterClubs(request):
    selected_area = request.query_params.get('area')
    selected_game = request.query_params.get('game')
    date = request.query_params.get('date')

    try:
        selected_area_obj = Area.objects.get(area_name=selected_area)
    except Area.DoesNotExist:
        return Response({'error': f'Area {selected_area} not found'},
                        status=status.HTTP_404_NOT_FOUND)

    time = datetime.datetime.strptime(date, '%Y-%m-%d')
    day = time.strftime('%A')

    areas = OrganizationLocation.objects.filter(area=selected_area_obj)

    game_names = []
    for location in areas:
        if len(
                OrganizationLocationWorkingDays.objects.filter(
                    days=day, organization_location=location,
                    is_active=True)) == 1:
            game_names += OrganizationLocationGameType.objects.filter(
                game_type__game_name=selected_game,
                organization_location=location).select_related(
                    'organization_location__organization')

    organizationlocations = [
        org_game_name.organization_location for org_game_name in game_names
    ]

    serializer = ClubLocationSerializer(organizationlocations, many=True)
    return Response(serializer.data)