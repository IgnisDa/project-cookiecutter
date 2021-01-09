from django.core.management import call_command

call_command('makemigrations', '{{cookiecutter.django_user_model_app}}')
