FROM node:16.17.1-alpine 

WORKDIR /app

COPY package.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build 

EXPOSE 8004

CMD ["npm", "start"]



