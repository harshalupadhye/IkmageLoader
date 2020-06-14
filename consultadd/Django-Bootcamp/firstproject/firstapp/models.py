from django.db import models

# Create your models here.
class Bootcamp_Candidate(models.Model):
    name=models.CharField(max_length=20)
    idnentity=models.IntegerField()
    contact=models.IntegerField()
    address=models.CharField(max_length=20)

# Customer_details(models.Model):
#    Customer_name=models.CharField(max_length=20)
#    Address=models.CharField(max_lenght=20)
#    Phone=models.BigIntegerField()
#    Email=models.CharField(max_length=20)
#    Password=models.CharField(max_length=20)
#    Promo_code=models.CharField(max_length=20)

#class Restaurant(models.Model):
#    Restaurant_name=models.CharField(max_length=20)
#    Address=models.CharField(max_lenght=20)
#    city_id=models.ForeignKey(
#        'City_id',
#        on_delete=models.CASCADE,
#    )
#    Contact=models.BigIntegerField()
#class City(models.Model):
#     City_name=models.CharField(max_lenght=20)
#     Address=models.CharField(max_lenght=20)
#     Zip=models.BigIntegerField()
#class Employees(models.Model):
#    Employee_name=models.CharField(max_lenght=20)
#    Phone=models.BigIntegerField()
#    Photo=models.ImageField()
#    Restaurant_id=models.ForeignKey(
#        'Restaurant_id',
#        on_delete=models.CASCADE,
#    )
#class payments(models.Model):
#    Amount=models.BigIntegerField()
    
    


    

