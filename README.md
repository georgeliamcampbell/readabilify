# Readabilify: A Node.js REST API Wrapper for Mozilla Readability

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/ZGpV9bDwHk)
<a href="https://www.buymeacoffee.com/georgeliamcampbell" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="28" width="104.75">
</a>


Readabilify is a Node.js project that provides a REST API wrapper around the Mozilla Readability library. The project aims to simplify the process of extracting clean and readable content from web pages, making it easier for developers to integrate this functionality into their applications.

## Installation Guide

### Docker

The quickest way to install Readabilify is using the image from Dockerhub.

```
# Pull the image
docker pull georgeliamcampbell/readabilify:latest

# Run container
docker run --name readabilify -p 49152:49152 -d georgeliamcampbell/readabilify:latest
```

## Developer Guide

### Node

Use the following guide to set up a local development environment

```
# Clone this repository
git clone https://github.com/georgeliamcampbell/readabilify.git

# Navigate to project director
cd readabilify

# Use node version from .nvmrc
nvm use

# Install dependencies
npm install

# Run the application
npm run dev
```

### Docker Image

```
# Build the docker image
docker build -t georgeliamcampbell/readabilify:latest .

# Run the container
docker run --name readabilify -p 49152:49152 -d georgeliamcampbell/readabilify:latest
```