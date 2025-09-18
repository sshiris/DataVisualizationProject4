FROM node:24-alpine

USER 1000
WORKDIR /usr/src/frontend

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "dev"]
