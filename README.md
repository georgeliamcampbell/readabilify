# Readabilify: A Node.js REST API Wrapper for Mozilla Readability

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ZGpV9bDwHk)
<a href="https://www.buymeacoffee.com/georgeliamcampbell" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="28" width="104.75">
</a>


Readabilify is a Node.js project that provides a REST API wrapper around the Mozilla Readability library. The project aims to simplify the process of extracting clean and readable content from web pages, making it easier for developers to integrate this functionality into their applications.

## Quick start

The quickest way to install Readabilify is using the image from Dockerhub.

```
# Pull the image
docker pull georgeliamcampbell/readabilify:latest

# Run container
docker run --name readabilify -p 49152:49152 -d georgeliamcampbell/readabilify:latest
```

Alternatively, you can use the docker compose file include in this repository

```
# Clone the repo
git clone https://github.com/georgeliamcampbell/readabilify.git

# Navigate to directory
cd readability

# Run compose
docker compose up -d 
```

You should now be able to access the Swagger UI by visiting ```[http://localhost:49152/](http://localhost:49152/)```

## Support the project

If you find the project useful and want to support it or other projects you can do so using one of the following methods

<a href="https://www.buymeacoffee.com/georgeliamcampbell" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="28" width="104.75">
</a>