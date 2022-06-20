import express, { Router } from 'express';
import { test } from '../controllers/test';

const router: Router = express.Router();

router.route('/').get(test);

export default router;
