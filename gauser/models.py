from django.db import models

class Compare(models.Model):
    userIP = models.CharField(max_length=64, verbose_name='유저IP', default='유저IP')
    registerDate = models.CharField(max_length=64, verbose_name='등록시간', default='0')
    method = models.CharField(max_length=64, verbose_name='연락 수단', blank=True, null=True)
    contact = models.CharField(max_length=64, verbose_name='연락처', blank=True, null=True)
    concern = models.CharField(max_length=64, verbose_name='관심 보험', blank=True, null=True)
    price = models.CharField(max_length=64, verbose_name='월 보험료', blank=True, null=True)
    hospital = models.CharField(max_length=64, verbose_name='병원 이력', blank=True, null=True)
    hospitalTreatment = models.CharField(max_length=64, verbose_name='의료 행위', blank=True, null=True)
    hospitalDisease = models.CharField(max_length=64, verbose_name='증상 병명', blank=True, null=True)
    disease = models.CharField(max_length=64, verbose_name='지병', blank=True, null=True)
    familyDisease = models.CharField(max_length=64, verbose_name='가족력', blank=True, null=True)
    familyDiseaseEtc = models.CharField(max_length=64, verbose_name='가족력 기타', blank=True, null=True)
    birth = models.CharField(max_length=64, verbose_name='생년월일', blank=True, null=True)
    gender = models.CharField(max_length=64, verbose_name='성별', blank=True, null=True)
    job = models.CharField(max_length=64, verbose_name='직업', blank=True, null=True)
    region = models.CharField(max_length=64, verbose_name='거주지', blank=True, null=True)
    

    class Meta:
        db_table = 'gauser_compare'
        verbose_name = '비교견적'
        verbose_name_plural = '비교견적'

class Myinsurance(models.Model):
    userIP = models.CharField(max_length=64, verbose_name='유저IP', default='유저IP')
    registerDate = models.CharField(max_length=64, verbose_name='등록시간', default='0')
    phone = models.CharField(max_length=64, verbose_name='연락처', blank=True, null=True)
    consultingDate = models.CharField(max_length=64, verbose_name='상담날짜', blank=True, null=True)
    consultingTime = models.CharField(max_length=64, verbose_name='상담시간', blank=True, null=True)

    class Meta:
        db_table = 'gauser_myinsurance'
        verbose_name = '내보험'
        verbose_name_plural = '내보험'