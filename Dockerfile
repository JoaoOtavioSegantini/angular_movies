FROM node:21.5.0-slim

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV DISPLAY host.docker.internal:0.0
ENV CHROME_BIN='/usr/bin/chromium'
RUN chown -R node:node /usr /var

RUN apt-get update && apt-get install gnupg wget -y && \
    wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install google-chrome-stable -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

USER node

RUN npm install -g @angular/cli

WORKDIR /home/node/app

EXPOSE 4200

CMD [ "tail", "-f", "/dev/null" ]