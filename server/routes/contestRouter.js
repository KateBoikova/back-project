const { Router } = require('express');
const contestController = require('./../controllers/contestController');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const checkToken = require('./../middlewares/checkToken');
const upload = require('./../utils/fileUpload');

const contestRouter = Router();

contestRouter.get(
  '/customers/',
  checkToken.checkToken,
  contestController.getCustomersContests
);

contestRouter.get(
  '/contest/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,

  contestController.getContestById
);

contestRouter.get(
  '/',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  basicMiddlewares.parseQuery,
  contestController.getContests
);

contestRouter.patch(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest
);

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest
);

module.exports = contestRouter;
