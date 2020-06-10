from django.db import models

# Create your models here.
class Bootcamp_Candidate(models.Model):
    name=models.CharField(max_length=20)
    idnentity=models.IntegerField()
    contact=models.IntegerField()
    address=models.CharField(max_length=20)