FROM node:10
MAINTAINER SkyLightQP <me@skylightqp.kr>

EXPOSE 80

WORKDIR /
COPY / /

RUN npm install

CMD ["bash", "run.sh"]