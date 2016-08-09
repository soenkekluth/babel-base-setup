FROM node:6

ENV NODE_ENV=development

WORKDIR /usr/local/src

RUN mkdir build
RUN mkdir dist

COPY package.json /usr/local/src/package.json
COPY .babelrc /usr/local/src/.babelrc
COPY src /usr/local/src/src
COPY examples /usr/local/src/examples

RUN npm install
RUN npm run build

EXPOSE 3000


CMD ["npm", "run", "dev"]
