FROM node:lts-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build -- --output-path=./dist/out

FROM nginx:alpine as production-stage
COPY --from=build-stage /app/dist/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]