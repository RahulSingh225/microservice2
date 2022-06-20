FROM node:alpine

WORKDIR /app/service2

# COPY ["package.json", "package-lock.json*", "./"]
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5002

CMD [ "npm", "start" ]