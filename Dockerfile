FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine AS runtime
WORKDIR /app

# Install nginx
RUN apk add --no-cache nginx

# Copy the SSR server and dependencies
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Copy nginx reverse proxy config
COPY ./nginx/reverse-proxy.conf /etc/nginx/nginx.conf

# Create nginx directories and set permissions
RUN mkdir -p /var/log/nginx /var/lib/nginx/tmp /run/nginx && \
    chown -R nginx:nginx /var/log/nginx /var/lib/nginx

# Set environment variables for Node.js
ENV HOST=0.0.0.0
ENV PORT=4321

EXPOSE 80
CMD ["sh", "-c", "nginx && node ./dist/server/entry.mjs"]