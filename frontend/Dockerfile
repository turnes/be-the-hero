FROM node:lts

WORKDIR /app

COPY . .
ENV PATH /app/node_modules/.bin:$PATH

RUN npm install
RUN npm install react-scripts@3.0.1

EXPOSE 3000
CMD [ "npm", "run", "start" ]