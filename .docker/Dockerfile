FROM ubuntu:jammy

# setup timezone
ENV TZ=America/New_York

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime
RUN echo $TZ > /etc/timezone

ENV TOOLS_VERSION=arm64-100.7.3

# setup dependencies
RUN apt update
RUN apt install -y wget awscli

RUN wget -q https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2204-$TOOLS_VERSION.deb \
    && apt install -y ./mongodb-database-tools-ubuntu2004-$TOOLS_VERSION.deb \
    && rm ./mongodb-database-tools-ubuntu2004-$TOOLS_VERSION.deb \
    && rm -rf /var/lib/apt/lists/*

ENV MONGODUMP_OPTIONS=""
ENV MONGODUMP_DATABASE **None**
ENV MONGO_HOST **None**
ENV MONGO_USER **None**
ENV MONGO_PASSWORD **None**
ENV S3_ACCESS_KEY_ID **None**
ENV S3_SECRET_ACCESS_KEY **None**
ENV S3_BUCKET **None**
ENV S3_REGION eu-west-1
ENV S3_ENDPOINT **None**
ENV S3_S3V4 no
ENV S3_PREFIX 'backup'
ENV MONGODUMP_DATABASE_ARG **None**

ADD run.sh run.sh
ADD backup.sh backup.sh

ENTRYPOINT [ "sh", "run.sh" ]
CMD ["sh", "backup.sh"]
