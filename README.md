# [pi-top](https://pi-top.com) - Frontend technical test

This test is a part of our hiring process at pi-top for frontend positions. It should take you between 3 and 6 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter/AnySocialProfileWhereYouAreActive at careers@pi-top.com**


## Summary
The goal of this test is to make you code a small ReactJS app. We have prepared a skeleton app for you, but please change whatever you want (CSS files, HTML structure, JS structure...). We have provided an API for you to use as the backend for your app which is documented below.

The app will be a Todo list (sorry) with the following features:
- **Todo List** - simple list of notes
- **Todo Detail** - detail of a note
- **Todo Creator** - ability to input new notes

Show us what you can do in 6 hours tops :) Don't spend too much time on designing your app, our design team will hate it anyway.

**Bonus:** The user would also be able mark a Todo 'isDone' and have them displayed appropriately. Please code that only if you have extra time.

### Requirements
- Features listed above
- Use the provided backend
- React
- Redux
- Responsive design

### Bonus/Suggestions
- Bonus feature above
- Unit and integration tests
- CSS modules or alternative
- ... Impress us!


## Installation
We're using [yarn](https://yarnpkg.com) here:
```
yarn install
yarn start
```


## API documentation
### Routes
- **GET** - https://backend.pi-top.com/todo-test/v1/todos: list all todos. description and tags are not included
- **GET** - https://backend.pi-top.com/todo-test/v1/todos/:id retrieve a specific todo details
- **POST** - https://backend.pi-top.com/todo-test/v1/todos create a todo. You'll need to send a JSON in the request body:
```
{
  title: 'test todo',
  description: 'sample todo for pi-top frontend-test-react',
  priority: 5,
  tags: ['test']
}
```
- **PUT** - https://backend.pi-top.com/todo-test/v1/todos/:id update a todo. The only field updatable is isDone (bool). You'll need to send a JSON in the request body:
```
{
  isDone: true
}
```
- **POST** - https://backend.pi-top.com/todo-test/v1/reset: Reset all todos to initial state.

### Todo object
- **id** - string - unique ID of call
- **createdAt** - string - creation date
- **title** - string (required) - short todo title
- **description** - string (required) - todo detailed description
- **priority** - number - importance of task
- **tags** - array of strings - tags
- **isDone** - boolean - if todo is done or not


## Submission
Clone this repository, create your own public repository, switch out the [remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes) and send us a link.

We'll review it and get back to you in order to talk about your code!

Contact us at careers@pi-top.com if you need more details.
