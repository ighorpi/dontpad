FROM node:21-alpine

WORKDIR /app
COPY package*.json .
# COPY .env .
COPY ./tsconfig.json .
COPY ./prisma ./prisma
COPY ./views ./views
COPY ./src ./src
RUN npm install
RUN npx prisma generate

RUN npm run build
EXPOSE 3000
ENTRYPOINT [ "npm","run"]
CMD ["start:prod"]