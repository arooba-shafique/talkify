import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import talkify.routing  # <-- use talkify instead of chat

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'talkify.settings')  # <-- fix this too

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            talkify.routing.websocket_urlpatterns  # <-- use talkify here too
        )
    ),
})
