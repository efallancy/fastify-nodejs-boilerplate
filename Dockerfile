# Package installation
FROM node:alpine as base

WORKDIR /usr/app

# Copy over the package.json and yarn.lock for package dependency installation
COPY package.json .
COPY yarn.lock .

RUN yarn install --pure-lockfile

# Build the app
FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .
COPY src src
COPY --from=base /usr/app/node_modules /usr/app/node_modules

RUN yarn build
RUN yarn install --pure-lockfile --production

# Start the app
FROM node:alpine as app

WORKDIR /usr/app

COPY package.json .
COPY --from=builder /usr/app/node_modules /usr/app/node_modules
COPY --from=builder /usr/app/build /usr/app/build

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "build/index.js"]

