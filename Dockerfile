FROM node:10-alpine
RUN apk add --no-cache ca-certificates
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

CMD ["npm", "start"]