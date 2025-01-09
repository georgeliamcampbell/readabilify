# Developer Guide

## Node

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

## Docker Image

```
# Build the docker image
docker build -t georgeliamcampbell/readabilify:latest .

# Run the container
docker run --name readabilify -p 49152:49152 -d georgeliamcampbell/readabilify:latest
```