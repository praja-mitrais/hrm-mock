# React + TypeScript + Vite

This template provides a setup to get React working in Vite with HMR and some ESLint rules.

What we have so far


### Expanding the ESLint configuration

We extend the `Airbnb` and `Airbnb Typescript` lint rules


### Prettier configuration

We use `prettier` as code formatter. Run `yarn format` to manually run it or set your `VS Code` to `Format on Save`


### Husky and Commitlint

- We use `Husky` as a minimum code health check before commit.
- We alse use `Commitlint` for commit message checking. The convention for commit message is
  ```
      type(scope?): subject
      body?
      footer?
  ```
  Please refer `type` to be one of [Type Enum](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)
  

### Github Action

We use github action as our repo pipeline to do health check. Our github action steps for now is

- Installing dependencies
- Check lint
- Check Code Coverage and send the report as commit message or PR message
