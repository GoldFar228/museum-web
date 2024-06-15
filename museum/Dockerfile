FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --output-path=./dist/museum

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/museum /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY package.json package-lock.json
EXPOSE 4200
# CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]