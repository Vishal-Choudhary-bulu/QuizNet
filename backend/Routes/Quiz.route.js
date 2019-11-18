const router = require("express").Router();
const Quiz = require("./../Models/Quiz.Model");

router.route("/").get((req, res) => {
  Quiz.find()
    .then(quizes => res.json(quizes))
    .catch(err => res.status(400).json(err));
});

router.route("/unsolved").post((req, res) => {
  let allQuizes = [];
  Quiz.find()
    .then(quizes => {
      quizes.forEach(quiz => {
        let isInSolved = false;
        req.body.solved.forEach(q => {
          if (q.id === quiz.id) {
            isInSolved = true;
          }
        });
        if (!isInSolved) {
          allQuizes = [...allQuizes, quiz];
        } else {
        }
      });
      res.json(allQuizes);
    })
    .catch(err => console.log(err));
});

router.route("/add").post((req, res) => {
  const id = req.body.quiz.id;
  const ques = req.body.quiz.ques;
  const option1 = req.body.quiz.option1;
  const option2 = req.body.quiz.option2;
  const option3 = req.body.quiz.option3;
  const option4 = req.body.quiz.option4;
  const correct = req.body.quiz.correct;
  const author = req.body.quiz.author;

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
