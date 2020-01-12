FROM ubuntu:18.04 as dev_build

RUN apt-get update \
    && apt-get upgrade -y \
    && apt-get install curl -y

RUN curl -sSfL https://github.com/caddyserver/caddy/releases/download/v1.0.4/caddy_v1.0.4_linux_amd64.tar.gz \
    | tar --no-same-owner -C /usr/bin/ -xz

EXPOSE 80 8888 443
ENTRYPOINT ["/usr/bin/caddy", "-conf", "/etc/Caddyfile"]

COPY ./dist /var/www
COPY ./docker/caddy/Caddyfile.dev /etc/Caddyfile

FROM dev_build as prod_build
COPY ./docker/caddy/Caddyfile /etc/Caddyfile
