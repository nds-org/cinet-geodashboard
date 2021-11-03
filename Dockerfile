FROM node:14 as build

ARG GEODASHBOARD_VERSIO=fix/router-basename
ARG CONTEXT=/geodashboard

RUN git clone https://github.com/geostreams/geodashboard.git /tmp/geodashboard
WORKDIR /tmp/geodashboard
RUN if [[ -z "${GEODASHBOARD_VERSION}" ]] ; then git switch --detach $GEODASHBOARD_VERSION ; fi
RUN yarn && yarn link:all

COPY ./ /tmp/cinet/
WORKDIR /tmp/cinet/
RUN yarn
RUN yarn link:geostreams
RUN yarn build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d

COPY --from=build /tmp/cinet/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]