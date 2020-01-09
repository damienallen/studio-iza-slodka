FROM ubuntu:18.04

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install curl -y

RUN curl -sSfL https://github.com/caddyserver/caddy/releases/download/v1.0.4/caddy_v1.0.4_linux_amd64.tar.gz \
    | tar --no-same-owner -C /usr/bin/ -xz

EXPOSE 80 8888 443

COPY ./docker/caddy/Caddyfile /etc/Caddyfile

# WORKDIR /var/www
COPY ./dist /var/www

ENTRYPOINT ["/usr/bin/caddy", "-conf", "/etc/Caddyfile"]
