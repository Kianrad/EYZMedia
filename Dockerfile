FROM node:12.13.0 AS builder

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY ./ ./
RUN npm install
RUN npm ci --quiet && npm run build
