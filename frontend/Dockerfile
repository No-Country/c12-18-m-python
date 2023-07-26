# Establece la imagen base, que generalmente es una versión de Node.js con LTS (Long Term Support)
FROM node:lts-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (o yarn.lock) a la imagen
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install --production

# Copia todos los archivos de la aplicación al contenedor
COPY . /frontend/

# Compila la aplicación de Next.js para producción (esto puede variar dependiendo de cómo hayas configurado tu proyecto)
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación en el contenedor
EXPOSE 3000

# Define el comando para iniciar la aplicación cuando el contenedor se inicie
CMD ["npm", "run", "dev"]
