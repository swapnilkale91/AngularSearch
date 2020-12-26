# stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# stage 2
FROM nginx:alpine
COPY ./nginx/default.conf /etc/enviromentVariablesTemplate.conf
COPY --from=node /app/dist/AngularSearch /usr/share/nginx/html
ENTRYPOINT envsubst '$BACKEND_API_URL' < /etc/enviromentVariablesTemplate.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'