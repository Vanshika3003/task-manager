const express = require('express');
const app = express();
require('./db/mongoose');
const user = require('./models/user');
const port = process.env.PORT || 3000;
console.log('hey');

app.use(express.json());
app.post('/users', (req, res) => {
  const User = new user(req.body);
  //console.log("hey")

  User.save()
    .then(() => {
      res.send(User);
    })
    .catch((e) => {
      res.send(400).send(e);
    });
});
app.get('/users', (req, res) => {
  user
    .find({})
    .then((user) => {
      res.send(user);
    })
    .catch((e) => {
      res.send(500).send(e);
    });
});
app.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  user
    .findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch((e) => {
      res.send(500).send(e);
    });
});
app.patch('/users/:id', async (req, res) => {
  try {
    const User = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!User) {
      res.status(404).send();
    }
    res.send(User);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log('server is working2');
});
