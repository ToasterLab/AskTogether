FROM node:current-alpine3.14

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

ENV NEXT_PUBLIC_STRAPI_URI http://asktogether-strapi.home.xn--7qv.org
ENV GRAPHQL_URI http://asktogether-strapi.home.xn--7qv.org/graphql

COPY . ./
RUN npm i && npm run build

ENV NODE_ENV production
USER nextjs

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]