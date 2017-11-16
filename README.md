# JavaScript / Angular Bootcamp - 2018

![Globant](assets/globant.jpg)

## IMPORTANT DISCLAIMER
This is not your typical _crash course_, this is a **Bootcamp**.

What does that mean?

- _You will give your best_

- _We will give our best_

- _We will all have a good time_


But most important, there will be **A LOT** of humor, because a happy developer _(student, pupil, padawan, you get the point...)_ is a great and hard working developer.


_That said..._


## Welcome to the bootcamp, training time has begun

![Workout](assets/workout.gif)

Please, use this repository as a base for you training phase. The idea is to
fork this project so everyone use the same folder structure for the
exercises.

#### Index

1. [Objective](#objective)

2. [Who Should Attend](#who-should-attend)

3. [Duration](#duration)

4. [Technical Assistance](#technical-assistance)

5. [Performance Measurement](#performance-measurement)

6. [Handling advanced Developers](#handling-advanced-developers)

7. [Materials](#materials)

8. [Bootcamp Schedule](#bootcamp-schedule)

9. [General Guidelines](#general-guidelines)

10. [Learning Days](#learning-days)

  - 10.1 [Week 1: JavaScript and Node 101](#week-1-javascript-and-node-101)
  - 10.2 [Week 2: TypeScript and Angular 101](#week-2-typescript-and-angular-101)
  - 10.3 [Week 3: Angular 201](#week-3-angular-201)
  - 10.4 [Week 4: Angular 301 and stuff](#week-4-angular-301-and-stuff)


### Objective

This course teaches the basics of JavaScript development and [Single Page Applications](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58) with `Angular`.

→ [index](#index)

### Who Should Attend

The training will start at a low level and does not require in depth knowledge
of the platform in question. Desirable participant profile: trainees and outside
Globant candidates. A basic knowledge on OOP is desired, though.

→ [index](#index)

### Duration

Four weeks total. (20 days)

→ [index](#index)

### Technical Assistance

You can contact other Bootcamp participants or any available tutor if you need
technical assistance. Communications will take place over [Slack](https://slack.com/features) on our own [Bootcamp Channel]()

### Performance Measurement

1. Code review after each practice.

2. Checkpoint completion after Learning stage with your assigned tutor.

3. Final Application after Bootcamp.

→ [index](#index)


### Handling Advanced Developers

Developers that move faster than average can go ahead and complete as much
exercises as wanted.

→ [index](#index)

### Materials

1. You will need to install [Node.JS](https://nodejs.org/en/) (Version 6) (NVM is strongly recommended - [Unix](https://github.com/creationix/nvm#installation)/[Windows](https://github.com/coreybutler/nvm-windows))

2. The recommended IDE is [Visual Studio Code](https://code.visualstudio.com/). However, you can use any IDE of your preference.

3. Gmail Account + headset (For hangout calls)

4. Create your own [GitHub](https://github.com/) account. Follow
this [guideline](https://help.github.com/articles/set-up-git) to setup your
account. Also you can read further about Git in
[Try Git](https://try.github.io/levels/1/challenges/1) or
[Learn Git Branching](http://pcottle.github.io/learnGitBranching/)

5. Fork this repo to use as a base to host the project code.

→ [index](#index)

### Bootcamp Schedule

The boot camp is organized in the following way:

![Calendar](assets/calendar.png)

The first week is oriented to learn the basics around JavaScript and Node. This
Bootcamp assumes you already know the basics of `Js` syntax. If this is not your
case, it is recommended to take a look to the following topics:

- [Js Values, Types, and Operators](http://eloquentjavascript.net/01_values.html)
- [Js Program Structure](http://eloquentjavascript.net/02_program_structure.html)
- [Js Functions](http://eloquentjavascript.net/03_functions.html)
- [Js Data Structures: Objects and Arrays](http://eloquentjavascript.net/04_data.html)

In addition you will need to be up to date with some concepts
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Responsive Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)
- [Web Components](https://www.webcomponents.org/introduction#what-are-web-components-)

Each day of the first week you will have a small exercise at the end of the day.
You must code the exercise inside the corresponding folder, example
`src/week1/day1/index.js` will contain the code for the exercise of the Day 1.

The second week introduces you to TypeScript and Angular. JavaScript is an easy typed language, that means
as a developer you have total control over the whole structure of the code. Sometimes that's
an advantage, but as the app grows and more people become involved things go out of hand.
That's when TypeScript comes to the rescue. At the end of this week you will make the famous `Tour of Heroes`.

The third week is oriented to learn Angular at an intermediate level. Angular is one of the biggest UI frameworks
out there; there's a lot to learn. On this week's challenge you will begin your final work.

The last week will be focused on intermediate/advanced Angular (and not Angular exclusive) features.
You will learn about Cross-Compiled apps, Hybrid Apps, and Progressive Web Apps. At the end of the week the challenge
awaiting for you is finishing last week's app. You need to present your work at the end of the week, _however_
you can keep working on it (more on that later).

### General Guidelines

1. [Team play](http://www.dummies.com/how-to/content/ten-qualities-of-an-effective-team-player.html) is encouraged but the work will be evaluated per person.

2. The instructions will be vague as they generally are in real life projects.
You must look for support and guidance from your PM, teammates and tutors.

3. All code and documentation must be in English.

4. `Js` Code must adhere to this [Coding Style Guide](https://github.com/airbnb/javascript).

5. Ts and Angular Code must adhere to this [Coding Style Guide](https://angular.io/guide/styleguide).

→ [index](#index)

### Learning Days ###

Each day you will grab the fundamentals of the key building blocks for usual
`Js/Ts/Angular` applications.

On each learning day you will have to:

1. **Read:**
We will provide you with documentation related with current sprint content so
you can have a background reference, guide and examples to complete the
following practice.

2. **Practice:**
You will implement the previously gathered knowledge in simple coding activities.

3. **Commit:**
You will commit all your code on a daily basis, when you finish your practice. This will not apply for code of Week 3 and 4.

# Introduction

  - This repository contains inside the `src` directory the project structure for all exercises/challenges that you will
  need to do.

  - All `.js` code can be opened directly on the browser. For Ts and Angular code you will need to run a Liteserver with
  the Angular CLI. Just running `npm run serve` will be enough 

  - Once the server is running, all the modifications you make will be automagically synced and the app will reload.

  - [Basic GIT concepts](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

→ [index](#index)

_Now let's get down to business_

# Week 1: JavaScript and Node 101

## Day 1: The Secret Life of Objects

![Suspicious](assets/suspicious.gif)

`Js` is often called an Object oriented language, but actually that isn't 100% true. In `Js`
we have what's called `Prototipal Inheritance`.
In this lesson you will learn all about the Prototype, Inheritance, Getters, Setters, Constructors and Polymorfism.

### Reading:

- [Objects](http://eloquentjavascript.net/06_object.html)

### Exercise:

Look into [`src/week1/day1/index.html`](src/week1/day1/index.html) in there there's an `Animal` class with a talk method. Follow the instructions.

### ~~Not So~~ Optional Reading
Since ES6 went out we do have a _Class like_ sintax, **HOWEVER** that's [Syntactic Sugar](https://en.wikipedia.org/wiki/Syntactic_sugar).
We still have that ~~hideous~~ beautiful `Prototype` under the hood, so don't get confused.

- [ES6 Class Sintax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## Day 2: Going Regular with RegEx (Also, learn how to hunt those bugs)
One of the most ~~hated~~ used features on any kind of language are Regular Expressions, aka RegEx. Those are **REALLY** powerfull strings (they are more like a really special kind of strings) that allow you to capture any pattern you want on any kind of string. You can make sure all emails accounts end up with `@something.com` or all the names are at most 4 characters long... you get the idea.

Also, you will be learning error handling and some of the finest debugging techniques out there. Or, as I like to call them, **_learn how to properly use your tools_**.

Read up and catch 'em all

![Catch](assets/catch.gif)


### Reading:
- [Regular Expressions](http://eloquentjavascript.net/09_regexp.html)
- [Errors and debugging](http://eloquentjavascript.net/08_error.html)

### Exercise:
Look into [`src/week1/day2`](src/week1/day2) in there there're some `index` files, poke around and follow the instructions.

## Day 3: The browser, where the _magic_ happens

So, you have a text file called _whatever.js_, you have ~200 lines in there (or you should, codebases of ~ 1k lines are made by horrible people). You add it to an `index.html` file, double click that file, a browser opens and

![Mindblown](assets/mindblown.gif)

The code comes to life. All works fine (at least if you coded right :unamused:) it's

![Magic](assets/magic.gif)

No, no it's not. It's the browser's engine. `Js` runs inside a browser on a [VM](https://en.wikipedia.org/wiki/JavaScript_engine), that VM could be
[V8](https://developers.google.com/v8/) (Chrome), [SpiderMonkey](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey) (Firefox), [Chakra](https://github.com/Microsoft/ChakraCore) (Edge) or [Nitro](https://developer.apple.com/documentation/javascriptcore) (Safari)

For day 3 you will learn about the Browser, the Document Object Model (basically the whole thing you are seeing on the browser's window) and DOM Events.

### Reading:

- [The Browser](http://eloquentjavascript.net/12_browser.html)
- [DOM](http://eloquentjavascript.net/13_dom.html)
- [Events](http://eloquentjavascript.net/14_event.html)

If you used jQuery, this is the time you realize that it's not so magic, it's Js, and you can do all the things jQuery does with vanilla Js. And in a few weeks you'll be refusing to use jQuery again :stuck_out_tongue_closed_eyes:

### ~~Not So~~ Optional Reading
The browser and the server (the little computer thingy that lives on the cloud and has all your files) communicates via `HTTP`. That's a protocol, something like a standarized way to send messages. You can read more about it here:

- [HTTP](http://eloquentjavascript.net/17_http.html)

Users communicate with the application via `forms`, those are fill up sections which where designed on a time before `Js` where all interactions with the server where made while navigating to a new page. That kind of interaction is **SO** web 1.0 but, we still use `forms`.

- [Forms](http://eloquentjavascript.net/18_forms.html)


### Exercise:
Look into [`src/week1/day3`](src/week1/day3) in there there're some `index` files, poke around and follow the instructions.

## Day 4 and 5: require('Node.js')
So, at this point you pretty much are up to speed with `Js`. But `Js` does not only run on a
browser. **YES** you read me right, you can make a `server`, a `robot`, a `game`, you
can eve run it on an _Arduino_. The sky's the limit.

How is that even possible you ask? Well, `Js` community was aways **HUGE**, so it was more than expected that a person asked `Why not?`
That's how [`Node`](https://nodejs.org/en/) was born.

`Node.js` is a `Js` runtime that runs outside the browser on a V8 VM, there's a Node fork for almost everything.

### Reading
First, to understand how node works, you need to learn one last thing about `Js`, `Modules`

- [Modules](http://eloquentjavascript.net/10_modules.html)

Then you can go on with this
- [Node](http://eloquentjavascript.net/20_node.html)
- [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
- [Installing npm packages locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
- [Using a `package.json`](https://docs.npmjs.com/getting-started/using-a-package.json)
- [Updating local packages](https://docs.npmjs.com/getting-started/updating-local-packages)
- [Uninstalling local packages](https://docs.npmjs.com/getting-started/uninstalling-local-packages)
- [Installing npm packages globally](https://docs.npmjs.com/getting-started/installing-npm-packages-globally)
- [Updating global packages](https://docs.npmjs.com/getting-started/updating-global-packages)
- [Uninstalling global packages](https://docs.npmjs.com/getting-started/uninstalling-global-packages)
- [Semantic versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning)
- [How npm works?](https://docs.npmjs.com/how-npm-works/npm3)

### Exercise:
Look into [`src/week1/day4-5`](src/week1/day4-5) in there there're some `js` files. Those 2 are `Node.js` apps, they don't work as you would expect from any other `.js` file.
You will need to use the command line:
```
luca.sartori@AR-IT12688:~/bootcamps/ui$
```
That's your Command Line Interface, know your CLI, love your CLI, **BE** your CLI. A developer is defined by it's tools, and you will want this one on your side.

You'll need to navigate to `src/week1/day4-5`
```
luca.sartori@AR-IT12688:~/bootcamps/ui$ cd src/week1/day4-5/
```
If you excecute a `ls` command you'll se the contents on the CLI
```
luca.sartori@AR-IT12688:~/bootcamps/ui/src/week1/day4-5/$ ls

expressDemo.js  fsDemo.js  node_modules  package.json

```
Then, you have to run one of the files
```
luca.sartori@AR-IT12688:~/bootcamps/ui/src/week1/day4-5/$ node fsDemo.js
```
[**Remember, you'll need Node.js installed**](#materials)

That will run the code, just remember two things
1. Server code, like the one from [expressDemo](/src/week1/day4-5/expressDemo.js) keeps running, you have to exit it
2. To exit a running process on the CLI, you need to press `CTRL+C`

**Notes:**

Don't be afraid to Google stuff, no developer remembers everything

→ [index](#index)

# Week 2: TypeScript and Angular 101
So, here we are. This is the first step into a whole new world. It doesn't matter if it's [Angular](https://angular.io/), [React](https://reactjs.org/), [Vue](https://vuejs.org/) or any `Js` framework. The latest generation of those tools makes the whole development process a breeze.
Welcome to the SPA world.

![New World](assets/newWorld.gif)

Here at Globant we are technology agnostic, every developer is welcomed to study anything he wants. However we do recommend from a maturity and scalabilty points of view `Angular` or `React`.

This Bootcamp will be made around `Angular` that does not mean that you should stop there, if you want to dig into `React` please do, it'll help you in the future.

**SO**... going back to our business: **`WEEK 2`** - Beginning our project.

## Day 6: TypeScript 101

Let's start with [TypeScript](http://www.typescriptlang.org/),  basically a superset of `Js`, with some advantages
1. Types
```
var number: number = 1;
var word: string = "1";

return number === word;
// IS NOT THE SAME

number = word;
// CAN'T BE DONE, DIFFERENT TYPES
```
2. Intellisense

![Intellisense](assets/intellisense.gif)

3. Generics - generic code for any type
```
class Greeter<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

let greeter = new Greeter<string>("Hello, world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
```
4. Transpilation - write in Ts, get ES6, ES5, ES4, etc...
![Transpilation](assets/transpilation.png)
[_Taken from Ts Playground_](http://www.typescriptlang.org/play/index.html)

Relax, you can always keep writing Js with TypeScript

And there's more and more... but that's for you to read:

### Reading:
- [TypeScript in 5 minutes](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Basic Types](http://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Variable Declarations](http://www.typescriptlang.org/docs/handbook/variable-declarations.html)

## Day 7: Still Ts
Get ready, there's a lot where the previous day came from.

### Reading
- [Interfaces](http://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Classes](http://www.typescriptlang.org/docs/handbook/classes.html)
- [Generics](http://www.typescriptlang.org/docs/handbook/generics.html)
- [Enums](http://www.typescriptlang.org/docs/handbook/enums.html)
- [Type Inference](http://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Type Compatibility](http://www.typescriptlang.org/docs/handbook/type-compatibility.html)
- [Advanced Types](http://www.typescriptlang.org/docs/handbook/advanced-types.html)

**Notes:**

There is no excercise section on these two days because as this is a superset of `Js` you already know how it works. Take them as free days so you can digest all that new info about `Ts` specific features.

All `Ts` code will be evaluated with `Angular` as that's the language it uses.


## Day 8, 9 and 10: Angular 101
So yes, here we are, `Angular`. The **ONE** framework (as they say) you may know it for it's previous generation, the highly important and famous _angular.js_.

_But as they say... water under the bridge._

`Angular` is a new framework, a new codebase and **A LOT** of new features. The team wanted _so bad_ to emphasize the _new_ part that the ditched the `.js` part of the name (commonly used on Js frameworks) and they adopted [_semver_](http://semver.org/).

The current stable version is 5.0

### Reading:
- [Angular Quickstart](https://angular.io/guide/quickstart)
- [Angular Intro - Tour of Heroes](https://angular.io/tutorial)

### ~~Not So~~ Optional Reading
- [Angular CLI](https://github.com/angular/angular-cli)

### Exercise:

The exercise for the week, is simple. We want you to be friends with `Angular`, so what's best than talking to each other?

You will do the `Tour of Heroes App` featured in the intro above. For that you'll have to follow the instructions on the page. However, as we want you to make the code, not copy/paste it there's a catch.

I've initialized the project for you, just run
```
luca.sartori@AR-IT12688:~/bootcamps/ui/week2$ npm install
```

_Remember: `ng serve` starts the app on `http://localhost:4200`_

_You will need to make a commit after every step, each one with a difference of at least 20 minutes. That way we can **at least try** to believe that you typed the code_

Keep in mind:
1. The app must be under [src/week2](src/week2)
2. You will need to install Angular CLI
3. You are expected to follow `Angular`'s code standards
4. Make a personal touch, you should be listed as a hero (cool powers only :grimacing:)

→ [index](#index)

# Week 3: Angular 201
Things are getting serious, are you ready to dive deep into `Angular`'s architechture?

![Study](assets/study.gif)

You will learn about the fundamentals, the good ways, the more performant and powerful approaches.

### Reading:
- [Architechture](https://angular.io/guide/architecture)
- [Displaying Data](https://angular.io/guide/displaying-data)
- [Template Sintax](https://angular.io/guide/template-syntax)
- [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
- [Component Interactions](https://angular.io/guide/component-interaction)
- [Component Styles](https://angular.io/guide/component-styles)
- [Attribute Directives](https://angular.io/guide/attribute-directives)
- [Structural Directives](https://angular.io/guide/structural-directives)
- [Pipes](https://angular.io/guide/pipes)
- [User Input](https://angular.io/guide/user-input)
- [Forms](https://angular.io/guide/forms)
- [Form Valitdation](https://angular.io/guide/form-validation)
- [NgModule](https://angular.io/guide/ngmodule)
- [Router](https://angular.io/guide/router)
- [Http Client](https://angular.io/guide/http)
- [Testing](https://angular.io/guide/testing)

### ~~Not So~~ Optional reading
- [Flexbox - CSS leveled up](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Exercise:

![Show Me What You Got](assets/SMWYG.gif)

#### _It's time to make an app from scratch_

You are going to make a **Scientific app**.

#### MarsBoot: from mars to your screen

Let's get our requirements together:
- The app should be responsive
- You should make the app modular. There should be several components
- Here are some mockups for the app. You'll have a main screen and a photo detail page

Home

![Homepage](assets/nasaHome.jpg)

Detail

![Detail Page](assets/nasaDetail.jpg)

- [You'll have to use this API](https://api.nasa.gov/api.html#MarsPhotos)
- Here's an API key for you to use `aZlmHCp3jD9sanwE8KvytidYArlTvlhwr3fEhYyM`
- Here are some API call examples
```
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY

https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY
```

- You have several cameras
- You can change the camera displaying in a row
- You can click on an image and it'll get you to it's detail page (is the same page as the 'photo of the day' but with a different title)
- You can add any feature you like
- The photo of the day should be a __random__ picture from a __random__ camera

Create a week3-4 folder, go inside and run:
```
luca.sartori@AR-IT12688:~/bootcamps/ui/week3-4$ ng start
```

**_Hey, don't panic. This excercise is for this week and the next one_**

→ [index](#index)

# Week 4: Angular 301 and stuff

So... you've got your `Angular` going, you read a **LOT** of stuff last week, you started a SPA. So... What's next?

![Homer Scholar](assets/homerSquareRoot.gif)

There're still a lot of stuff to read, some of them really work better under specific conditions or requirements. Remember:

_KEEP IT SIMPLE_

If there's a more advanced or complicated way to get to a solution it doesn't always mean that's the better approach.

With that in mind, here are some more advanced _(or not, this **whole** crash course was made by a bored developer on a few days span)_ features that every one should know, and at least being able to explain them. 

### Reading:
- [Dinamic Component Loader](https://angular.io/guide/dynamic-component-loader)
- [Animations](https://angular.io/guide/animations)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [Dynamic Forms](https://angular.io/guide/dynamic-form)
- [Bootstraping](https://angular.io/guide/bootstrapping)
- [Dependency Injection](https://angular.io/guide/dependency-injection-pattern)
- [DI in Angular](https://angular.io/guide/dependency-injection)
- [Hierarchical DI](https://angular.io/guide/hierarchical-dependency-injection)
- [DI in Action](https://angular.io/guide/dependency-injection-in-action)
- [Server Side Rendering](https://angular.io/guide/universal)

### ~~Not So~~ Optional Reading
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
- [PWAs on Angular](http://www.youtube.com/watch?v=C8KcW1Nj3Mw)
- [Hybrid Apps](https://developer.telerik.com/featured/what-is-a-hybrid-mobile-app/)
- [Hybrid Angular Apps - Ionic Framework](https://ionicframework.com/)
- [Cross Compiled Apps](https://developer.telerik.com/featured/defining-a-new-breed-of-cross-platform-mobile-apps/)
- [Cross Compiled Apps with Angular - NativeScript](https://www.nativescript.org/)
- [Cross Compiled Apps with React - React Native](https://facebook.github.io/react-native/)

### Exercise:

As I wrote some lines above, the previous week excercise may also be done on this week.

Your app should look something like this:

Home

![Homepage](assets/homeResult.jpg)

Detail

![Detail Page](assets/detailResult.jpg)

You have until the last day of this week to keep pushing changes. After that you can keep workin on the app, but please create a new branch for it:
```
luca.sartori@AR-IT12688:~/bootcamps/ui/week3-4$ git checkout -b 'post-bootcamp'

luca.sartori@AR-IT12688:~/bootcamps/ui/week3-4$ git push origin post-bootcamp
```

**Some advices**
- Dont't get scared. Even the most successfull Software Engineers and Architects forget things sometimes.
- Google is your friend, independence and curiosity are great values that every developer needs to have.
- The only way to learn is to fail, so keep failing.
- Theory is nice, but you need to get your hands dirty if you want things to stick.
- Remember, _a happy developer is a great developer_ (_also_, **coffee** is your best friend)

Kudos and keep ~~failing~~ learning!
