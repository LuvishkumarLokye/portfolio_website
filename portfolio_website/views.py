from django.contrib import messages
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from .models import ContactMessage


def home(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def projects(request):
    return render(request, "projects.html")


def contacts(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        message = request.POST.get("message", "").strip()

        if not name or not email or not message:
            messages.error(request, "Please fill in all fields.")
            return render(request, "contacts.html", {"form_data": request.POST})

        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        ip_address = x_forwarded_for.split(",")[0].strip() if x_forwarded_for else request.META.get("REMOTE_ADDR")

        ContactMessage.objects.create(
            name=name,
            email=email,
            message=message,
            ip_address=ip_address,
        )

        messages.success(request, "Thank you. Your message has been saved.")
        return HttpResponseRedirect(reverse("contacts"))

    return render(request, "contacts.html")
