from django.shortcuts import redirect

def session_required(function):
    def wrap(request, *args, **kwargs):
        user = request.session.get('user')
        if user is None or not user:
            return redirect('/')
        return function(request, *args, **kwargs)
    return wrap