# Usamos una imagen de Python para el backend
FROM python:3.9

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos necesarios y ejecutamos la instalación de dependencias
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos el resto de los archivos del backend
COPY . .

# Exponemos el puerto 8000 (puerto predeterminado de Django)
EXPOSE 8000

# Comando para ejecutar el servidor Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]