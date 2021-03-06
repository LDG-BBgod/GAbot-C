# Generated by Django 4.0.1 on 2022-07-16 09:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0015_alter_home_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='home',
            name='concernCount',
        ),
        migrations.RemoveField(
            model_name='home',
            name='familyDiseaseCount',
        ),
        migrations.RemoveField(
            model_name='home',
            name='hospitalCount',
        ),
        migrations.RemoveField(
            model_name='home',
            name='methodCount',
        ),
        migrations.RemoveField(
            model_name='home',
            name='priceCount',
        ),
        migrations.AlterField(
            model_name='home',
            name='compareCount',
            field=models.IntegerField(default='0', verbose_name='보험관리 시작'),
        ),
        migrations.AlterField(
            model_name='home',
            name='diagnosisCount',
            field=models.IntegerField(default='0', verbose_name='셀렉트 보힘비교'),
        ),
    ]
