const express = require('express');
const router = new express.Router();
const user = require('../models/user');
router.get('/test', (req, res) => {
  res.send('from a new file');
});
router.post('/users', async (req, res) => {
  const User = new user(req.body);
  //console.log("hey")

  try {
    await User.save();
    res.status(201).send(User);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/users', (req, res) => {
  user
    .find({})
    .then((user) => {
      res.send(user);
    })
    .catch((e) => {
      res.send(500).send(e);
    });
});
router.post('/users/login', async (req, res) => {
  try {
    const User = await user.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send(User);
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/users/:id', (req, res) => {
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
router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'age', 'email', 'password'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: 'invalid' });
  }

  try {
    const User = await user.findByIdAndUpdate(req.params.id, req.body);
    updates.forEach((update) => {
      User[update] = req.body[update];
    });
    await User.save();

    if (!User) {
      res.status(404).send();
    }
    res.send(User);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
