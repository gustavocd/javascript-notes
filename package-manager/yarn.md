# Yarn

[Yarn](https://yarnpkg.com/en/) is a package manager created by [Facebook](https://www.facebook.com/) which is **fast**, **reliable**, and **secure**.

## [Basic Usage](#basic-usage)

### [Starting a project](#starting-a-project)

```bash
yarn init
```

### [Installing all dependencies](#intalling-all)

```bash
yarn
yarn install
```

### [Adding a dependency](#add-a-dependency)

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

### [Adding a dependency to different categories](#add-dependency-to-categories)

```bash
yarn add [package] --dev      // devDependencies
yarn add [package] --peer     // peerDependencies
yarn add [package] --optional // optionalDependencies
```

### [Upgrading a dependency](#upgrading-dependency)

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

### [Removing a dependency](#removing-dependency)

```bash
yarn remove [package]
```

### [Running scripts](#running-scripts)

```bash
yarn run [script]
```