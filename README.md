# agile-academusoft-v2-backend

New version of academusoft platform wrote in django to improve the performance and UX.

## Tools

- Docker
- Docker Compose
- Python (Django)
- PostgreSQL

## Local

### Development

Run the project with the following command:

`docker-compose -f local.yml up -d`

After that, show service's logs:

`docker-compose -f local.yml logs -f`

### Test

Run the tests with the command bellow:

`docker-compose -f local.yml run --rm django python manage.py test --setings=config.settings.test --parallel`

## CI

We'll use Github actions.

## Deployment

This project will be deployed using IaC.

We will deploy our infrastructure on top of AWS, deploying service using Fargate to handle auto scaling for better performance and cost reducing.
