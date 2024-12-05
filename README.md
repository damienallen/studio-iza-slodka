![studio](https://user-images.githubusercontent.com/17518047/225091156-8ac171cc-b632-447a-9dff-751c6aebc239.png)


# Studio Iza Słodka

### Requirements

- node & npm
- yarn
- make

### Wordpress

This repository is used to build and deploy wordpress theme for izaslodka.com

### Webpack

After cloning the repository, install depenencies using `yarn install`.

Webpack is used to optimize and package static resources. It should be used either in watch mode (`yarn start`) or a manual build using `yarn run build`.

### Deployment

Deployment is performed using Github actions via SSH/rsync.
