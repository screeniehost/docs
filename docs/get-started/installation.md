# Installation Methods

We offer multiple methods to install screenie, so you can choose the one that best suits your needs.

## One-line installation

For a fast and straightforward installation, you can use our one-line installer. This method is perfect for users who want to get started quickly without any hassle.

```sh
curl -sSL https://screenie.host/install.sh | sh
```
::: warning
This method is coming soon, as the main webpage is not online **yet**.
:::


## Install with Docker

To install screenie, you need to pull the latest image, with the command:
```bash
docker pull ghcr.io/screeniehost/screenie:latest
```

### Creating volumes

::: danger
If you don't create volumes with your container, **all of the user data** will be **erased** when deleting the container.
:::

If you want pesistent storage for database, uploads and archives, create volumes with command:
```bash
docker volume create screenie-database-volume; docker volume create screenie-uploads-volume; docker volume create screenie-archives-volume
```

### Starting up the container

If you've managed to successfully create the volumes, then you can start up your application with the command:
```bash
docker run --name screenie -d --rm -v screenie-database-volume:/var/lib/mysql -v screenie-uploads-volume:/screenie/src/uploads -v screenie-archives-volume:/screenie/src/archives screeniehost/screenie:latest
```

### Success!

You can now open screenie on the domain and port, you've set it up in ```data/config.json```!

## Advanced Installation

For advanced installation, please visit our [advanced Installation](advanced-installation) guide.