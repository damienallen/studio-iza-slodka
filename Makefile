up:
	docker-compose up

build:
	docker-compose build

up-test:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up