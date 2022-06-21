import express from 'express';
import {
  create,
  changeContent,
  update,
  deletePageRecord,
  list,
  details,
  loadContent,
  delHome,postData,
  templatePage,updateName} from './page.controller';
const pageRoute = express.Router();

pageRoute.post('/', create);
pageRoute.post('/:pageId/content', changeContent);
pageRoute.put('/:pageId', update)

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/', list);
pageRoute.get('/:pageId', details);

pageRoute.get('/:pageId/content', loadContent)

pageRoute.delete('/',delHome);
pageRoute.get('/create/byTemplate',templatePage)

// pageRoute.post("/Signup",postData)
pageRoute.patch('/dashboard',updateName)
export default pageRoute;
