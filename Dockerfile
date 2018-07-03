FROM node:latest
# Create app directory 
RUN mkdir -p /usr/src/app 
# Establish where your CMD will execute 
WORKDIR /usr/src/app 
# Bundle app source into the container 
COPY ./node_modules /usr/src/app/node_modules 
COPY ./models /usr/src/app/models 
COPY ./controllers /usr/src/app/controllers 
COPY ./app.js /usr/src/app/ 
# Expose the port for the app 
EXPOSE 3000 
# Execute "node app.js" 
CMD ["node", "app.js"]
