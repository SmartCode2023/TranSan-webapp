FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./backend ./backend
EXPOSE 5000
CMD ["npm", "run", "server"]