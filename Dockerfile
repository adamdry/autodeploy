FROM ubuntu:16.04

ENV APP_DIR /var/autodeploy

RUN mkdir -p $APP_DIR

WORKDIR $APP_DIR

RUN apt-get update
RUN apt-get install -y --no-install-recommends apt-utils
RUN apt-get upgrade -y
RUN apt-get install -y curl xz-utils

RUN mkdir -p /apps/node
RUN curl -o /apps/node/node-v8.6.0-linux-x64.tar.xz https://nodejs.org/dist/v8.6.0/node-v8.6.0-linux-x64.tar.xz
RUN tar xf /apps/node/node-v8.6.0-linux-x64.tar.xz -C /apps/node/
RUN ln -s /apps/node/node-v8.6.0-linux-x64/bin/node /usr/bin/node
RUN ln -s /apps/node/node-v8.6.0-linux-x64/bin/npm /usr/bin/npm

# This errored, couldn't get it working
#RUN npm i -g npm

RUN node -v
RUN npm -v

RUN npm install -g nodemon

#EXPOSE "0.0.0.0:3000:3000"

COPY . $APP_DIR/

# even though nodemon is installed using the -g flag it isn't avaiable globally so
#   I had to use the absolute path
CMD ["/apps/node/node-v8.6.0-linux-x64/bin/nodemon", "dist/index.js"]
