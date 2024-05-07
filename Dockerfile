FROM node:22-alpine

WORKDIR /app
COPY package*.json .
COPY ./prisma .
COPY tsconfig*.json .
COPY .eslintrc.js .
COPY nest*.json .
COPY ./src .

RUN yarn
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
ENTRYPOINT [ "npm","run"]
CMD ["start:prod"]