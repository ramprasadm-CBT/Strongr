import datetime
from django import forms
from django.db.models.base import Model 
from django.forms import ClearableFileInput, DateInput, ValidationError, ModelForm, modelformset_factory
from .models import *
from django.contrib.auth.models import User
from django import forms
from django.core.validators import MaxValueValidator, MinValueValidator


class OrganizationSignupForm(forms.Form): 
    phone_number = forms.IntegerField() 
    organization_name =forms.CharField(max_length=150)
    first_name= forms.CharField(max_length=150)  
    last_name = forms.CharField(max_length=150)   
    email = forms.EmailField(label='Organization Email')   

    def generate_password(request):    
     password = User.objects.make_random_password(length=6, allowed_chars="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890")  
     return password
    
    def username_clean(self):    
        username = self.cleaned_data['username'].lower()     
        new = User.objects.filter(username = username)     
        if new.count():       
            raise ValidationError("User Already Exist")   
        return username 

    def email_clean(self):     
        email = self.cleaned_data['email'].lower()     
        new = User.objects.filter(email=email)     
        if new.count():       
            raise ValidationError(" Email Already Exist")     
        return email   
    
    def save(self, pwd, commit = True):     
        user = User.objects.create_user(       
            username = self.cleaned_data['email'],       
            email=self.cleaned_data['email'],       
            password = pwd,      
            first_name=self.cleaned_data['first_name'],      
            last_name=self.cleaned_data['last_name']
            )    
        return user

class LoginForm(forms.Form):
    username = forms.CharField(max_length=254, widget=forms.TextInput(attrs={'placeholder':'username'}))
    password = forms.CharField(max_length=100, widget=forms.PasswordInput(attrs={'placeholder': 'password'}))  

class OrganizationProfileForm(forms.ModelForm):
    organization_name = forms.CharField(max_length=50,disabled=True)
    class Meta:
        model = Organization
        fields = ['organization_name','phone_number', 'alt_number', 'description']
        widgets = {
            'description':forms.Textarea(attrs={'rows':2 , 'cols':25})
        }


# class OrganizationProfileUserForm(OrganizationProfileForm):
#     first_name = forms.CharField(max_length=150)
#     last_name = forms.CharField(max_length=150)

#     class Meta(OrganizationProfileForm.Meta):
#         fields = OrganizationProfileForm.Meta.fields + ['first_name', 'last_name']

class OrganizationLocationForm(ModelForm):
     pincode = forms.IntegerField(validators=[MinValueValidator(100000, message='Make sure pincode is 6-digits'), MaxValueValidator(999999, message='Make sure pincode is 6-digits')])
     class Meta:
         model = OrganizationLocation
         fields = ['address_line_1', 'address_line_2', 'area', 'pincode', 'phone_number']
         widgets = {
            'address_line_1':forms.Textarea(attrs={'rows':2 , 'cols':20}),
            'address_line_2':forms.Textarea(attrs={'rows':2 , 'cols':20})

            }
                
class OrganizationLocationGameTypeForm(ModelForm):

    class Meta:
        model = OrganizationLocationGameType
        fields = ['game_type', 'pricing', 'description']
        widgets = {
            'description':forms.Textarea(attrs={'rows':2 , 'cols':25})
        }

class OrganizationGameImagesForm(forms.ModelForm):
    class Meta:
        model = OrganizationGameImages
        fields = ['image']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['image'].required = True

class OrganizationLocationAmenitiesForm(ModelForm):
    
    class Meta:
        model = OrganizationLocationAmenities
        fields = ['is_parking', 'is_restrooms', 'is_changerooms', 'is_powerbackup', 'is_beverages_facility', 'is_coaching_facilities', 'description']
        widgets = {
            'description':forms.Textarea(attrs={'rows':2 , 'cols':25})
        }

class OrganizationLocationWorkingDaysForm(ModelForm):
      
      class Meta:
        model = OrganizationLocationWorkingDays
        fields = ['work_from_time', 'work_to_time','is_active']
        widgets = {
          'work_from_time': forms.TimeInput(attrs={'type': 'time'}),
          'work_to_time': forms.TimeInput(attrs={'type': 'time' }),
          
            }
OrganizationLocationWorkingDaysFormSet = modelformset_factory(OrganizationLocationWorkingDays, form = OrganizationLocationWorkingDaysForm,extra=0)

class TermsandConditionsForm(forms.Form):

    agree=forms.BooleanField(required=True)