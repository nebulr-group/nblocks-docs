# Welcome to Nblocks docs website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Docker container
1. Open up Visual studio and reopen the project in a container.
1. The container setup will install GitHub CLI.
1. Run `gh auth login` and login with your user. Choose HTTPS and using an external browser works!

## Manually

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Update `deploy.sh` with your github username and run `./deploy.sh`.

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
