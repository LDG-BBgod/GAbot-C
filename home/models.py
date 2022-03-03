from django.db import models

class Home(models.Model):
    userIP = models.CharField(max_length=64, verbose_name='유저IP')
    stayTime = models.IntegerField(verbose_name='홈페이지 채류시간', default='0')
    refreshCount = models.IntegerField(verbose_name='홈페이지 새로고침', default='1')
    compareCount = models.IntegerField(verbose_name='보험견적비교', default='0')
    diagnosisCount = models.IntegerField(verbose_name='My보험 진단', default='0')
    startCount = models.IntegerField(verbose_name='비교견적 시작', default='0')
    methodCount = models.IntegerField(verbose_name='연락수단', default='0')
    concernCount = models.IntegerField(verbose_name='관심보험', default='0')
    priceCount = models.IntegerField(verbose_name='월 보험료', default='0')
    hospitalCount = models.IntegerField(verbose_name='병원이력', default='0')
    familyDiseaseCount = models.IntegerField(verbose_name='가족력', default='0')
    birthCount = models.IntegerField(verbose_name='개인정보', default='0')

    def __str__(self):
        return self.userIP

    class Meta:
        db_table = 'home_homeButton'
        verbose_name = '버튼 횟수'
        verbose_name_plural = '버튼 횟수'