# Generated by Django 4.0.1 on 2022-02-08 13:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='home',
            name='compareCount',
            field=models.IntegerField(default='0', verbose_name='보험견적비교'),
        ),
        migrations.AlterField(
            model_name='home',
            name='diagnosisCount',
            field=models.IntegerField(default='0', verbose_name='My보험 진단'),
        ),
        migrations.AlterField(
            model_name='home',
            name='refreshCount',
            field=models.IntegerField(default='0', verbose_name='홈페이지 새로고침'),
        ),
    ]
