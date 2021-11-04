FROM node:14 as build

ARG GEODASHBOARD_VERSION=fix/router-basename
ARG CONTEXT=/geodashboard
#ARG GEOSTREAMS_URL=https://cinet.141.142.216.39.nip.io/geostreams

ENV CONTEXT=$CONTEXT
#ENV GEOSTREAMS_URL=$GEOSTREAMS_URL

RUN git clone https://github.com/geostreams/geodashboard.git /tmp/geodashboard
WORKDIR /tmp/geodashboard
RUN git checkout $GEODASHBOARD_VERSION
RUN yarn && yarn link:all

COPY ./ /tmp/cinet/
WORKDIR /tmp/cinet/
RUN yarn
RUN yarn link:geostreams
RUN yarn build

FROM nginx:stable-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx.conf /etc/nginx/conf.d

COPY --from=build /tmp/cinet/build /usr/share/nginx/html/geodashboard
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]