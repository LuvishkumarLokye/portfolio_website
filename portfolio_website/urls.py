from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index.html', views.home, name='home_html'),
    path('home/', views.home, name='home_page'),
    path('home', views.home, name='home_page_no_slash'),
    path('about/', views.about, name='about'),
    path('about', views.about, name='about_no_slash'),
    path('about.html', views.about, name='about_html'),
    path('projects/', views.projects, name='projects'),
    path('projects', views.projects, name='projects_no_slash'),
    path('projects.html', views.projects, name='projects_html'),
    path('contacts/', views.contacts, name='contacts'),
    path('contacts', views.contacts, name='contacts_no_slash'),
    path('contacts.html', views.contacts, name='contacts_html'),
]