# Usa una imagen base de Alpine
FROM python:3.8-alpine

ENV PYTHONUNBUFFERED=1

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de requerimientos
COPY requirements.txt .

#instalar y actualizar paquetes
RUN apk update \
    && apk add --no-cache gcc musl-dev python3-dev libffi-dev \
    && pip install --upgrade pip

#Copiar los archivos del proyecto
COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000" ]





