from django.contrib.auth import get_user_model

def run():
    User = get_user_model()
    if User.objects.filter(username='machiko').exists():
        u = User.objects.get(username='machiko')
        u.set_password('Hsdamian666')
        u.is_staff = True
        u.is_superuser = True
        u.save()
        print("Password reset!")
    else:
        User.objects.create_superuser('machiko', 'machiko_kimura_lacey@yahoo.co.uk', 'Hsdamian666')
        print("Superuser created!")
