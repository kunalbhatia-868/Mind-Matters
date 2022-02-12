# Generated by Django 4.0.2 on 2022-02-12 11:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('booking', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
            ],
        ),
        migrations.AddField(
            model_name='professional',
            name='image_url',
            field=models.URLField(null=True),
        ),
        migrations.AddField(
            model_name='professional',
            name='session_fees',
            field=models.IntegerField(default=200),
        ),
        migrations.CreateModel(
            name='BookedSlot',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('professional', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='booking.professional')),
                ('slot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='booking.slot')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
