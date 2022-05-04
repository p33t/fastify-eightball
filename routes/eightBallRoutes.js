const eightballController = require('../controller/eightBallController')
const routes = [{
  method: 'GET',
  url: '/eightball/answers',
  handler: eightballController.getAllAnswers
},
{
  method: 'GET',
  url: '/eightball/answer',
  handler: eightballController.getSingleAnswer
}
]
module.exports = routes
