# Docker

## comands

```bash
sudo docker ps -a
docker container start 2a0edb527054

docker build --rm -f "src\Services\Mail\Mail.Api\Dockerfile" -t mailapi:latest .
docker network create mynetwork
docker run -d --hostname my-rabbit --name some-rabbit -p 8080:15672 rabbitmq:3-management --network mynetwork

docker-compose build --force-rm
docker-compose up
docker-compose -f .\docker-compose.elastic.yml up
```

### volumes

```bash
docker volume ls
docker volume inspect myvolume
```

## mssql

- https://docs.microsoft.com/nl-nl/sql/linux/quickstart-install-connect-docker?view=sql-server-2017
- sa / Termin84U!

```bash
sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<moeilijkww>' \
   -p 1433:1433 --name sql1 \
   -d mcr.microsoft.com/mssql/server:2017-latest
```

# RabbitMQ

- rabbit commands:

```bash
rabbitmqctl "stop_app"
rabbitmqctl "reset"
rabbitmqctl "start_app"
```
