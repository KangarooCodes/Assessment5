# Broken App Issues

* line 2: Changed 'let axios' TO 'const axios' as it is not ever set to be changed.

* line 4: Changed 'var app' TO 'const app' as it is not ever set to be changed.

* Line 14: Changed 'catch' TO 'catch (err)

* Changed "app.listen(3000);" TO
  "app.listen(3000, () => {console.log('Server is listening on port 3000');});"

* Changed POST route to an arrow function, as it is a nameless function.

* Changed POST route to GET route, as we are only gathering data

* Spaced out lines for easier reading.

* Parentheses around the async function call

* Made the route function Async so I could await some promises.

* Added Promise.all() to results, so 'out' would have it's potential information fulfilled before mapping
