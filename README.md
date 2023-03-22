![studio](https://user-images.githubusercontent.com/17518047/225091156-8ac171cc-b632-447a-9dff-751c6aebc239.png)


# Studio Iza Słodka

### Requirements

- docker (compose)
- node & npm
- yarn
- make

### Running Wordpress

#### Docker

Start Wordpress via `make dev-up` to start in watch mode or `make up` in production.

#### Webpack

After cloning the repository, install depenencies using `yarn install`.

Webpack is used to optimize and package static resources. It should be used either in watch mode (`yarn start`) or a manual build using `yarn run build`.
