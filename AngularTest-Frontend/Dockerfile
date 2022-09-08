#From amd64/node:latest
From amd64/node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#RUN apt-get update && apt-get upgrade -y && \
#    apt-get install -y nodejs \
#    npm  

#RUN apt-get update && apt-get upgrade -y

# install and cache app dependencies
COPY package.json /package.json
RUN npm install
RUN npm install -g @angular/cli

# add app
COPY . /app

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0 --port 80 --disable-host-check true 
