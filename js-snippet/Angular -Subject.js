// // In Angular, a Subject is a special type of Observable from the RxJS library. 
// // Type
// // Subject: The most basic type. It has no initial value, and subscribers only receive values emitted after they subscribe.
// // BehaviorSubject: Similar to Subject but maintains a current value. New subscribers receive the latest emitted value or an initial value if no data has been emitted yet.
// // ReplaySubject: Can buffer and replay a specific number of emitted values to new subscribers.
// // AsyncSubject: 

// const subject = new Rx.Subject();
// subject.next(1);
// subject.subscribe(x => console.log(x));

// BehaviorSubject example:

// const subject = new Rx.BehaviorSubject(0);
// subject.next(1);
// subject.subscribe(x => console.log(x));

// BehaviorSubject should be created with an initial value: new Rx.BehaviorSubject(1)
// Consider ReplaySubject if you want the subject to get previously published values.

//asObservable
  // private loaderSubject = new Subject<LoaderState>();
  // loaderState = this.loaderSubject.asObservable();
  // count = 0;
