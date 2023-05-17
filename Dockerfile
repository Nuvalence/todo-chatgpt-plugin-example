# Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy OpenAPI spec and AI-plugin manifest files to the working directory
COPY ./openapi.yaml ./
COPY ./.well-known/ai-plugin.json ./.well-known/

CMD [ "node", "server.js" ]
