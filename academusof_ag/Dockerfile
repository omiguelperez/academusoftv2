FROM node:carbon-slim

# Create app directory
WORKDIR /aaw_ag_academusof

# Install app dependencies
COPY package.json /aaw_ag_academusof/
RUN npm install

# Bundle app source
COPY . /aaw_ag_academusof/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
