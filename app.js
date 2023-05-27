const express = require('express');
const axios = require('axios');

const app = express();

  // Parses as JSON
app.use(express.json())

  // GET ROUTE
app.post('/', async (req, res, next) => {

  try {
    // Await and Lump all Promises of data for requested devs
    let results = await Promise.all( req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    }));

    // Resolve all requests before mapping below, per 'out'
    Promise.all(results).then(() => {

    // Once results is all resolved, it gets mapped below and then JSONified
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    console.log(out)

    return res.send(JSON.stringify(out));
    })

    } catch (err) {
    console.log(`CATCHING ERROR: ${err}`)
    return next(err);
  }
});



  // SERVER PORT 3000
app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
