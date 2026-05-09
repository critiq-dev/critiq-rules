import os

DEBUG = False
ALLOWED_HOSTS = ["app.example.com"]
SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
