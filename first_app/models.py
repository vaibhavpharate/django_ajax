from django.db import models

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=150)
    price = models.FloatField()
    pages = models.FloatField()
    description = models.TextField()

    def __str__(self):
        return self.name
