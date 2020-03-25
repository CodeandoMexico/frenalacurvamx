FROM node:12

WORKDIR /app

COPY package-lock.json package-lock.json
COPY package.json package.json

RUN npm ci

COPY ./ /app

EXPOSE 3000

CMD npx gulp dev
