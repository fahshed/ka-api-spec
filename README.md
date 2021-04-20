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

## Postman

### Syncing

By performing these steps below, you'll be done with your setup.

1. Download [dummy.yml](https://gist.github.com/tasinhoque/ec998ca12b750fd30f614073a2975f00)
2. Change the title in the info section of `dummy.yml` to `<YOUR_NAME>'s Dummy Collection`
3. In Postman, login with the onlinesohopathi credentials and
   create a workspace titled `<YOUR_NAME>'s Workspace`
4. Import a new collection and upload `dummy.yml` to it
5. In Postman, post a GET request with the url and the header given below:

```
  https://api.getpostman.com/collections
```

```
  X-Api-Key: <POSTMAN_API_KEY>
```

4. Search `<YOUR_NAME>'s Dummy Collection` in the response
5. Take out the `id` and the `uid` from the object and put them in your `.env`
6. Run the command below:

```
yarn convert
```

7. If the collection got updated, you're done!

Now whenever you need to sync your spec with Postman, just run the script.

### Global Collection

There will be a global collection which will get updated every time an MR gets merged.
