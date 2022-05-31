# Typescript Starter

## Create Package
```
yarn init -y
```

## Install dependencies
```
typescript ts-node nodemon @types/node
```

## Add ts config
```
npx tsc --init
```

## Create Source folder src/index.ts
```ts
function greet(name: string): void {
  console.log("Hello", name);
}

const readerName = "all";

greet(readerName);
```

## Add nodemon config
```json
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/", "dist/", "coverage/"],
  "watch": ["src/"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js,json,ts"
}
```

- **restartable** — a command we can use to restart the program manually.
- **ignore** — list of files we don’t want to trigger a program restart when changing.
- **watch** — list of paths we do want to trigger a program restart when changing.
- **execMap** — a mapping between a file type/extension to a runtime.
- **env** — environment variables to include
- **ext** — the file extensions Nodemon monitores

## Add `script` in `package.json`
```json
{
  "scripts": {
    "dev": "nodemon --config nodemon.json src/index.ts",
    "dev:debug": "nodemon --config nodemon.json --inspect-brk src/index.ts"
  }
}
```

## Debugging with vscode
Create `.vscode/launch.json`
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "processId": "${command:PickProcess}"
    }
  ]
}
```

## Running the ts
```
yarn dev
```

## Running with debugger
```
yarn dev:debug
```

[Source: Medium](https://levelup.gitconnected.com/typescript-nodemon-the-ultimate-setup-7200aa60cc8b)