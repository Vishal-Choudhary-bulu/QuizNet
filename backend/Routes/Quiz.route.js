const router = require("express").Router();
const Quiz = require("./../Models/Quiz.Model");

router.route("/").get((req, res) => {
  Quiz.find()
    .then(quizes => res.json(quizes))
    .catch(err => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const ques = req.body.ques;
  const option1 = req.body.option1;
  const option2 = req.body.option2;
  const option3 = req.body.option3;
  const option4 = req.body.option4;
  const correct = req.body.correct;
  const author = req.body.author;

  const newQuiz = new Quiz({
    id,
    ques,
    option1,
    option2,
    option3,
    option4,
    correct,
    author
  });

  newQuiz
    .save()
    .then(() => res.json("new quiz added"))
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
