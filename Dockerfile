FROM node:21.5.0-slim

RUN apt update -y && apt install procps -y && apt clean

RUN chown -R node:node /usr

USER node

RUN npm install -g @angular/cli

WORKDIR /home/node/app

EXPOSE 4200

CMD [ "tail", "-f", "/dev/null" ]