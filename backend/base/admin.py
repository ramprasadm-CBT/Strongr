from django.contrib import admin
from .models import *

admin.site.register(Tenant)
admin.site.register(TenantUser)
admin.site.register(Customer)
admin.site.register(Country)
admin.site.register(State)
admin.site.register(City)
admin.site.register(Area)
admin.site.register(GameType)
admin.site.register(Organization)
admin.site.register(OrganizationLocation)
admin.site.register(OrganizationLocationGameType)
admin.site.register(OrganizationLocationAmenities)
admin.site.register(OrganizationLocationWorkingDays)
admin.site.register(OrganizationGameImages)