"""Users views."""

# Django REST Framework
from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

# Permissions
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from rwu.users.permissions import IsAccountOwner

# Serializers
# from rwu.users.serializers.profiles import ProfileModelSerializer
# from rwu.circles.serializers import CircleModelSerializer
from rwu.users.serializers import (
    AccountVerificationSerializer,
    UserLoginSerializer,
    UserModelSerializer,
    UserSignUpSerializer
)

# Models
from rwu.users.models import User
# from rwu.circles.models import Circle


class UserViewSet(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  viewsets.GenericViewSet):
    """User view set.

    Handle sign up, login and account verification.
    """

    queryset = User.objects.filter(is_active=True, is_client=True)
    serializer_class = UserModelSerializer
    lookup_field = 'username'

    def get_permissions(self):
        """Assign permissions based on action."""
        if self.action in ['signup', 'login', 'verify']:
            permissions = [AllowAny]
        # elif self.action in ['retrieve', 'update', 'partial_update']:
        #     permissions = [IsAuthenticated, IsAccountOwner]
        else:
            # permissions = [IsAuthenticated]
            permissions = [AllowAny]
        return [p() for p in permissions]

    @action(detail=False, methods=['post'])
    def login(self, request):
        """User sign in."""
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user, token = serializer.save()
        data = {
            'user': UserModelSerializer(user).data,
            'access_token': token
        }
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def signup(self, request):
        """User sign up."""
        serializer = UserSignUpSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = UserModelSerializer(user).data
        return Response(data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def verify(self, request):
        """Account verification."""
        serializer = AccountVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        data = {'message': 'Congratulation, now go share some rides!'}
        return Response(data, status=status.HTTP_200_OK)

    # @action(detail=True, methods=['put', 'patch'])
    # def profile(self, request, *args, **kwargs):
    #     """Update profile data."""
    #     user = self.get_object()
    #     profile = user.profile
    #     partial = request.method == 'PATCH'
    #     serializer = ProfileModelSerializer(
    #         profile,
    #         data=request.data,
    #         partial=partial
    #     )
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     data = UserModelSerializer(user).data
    #     return Response(data)

    # def retrieve(self, request, *args, **kwargs):
    #     """Add extra data to the response."""
    #     response = super(UserViewSet, self).retrieve(request, *args, **kwargs)
    #     circles = Circle.objects.filter(
    #         members=request.user,
    #         membership__is_active=True
    #     )
    #     data = {
    #         'user': response.data,
    #         'circles': CircleModelSerializer(circles, many=True).data
    #     }
    #     response.data = data
    #     return response
