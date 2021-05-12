FROM ubuntu:20.04

RUN apt update &&  \
    apt install nodejs -y && \
    apt install npm -y

RUN mkdir /app

COPY . /app/

WORKDIR /app

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "run", "development"]