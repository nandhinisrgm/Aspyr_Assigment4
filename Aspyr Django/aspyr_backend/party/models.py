# party/models.py
from django.db import models

class Party(models.Model):
    pty_id = models.AutoField(primary_key=True)  # Auto-incrementing primary key
    pty_firstname = models.CharField(max_length=255)
    pty_lastname = models.CharField(max_length=255)
    pty_phone = models.CharField(max_length=20, blank=True, null=True)
    pty_ssn = models.CharField(max_length=20, blank=True, null=True)
    pty_gender = models.CharField(max_length=10, blank=True, null=True)
    pty_age = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'opt_party'  # Use the existing table name in lowercase

    def __str__(self):
        return f'{self.pty_firstname} {self.pty_lastname}'
