# Yarn

[Yarn](https://yarnpkg.com/en/) is a package manager created by [Facebook](https://www.facebook.com/) which is **fast**, **reliable**, and **secure**.

## Basic Usage

### Starting a project

```bash
yarn init
```

### Installing all dependencies

```bash
yarn
yarn install
```

### Adding a dependency

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### Adding a dependency to different categories

```bash
yarn add [package] --dev      // devDependencies
yarn add [package] --peer     // peerDependencies
yarn add [package] --optional // optionalDependencies
```

### Upgrading a dependency

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### Removing a dependency

```bash
yarn remove [package]
```

### Running scripts

```bash
yarn run [script]
```