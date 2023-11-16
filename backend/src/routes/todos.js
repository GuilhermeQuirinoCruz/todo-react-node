const express = require('express');
const router = express.Router();
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const db = getFirestore();

router.route('/')
  .get(async (req, res) => {
    console.log('GET todos list');

    db.collection('todos')
      .get()
      .then((snapshot) => {
        const todos = snapshot.docs.map(todo => {
          return todo.data();
        });

        res.json({todos});
      })
      .catch((error) => {
        res.json({
          'error': error
        });
      });
  })
  .post(async (req, res) => {
    console.log('POST new todo');

    const data = req.body;
    db.collection('todos')
      .add({
        "name": data.name,
        "dueDate": data.dueDate,
        // status: In Progress, On Hold, Completed
        "status": "In Progress"
      })
      .then((todo) => {
        res.json({'id' : todo.id});
      })
      .catch((error) => {
        res.json({
          'error': error
        });
      });
  });

router.route('/:id')
  .get((req, res) => {
    console.log(`GET todo with id ${req.params.id}`);

    db.collection('todos')
      .doc(req.params.id)
      .get()
      .then((snapshot) => {
        res.json(snapshot.data());
      })
      .catch((error) => {
        res.json({
          'error': error
        });
      });
  })
  .put((req, res) => {
    console.log(`UPDATE todo with id ${req.params.id}`);

    const data = req.body;
    db.collection('todos')
      .doc(req.params.id)
      .set({
        "name": data.name,
        "dueDate": data.dueDate,
      })
      .then(() => {
        res.json({'id' : req.params.id});
      })
      .catch((error) => {
        res.json({
          'error': error
        });
      });
  })
  .delete((req, res) => {
    console.log(`DELETE todo with id ${req.params.id}`);

    db.collection('todos')
      .doc(req.params.id)
      .delete()
      .then(() => {
        res.json({'id' : req.params.id});
      })
      .catch((error) => {
        res.json({
          'error': error
        });
      });
  })

module.exports = router;