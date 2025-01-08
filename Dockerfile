FROM node:22-alpine

RUN mkdir -p /home/node/readabilify/node_modules && chown -R node:node /home/node/readabilify

WORKDIR /home/node/readabilify

COPY --chown=node:node package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "node", "app.js" ]