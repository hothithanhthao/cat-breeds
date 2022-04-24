# This is the beckend, which implements the Swagger API.

# This line fetches the Node Docker image with tag "16"
# from Docker Hub.
FROM node:16

# Create app directory
WORKDIR /usr/src/app/backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Expose the port and command to run app
EXPOSE 8080
CMD [ "node", "index.js" ]