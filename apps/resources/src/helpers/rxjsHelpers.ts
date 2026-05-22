import { BehaviorSubject } from 'rxjs';

export const sessionExpirySubject = new BehaviorSubject<boolean>(false);

export const sessionExpiryObservable = () => {
  return sessionExpirySubject.asObservable();
};
