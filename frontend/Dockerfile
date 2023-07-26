# Configuración de la imagen para el frontend Next.js
FROM node:16

# Crea y configura el directorio de trabajo
RUN mkdir /frontend
WORKDIR /frontend

# Copia el código fuente del frontend a la imagen de Docker
COPY frontend/ /frontend/

# Instala las dependencias del frontend
RUN npm install

# Define el comando para arrancar el servidor Next.js
CMD ["npm", "run", "dev"]


# Usamos una imagen de Node.js para construir la aplicación React
FROM node:14 

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos necesarios y ejecutamos la construcción de la aplicación
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run dev

# Utilizamos una imagen ligera de nginx para el despliegue
FROM nginx:alpine

# Copiamos los archivos construidos de la aplicación React a la carpeta de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para ejecutar el servidor nginx
CMD ["nginx", "-g", "daemon off;"]