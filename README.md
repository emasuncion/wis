# Online Examination WIS

*An Online Examination Web Information System, as part of the requirement for IS226.*

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
yarn
```
*Note: You may also use `npm` however, you may need to delete `yarn.lock`, but don't commit the `package.json` so that there won't be issues when another contributer clones and installs the dependencies.*

### Installation

A step by step series of examples that tell you how to get a development env running

First clone the repository and navigate inside the directory
```bash
# clone the repository
$ git clone git@github.com:emasuncion/wis.git
$ cd wis
```

Then install the dependencies
```bash
# install dependencies
$ yarn install
```

After installing the dependencies, you can now serve the application
```bash
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn prod

# generate static project
$ yarn generate
```
## Running the tests

To run the tests, you can issue the command
```bash
$ yarn test
```

To check the coverage only
```bash
$ yarn coverage
```

You can also run Jest in watch mode, if you're developing unit tests
```bash
$ yarn watch
```

## Built With

* [NuxtJS](https://nuxtjs.org) - Vue framework used
* [Vuetify](https://vuetifyjs.com) - UI library used
* [Jest](https://jestjs.io/) - Testing framework

## Versioning

I use [SemVer](http://semver.org/) for versioning.

## Author

* **Eleirold Asuncion**  - [emasuncion](https://github.com/emasuncion)

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
