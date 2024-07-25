# Compare Tool

This project, named "Compare Tool," is an Angular application designed to compare prices from various internet service providers. It was generated using the [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Overview

The primary purpose of this project is to offer users a convenient way to compare internet plans based on their pricing and features, helping them make informed decisions.

## Project Structure

### Components

The `components` directory contains all the components used in the project. Each component resides in its own folder, comprising the following files:
- **HTML**: The template file that defines the component's structure and layout.
- **CSS**: The stylesheet for styling the component.
- **TypeScript**: The logic and behavior of the component.

### Services

The `services` directory includes services that handle business logic and data transactions. Each service is contained within its own folder, consisting of TypeScript files that:
- **Make HTTP requests**: To fetch data from APIs or other external sources.
- **Implement business rules**: To process data and ensure the application behaves as expected.

### Models

The `models` directory defines the data structures used throughout the project. Each model resides in its own folder with TypeScript files that:
- **Describe data structures**: These models define the shape and types of data that the application processes and manipulates.

## Development Server

To start a development server, run:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you modify any of the source files.

## Code Scaffolding

To generate a new component, run:

```bash
ng generate component component-name
```

You can also use `ng generate` to create other Angular entities like directives, pipes, services, classes, guards, interfaces, enums, and modules:

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module <name>
```

## Building the Project

To build the project, run:

```bash
ng build
```

The build artifacts will be output to the `dist/` directory. This folder contains the compiled files ready for deployment.

## Running Unit Tests

To execute the unit tests, run:

```bash
ng test
```

This command uses [Karma](https://karma-runner.github.io) as the test runner.

## Conclusion

The Compare Tool project is designed to help users easily compare internet service plans. By maintaining a clear and organized structure, including components, services, and models, the application ensures a modular and maintainable codebase.
