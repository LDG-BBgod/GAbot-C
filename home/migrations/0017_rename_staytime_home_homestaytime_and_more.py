# Generated by Django 4.0.1 on 2022-07-16 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0016_remove_home_concerncount_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='home',
            old_name='stayTime',
            new_name='homeStayTime',
        ),
        migrations.AddField(
            model_name='home',
            name='compareStayTime',
            field=models.FloatField(default='0', verbose_name='비교견적페이지 채류시간'),
        ),
        migrations.AddField(
            model_name='home',
            name='consultingStayTime',
            field=models.FloatField(default='0', verbose_name='상담예약 채류시간'),
        ),
        migrations.AddField(
            model_name='home',
            name='diagnosisStayTime',
            field=models.FloatField(default='0', verbose_name='보험진단 채류시간'),
        ),
        migrations.AddField(
            model_name='home',
            name='selectStayTime',
            field=models.FloatField(default='0', verbose_name='선택페이지 채류시간'),
        ),
    ]
