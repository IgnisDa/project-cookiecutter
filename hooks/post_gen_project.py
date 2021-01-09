import os

import django
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '{{cookiecutter.django_project_name}}.settings')
print(os.system('ls -la'))
django.setup()
call_command('makemigrations', '{{cookiecutter.django_user_model_app}}')
