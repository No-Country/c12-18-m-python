from django.db import models


# Create your models here.
class Service(models.Model):
    name = models.CharField("name", max_length=100)
    description = models.CharField("description", max_length=1000)
    price = models.DecimalField("price", max_digits=8, decimal_places=2, default=-1.00)
    image = models.CharField("image", max_length=500)
    # reviews = models.ManyToManyField('user.User', through='Review')

    def __str__(self):
        return self.name


"""class Review(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

    def __str__(self):
        return f"Review of {self.service.name} by {self.user.username}"
"""
