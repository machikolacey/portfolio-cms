import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()
try:
    u = User.objects.get(username='machiko')
    u.set_password('Admin1234!')
    u.is_staff = True
    u.is_superuser = True
    u.save()
    print("Done!")
except:
    User.objects.create_superuser('machiko', 'machiko@example.com', 'Admin1234!')
    print("Created!")
