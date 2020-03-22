#FROM node:latest as build_stage


#WORKDIR /app

#COPY package.json /app

#RUN npm install

#COPY . /app

#RUN npm run test -- --browsers ChromeHeadlessNoSandbox --watch=false

#RUN npm run build --prod=true

FROM nginx:latest

#COPY --from=build_stage /app/dist/translation-frontend /usr/share/nginx/html

COPY ./dist/translation-frontend /usr/share/nginx/html
