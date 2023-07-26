# Configuración de la imagen para el frontend Next.js
FROM node:16

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
