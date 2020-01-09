FROM ubuntu:18.04

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install curl -y

RUN curl -sSfL https://caddyserver.com/download/linux/amd64 \
    | tar --no-same-owner -C /usr/bin/ -xz

EXPOSE 80 443

WORKDIR /var/www
COPY ./dist /var/www

ENTRYPOINT ["/usr/bin/caddy", "-conf", "/etc/Caddyfile"]

# FROM alpine:3.11

# ENTRYPOINT ["/docker/entrypoint.sh"]

# WORKDIR /code
# COPY . /code