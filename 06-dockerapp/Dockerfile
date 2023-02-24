FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN npm i -g @angular/cli http-server pnpm

RUN pnpm i

RUN ng build

EXPOSE 8080

CMD [ "http-server", "dist/dockerapp", "-p", "8080" ]