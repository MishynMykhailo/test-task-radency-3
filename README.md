<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
# Це доповнення до виконаного завдання у гілці `nodejs+express`
Щоб усе запустилося без помилок, потрібно мати на ПК встановлений Docker локально та виконати команду `docker-compose up`

## 1.Docker
Встанови **Docker** локально та в третьому завданні додай **Docker-compose** файл з двома контейнерами - один з **NodeJS** для основного сервера, інший для **PostgreSQL**. Можна користуватись готовими **image**, наприклад **image** для **PostgreSQL** 

## 2.PostgreSQL
Запустити **PostgreSQL** в докері і користуючись інструментами **PgAdmin** чи **DBeaver** створити тестову базу та дані про **notes** з третього завдання перенести туди.

## 3.Sequelize
Підключити **ORM Sequelize** до проекту, налаштувати підключення з базою даних **PostgreSQL** з попереднього завдання, та протестувати **API** використовуючи **Postman**.

## 4.NestJS
Переписати третє завдання, використовуючи **NestJS** замість **NodeJS** та **Express**.

