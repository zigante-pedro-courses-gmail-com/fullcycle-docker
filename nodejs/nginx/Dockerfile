FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY default.conf /etc/nginx/conf.d/default.conf

RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js
