import time
from plyer import notification

if __name__ == '__main__':
    while True:
        notification.notify(
            title = 'Hola Alexi ya se trasnfirio todó el dinero',
            message = 'Mensaje de prueba',
            timeout = 10
        )
        time.sleep(3600)