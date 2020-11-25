# ts-screenshot 

This is a simple micro service that takes screenshots of a website given it’s URL and returns the image’s URL.  

## Getting Started

### Prerequisites

Install the Google Chrome s/w https://www.google.com/intl/en_sg/chrome/

And set the location of Chrome in the `.env` file.

### Setting the server

A step by step series that tell you how to get a development env running.

```
npm install
```

And start the server.

```
npm run start
```

Browse http://localhost:8080/ for a little demo.

## Running the tests

Explain how to run the automated tests for this service.  

```
npm run test
```

## Running website test

Explain what live test works.

```
curl -d "url=http://google.com" -X POST http://localhost:8080/screenshot
```

## Coding style

To ensure consistency throughout the source code.

```
npm run lint:fix
```

## Built With

* [README.md](https://github.com/iworkforthem/README.md/blob/master/README.md) - A good README.md template for your GitHub projects.

## Contributing

Want to file a bug, contribute some code, or improve documentation? Excellent! Read up on our [CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Wai Mun** - *Initial work* - [iworkforthem](https://github.com/iworkforthem)

## License

This project is licensed under the Apache License License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [CONTRIBUTING.md](https://github.com/angular/angular/blob/master/CONTRIBUTING.md) - Contributing to Angular.
* [Conventional Commits](https://www.conventionalcommits.org/) - A specification for adding human and machine readable meaning to commit messages.