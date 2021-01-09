from django import setup
from django.core.management import call_command

setup()
call_command('makemigrations', '{{cookiecutter.django_user_model_app}}')
