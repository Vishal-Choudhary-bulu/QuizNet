const router = require("express").Router();
const Learner = require("./../Models/Learner.Model");

router.route("/login").post((req, res) => {
  const mail = req.body.email;
  const password = req.body.password;

  Learner.findOne({ email: mail })
    .then(user => {
      if (password === user.password) {
        res.json(true);
      } else {
        res.json(false);
      }
    })
    .catch(err => res.status(404).json(false));
});

router.route("/signup").post((req, res) => {
  const learner_id = req.body.learner_id;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const solved = req.body.solved;
  const posted = req.body.posted;
  const learnerLevel = req.body.learnerLevel;

  const newUser = new Learner({
    learner_id,
    username,
    email,
    password,
    solved,
    posted,
    learnerLevel
  });

  newUser
    .save()
    .then(() => res.json("new learner added"))
    .catch(err => console.log("signup error " + err));
});

module.exports = router;
