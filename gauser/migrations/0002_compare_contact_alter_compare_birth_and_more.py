# Generated by Django 4.0.1 on 2022-02-08 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gauser', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='compare',
            name='contact',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='연락처'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='birth',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='생년월일'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='concern',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='관심 보험'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='disease',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='지병'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='familyDisease',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='가족력'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='familyDiseaseEtc',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='가족력 기타'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='gender',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='성별'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='hospital',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='병원 이력'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='hospitalDisease',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='증상 병명'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='hospitalTreatment',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='의료 행위'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='job',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='직업'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='method',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='연락 수단'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='price',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='월 보험료'),
        ),
        migrations.AlterField(
            model_name='compare',
            name='region',
            field=models.CharField(blank=True, max_length=64, null=True, verbose_name='거주지'),
        ),
    ]
