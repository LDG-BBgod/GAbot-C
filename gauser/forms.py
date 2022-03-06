from django import forms
from .models import Compare, Myinsurance
from django.utils.dateformat import DateFormat
from datetime import datetime



class CompareForm(forms.Form):
    METHOD_CHOICES = (
        ('메일','메일'),
        ('카톡','카톡'),
        ('문자','문자'),
    )
    CONCERN_CHOICES = (
        ('의료실비','의료실비'),
        ('치매 간병','메일'),
        ('3대 진단비','3대 진단비'),
        ('유병자 간편','유병자 간편'),
        ('질병 후유장해','질병 후유장해'),
        ('태아 어린이 보험','태아 어린이 보험'),
        ('운전자 보험','운전자 보험'),
        ('입원 수술병원비','입원 수술병원비'),
        ('3대 질병 건강보험','3대 질병 건강보험'),
        ('암보험','암보험'),
        ('치아보험','치아보험'),
        ('일단 설계사의 추천을 받을래요','일단 설계사의 추천을 받을래요'),
    )
    HOSPITAL_CHOICES = (
        ('있어요','있어요'),
        ('없어요','없어요'),
    )
    HOSPITALTREATMENT_CHOICES = (
        ('선택안함','선택안함'),
        ('치료','치료'),
        ('입원','입원'),
        ('수술','수술'),
        ('약처방','약처방'),
        ('진료','진료'),
        ('잘 모르겠어요','잘 모르겠어요'),
    )
    FAMILYDISEASE_CHOICES = (
        ('암','암'),
        ('뇌','뇌'),
        ('심장','심장'),
        ('당뇨병','당뇨병'),
        ('고혈압','고혈압'),
        ('고지혈증','고지혈증'),
        ('기타','기타'),
        ('모르겠어요','모르겠어요'),
    )
    GENDER_CHOICES = (
        ('남자','남자'),
        ('여자','여자'),
    )
    method = forms.ChoiceField(widget=forms.RadioSelect, choices=METHOD_CHOICES, label='연락 수단')
    contact = forms.CharField(max_length=64, label='연락처')
    concern = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=CONCERN_CHOICES, label='관심 보험')
    price = forms.CharField(max_length=64, label='월 보험료')
    hospital = forms.ChoiceField(widget=forms.RadioSelect, choices=HOSPITAL_CHOICES, label='병원 이력')
    hospitalTreatment = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=HOSPITALTREATMENT_CHOICES, label='의료 행위')
    hospitalDisease = forms.CharField(max_length=64, label='증상 병명')
    disease = forms.CharField(max_length=64, label='지병')
    familyDisease = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=FAMILYDISEASE_CHOICES, label='가족력')
    familyDiseaseEtc = forms.CharField(max_length=64, label='가족력 기타')
    birth = forms.CharField(max_length=64, label='생년월일')
    gender = forms.ChoiceField(widget=forms.RadioSelect, choices=GENDER_CHOICES, label='성별')
    job = forms.CharField(max_length=64, label='직업')
    region = forms.CharField(max_length=64, label='거주지')

    def __init__(self, request, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.request = request

    def clean(self):
        cleaned_data = super().clean()
        userIP = self.request.session.get('user')
        method = cleaned_data.get('method')
        contact = cleaned_data.get('contact')
        concern =  cleaned_data.get('concern')
        price = cleaned_data.get('price')
        hospital = cleaned_data.get('hospital')
        hospitalTreatment = cleaned_data.get('hospitalTreatment')
        hospitalDisease = cleaned_data.get('hospitalDisease')
        disease = cleaned_data.get('disease')
        familyDisease = cleaned_data.get('familyDisease')
        familyDiseaseEtc = cleaned_data.get('familyDiseaseEtc')
        birth = cleaned_data.get('birth')
        gender = cleaned_data.get('gender')
        job = cleaned_data.get('job')
        region = cleaned_data.get('region')


        def joinList(model):
            if len(model) > 1:
                model = ' , '.join(model)
                return model
            else :
                model = model[0]
                if model == '선택안함':
                    model = ''
                    return model
                else:
                    return model

        def emptyText(model):
            if model == 'empty':
                model = ''
                return model
            else :
                return model

        concern = joinList(concern)
        hospitalTreatment = joinList(hospitalTreatment)
        familyDisease = joinList(familyDisease)

        contact = emptyText(contact)
        hospitalDisease = emptyText(hospitalDisease)
        disease = emptyText(disease)
        familyDiseaseEtc = emptyText(familyDiseaseEtc)
        birth = emptyText(birth)
        job = emptyText(job)
        
        registerDate = DateFormat(datetime.now()).format('20y.m.d / h:i a')

        if method:
            gauser = Compare(
                userIP = userIP,
                registerDate=registerDate,
                method=method,
                contact=contact,
                concern=concern,
                price=price,
                hospital=hospital,
                hospitalTreatment=hospitalTreatment,
                hospitalDisease=hospitalDisease,
                disease=disease,
                familyDisease=familyDisease,
                familyDiseaseEtc=familyDiseaseEtc,
                birth=birth,
                gender=gender,
                job=job,
                region=region,
            )
            gauser.save()


class MyinsuranceForm(forms.Form):

    phone = forms.CharField(max_length=64, label='연락처')
    consultingDate = forms.CharField(max_length=64, label='상담날짜')
    consultingTime = forms.CharField(max_length=64, label='상담시간')

    def __init__(self, request, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.request = request

    def clean(self):
        cleaned_data = super().clean()
        userIP = self.request.session.get('user')
        phone = cleaned_data.get('phone')
        consultingDate = cleaned_data.get('consultingDate')
        consultingTime = cleaned_data.get('consultingTime')

        def emptyText(model):
            if model == 'empty':
                model = ''
                return model
            else :
                return model

        phone = emptyText(phone)
        consultingDate = emptyText(consultingDate)
        consultingTime = emptyText(consultingTime)

        registerDate = DateFormat(datetime.now()).format('20y.m.d / h:i a')

        if phone:
            gauser = Myinsurance(
                userIP=userIP,
                registerDate=registerDate,
                phone=phone,
                consultingDate=consultingDate,
                consultingTime=consultingTime,            
            )
            gauser.save()