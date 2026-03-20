from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    link = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name


class SiteContent(models.Model):
    hero_text = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    about_text = models.TextField(blank=True)
    overview_image = models.ImageField(upload_to='overview/', blank=True, null=True)
    overview_text = models.TextField(blank=True)

    class Meta:
        verbose_name = 'Site Content'
        verbose_name_plural = 'Site Content'

    def __str__(self):
        return 'Site Content'