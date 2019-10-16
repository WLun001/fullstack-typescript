import {Subscriber, SubscriberAddModel} from '../models/subsriber';

export class SubscriberService {
  create({name, email}: SubscriberAddModel) {
    return Subscriber.create({name, email});
  }

  get() {
    return Subscriber.findAll()
      .then(subscriber => subscriber)
      .catch(err => ({error: err}));
  }

  update(id: number, {name, email}: SubscriberAddModel) {
    return Subscriber.update({name, email}, {where: {subscriberId: id}})
      .then(count => count)
      .catch(err => ({error: err}));
  }

  delete(id: number) {
    return Subscriber.destroy({where: {subscriberId: id}})
      .then(count => count)
      .catch(err => ({error: err}));
  }
}



