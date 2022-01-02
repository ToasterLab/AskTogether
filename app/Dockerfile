FROM node:current-alpine3.14

ENV PORT 3000
ENV NEXT_TELEMETRY_DISABLED 1

RUN apk add --no-cache libc6-compat
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY . ./
RUN npm i

ENV NODE_ENV production
USER nextjs

EXPOSE 3000

CMD "npm run build && npm run start"