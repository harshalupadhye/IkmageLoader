from django.db import models


# Create your models here.
class Customer_login(models.Model):
    Name = models.CharField(unique=False, max_length=20)
    Email = models.EmailField()
    Password = models.CharField(unique=False, max_length=20)

    def __str__(self):
        return self.Email