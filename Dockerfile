# pull the official base image
FROM node:16.17.0 as build
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
# CMD ["npm", "start"]
RUN npm run build

FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/build /usr/share/nginx/html