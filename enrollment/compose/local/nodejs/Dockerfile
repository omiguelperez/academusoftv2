
FROM node:12-slim

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 3000 for node, and 9229 and 9230 (tests) for debug
ARG PORT=5000
ENV PORT $PORT
EXPOSE $PORT 9229 9230

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/node_app
WORKDIR /opt/node_app
# the official node image provides an unprivileged user as a security best practice
# but we have to manually enable it. We put it here so npm installs dependencies as the same
# user who runs the app.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_app/node_modules/.bin:$PATH

COPY ./compose/production/nodejs/entrypoint /entrypoint
RUN chmod +x /entrypoint
RUN sed -i 's/\r$//g' /entrypoint

COPY ./compose/production/nodejs/start /start
RUN chmod +x /start
RUN sed -i 's/\r$//g' /start

COPY . /opt/node_app/

ENTRYPOINT ["/entrypoint"]
