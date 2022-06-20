import asyncHandler from 'express-async-handler';
import { appendFile } from 'fs';

//@desc 43w5
//@route GET get
//@access public
export const test = asyncHandler((req, res) => {
  res.send('Hi, there');
});
