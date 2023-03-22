up:
	docker compose up

build:
	docker compose build

dev-up:
	docker compose -f docker-compose.yml -f docker-compose.test.yml up

dev-build:
	docker compose -f docker-compose.yml -f docker-compose.test.yml build