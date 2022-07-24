from email.policy import default
from django.db import models

class Home(models.Model):
    userIP = models.CharField(max_length=64, verbose_name='유저IP')
    registerDate = models.CharField(max_length=64, verbose_name='등록시간', default='0')
    id = models.BigAutoField(verbose_name="Post ID", primary_key=True)

    homeStayTime = models.FloatField(verbose_name='홈페이지 채류시간',default='0')
    selectStayTime = models.FloatField(verbose_name='선택페이지 채류시간',default='0')
    compareStayTime = models.FloatField(verbose_name='비교견적페이지 채류시간',default='0')
    consultingStayTime = models.FloatField(verbose_name='상담예약 채류시간',default='0')
    diagnosisStayTime = models.FloatField(verbose_name='보험진단 채류시간',default='0')

    refreshCount = models.IntegerField(verbose_name='홈페이지 새로고침', default='0')
    manageCount = models.IntegerField(verbose_name='보험관리시작 버튼', default='0')
    compareCount = models.IntegerField(verbose_name='비교견적 버튼', default='0')
    diagnosisCount = models.IntegerField(verbose_name='보험진단 버튼', default='0')
    consultingCount = models.IntegerField(verbose_name='상담예약 버튼', default='0')
    compareSubmitCount = models.IntegerField(verbose_name='비교견적완료', default='0')
    consultingSubmitCount = models.IntegerField(verbose_name='상담예약완료', default='0')


    def __str__(self):
        return self.userIP

    class Meta:
        db_table = 'home_homeButton'
        verbose_name = '버튼 횟수'
        verbose_name_plural = '버튼 횟수'

class UserCount(models.Model):
    userCount = models.IntegerField(verbose_name='방문자수')


    class Meta:
        db_table = 'home_userCount'
        verbose_name = '방문자수'
        verbose_name_plural = '방문자수'