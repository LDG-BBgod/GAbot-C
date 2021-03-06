# Generated by Django 4.0.1 on 2022-07-16 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0017_rename_staytime_home_homestaytime_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='home',
            name='birthCount',
        ),
        migrations.RemoveField(
            model_name='home',
            name='startCount',
        ),
        migrations.AddField(
            model_name='home',
            name='compareSubmitCount',
            field=models.IntegerField(default='0', verbose_name='비교견적완료'),
        ),
        migrations.AddField(
            model_name='home',
            name='consultingCount',
            field=models.IntegerField(default='0', verbose_name='상담예약 버튼'),
        ),
        migrations.AddField(
            model_name='home',
            name='consultingSubmitCount',
            field=models.IntegerField(default='0', verbose_name='상담예약완료'),
        ),
        migrations.AddField(
            model_name='home',
            name='manageCount',
            field=models.IntegerField(default='0', verbose_name='보험관리시작 버튼'),
        ),
        migrations.AlterField(
            model_name='home',
            name='compareCount',
            field=models.IntegerField(default='0', verbose_name='비교견적 버튼'),
        ),
        migrations.AlterField(
            model_name='home',
            name='diagnosisCount',
            field=models.IntegerField(default='0', verbose_name='보험진단 버튼'),
        ),
    ]
