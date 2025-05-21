FROM node:24-alpine3.20 as frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]