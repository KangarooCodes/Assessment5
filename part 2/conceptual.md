### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  * * * As we first learned in class, there is the async/await method for asynchronous functions. We have also learned about the try/catch method.

- What is a Promise?

  * * * An object that is to be returned once it has been either fulfilled or rejected.

- What are the differences between an async function and a regular function?

  * * * Async functions always return a promise, unlike regular functions. If we do not write the promise in ourselves, JS creates the promise for us.

- What is the difference between Node.js and Express.js?

  * * * Node.js is a JavaScript environment that runs on the server-side using the v8 Chrome Engine. Express is a web framework that is hosted within Node.js.

- What is the error-first callback pattern?

  * * * A function that calls an error as its first argument. If an error occures, it throws the error. If no error is found, it passes onto the callback function.

- What is middleware?

  * * * Software that intercepts requests and processes it before passing it along. It sort of stays in the 'middle' to help handle request.

- What does the `next` function do?

  * * * The next() function is part of an Express router than executes the next middleware. If next is not executed, the code hangs.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

  * * * Multiple awaits in one function without Promising.all() may cause issues. Promise.all() would reject when any of one the requests rejects. Without any rejections, all are fulfilled at once before the code is executed.