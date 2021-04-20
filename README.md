![Lint](add lint badge here)

# OpenAPI Specification for the Kemon Achen API

The OpenAPI Specification referenced [here](https://github.com/OAI/OpenAPI-Specification)is a community-driven open specification within the [OpenAPI Initiative](https://www.openapis.org/), a Linux Foundation Collaborative Project.

## The Linter used

Spectral is the linter chosen for this project and can be referenced [here](https://github.com/stoplightio/spectral). It is a flexible JSON/YAML linter, with out of the box support for OpenAPI v2/v3 and AsyncAPI v2.

### Install the linter

```
yarn global add @stoplight/spectral
```

You also need to intall the spectral extension for vscode
`code --install-extension stoplight.spectral`

### Run the linter on the Spefication File

```
make all
```

## Typescript API Client Generation

To generate a typescript client for the API, .net core 2.1 is required.

Install required NodeJS dependencies

```
yarn
```

### Installing .NET Core Runtime on Linux (Debian/Ubuntu)

```
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
```

followed by

```
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-runtime-3.1
```

### Installing .NET Core Runtime on MacOS

https://download.visualstudio.microsoft.com/download/pr/015b68bb-865a-46bd-a0f4-a41014adf9e9/66f05c05c87943332b88e82cc6ad2d5f/dotnet-runtime-2.1.22-osx-x64.pkg

### Generating an client

```
yarn generate-api-client
```
