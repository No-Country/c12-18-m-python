# Usa una imagen base de Alpine
FROM python:3.8-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de requerimientos
COPY requirements.txt .

# Instala las dependencias necesarias
RUN apk update && apk add --no-cache --virtual .build-deps build-base postgresql-dev libffi-dev \
    && pip install --no-cache-dir --verbose -r requirements.txt \
    && apk del .build-deps

# Copia los archivos de tu aplicación Django al contenedor
COPY . .

# Expone el puerto en el que se ejecuta tu aplicación Django
EXPOSE 8000

# Define el comando para iniciar tu aplicación Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
