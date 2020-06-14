from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from api.models import CustomerLogin
from api.serializers import CustomerLoginSerializers


class CustomerLoginView(APIView):

    def get(self, request):
        queryset = CustomerLogin.objects.filter(Email=request.data.get("Email")).values().first()
        print(queryset)
        return Response(queryset)

    def post(self, request):
        queryset = request.data
        serializer = CustomerLoginSerializers(data=queryset)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response("data has been saved")
