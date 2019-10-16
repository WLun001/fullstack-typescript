import {Request, Response, Router} from 'express';
import {SubscriberService} from '../services/subscriber.service';
import {ApiResponse, SubscriberAddModel} from '../models/subsriber';
import {apiVersion} from '../constants/version';

export const subscriberRouter = Router();
const subscriberService = new SubscriberService();

subscriberRouter.get('/subscribers', (req: Request, res: Response) => {

  const subscriber = subscriberService.get();

  return subscriber
    .then(result => res.json({
      apiVersion,
      subscribers: result,
    } as ApiResponse))
    .catch(err => err);
});

subscriberRouter.post('/subscribers', (req: Request, res: Response) => {

  const payload = req.body as SubscriberAddModel;
  const subscriber = subscriberService.create(payload);

  return subscriber
    .then(result => res.json({
      apiVersion,
      subscriber: result,
    } as ApiResponse))
    .catch(err => {
      res.status(400);
      return res.json(err);
    });
});

subscriberRouter.put('/subscribers/:id', (req: Request, res: Response) => {
  const subscriberId = +req.params.id;
  const data = req.body as SubscriberAddModel;
  const subscriber = subscriberService.update(subscriberId, data);

  return subscriber
    .then(result => res.json(result))
    .catch(err => {
      res.status(400);
      return res.json(err);
    });
});

subscriberRouter.delete('/subscribers/:id', (req: Request, res: Response) => {
  const subscriberId = +req.params.id;
  const subscriber = subscriberService.delete(subscriberId);

  return subscriber
    .then(result => res.json(result))
    .catch(err => {
      res.status(400);
      return res.json(err);
    });
});
