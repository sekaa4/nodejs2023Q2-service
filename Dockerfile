FROM node:18.16-alpine
WORKDIR /usr/app
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . .
