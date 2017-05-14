# Evolution of a Salaryman

## Introduction

Today we will be having fun with ES6 classes while following the lifecycle of the salaryman in detail. You'll create many salarymen today, practicing ES6 instantiation pattern and inheritance.

## Salaryman Class Structure

Today we will diagram the evolution of a salaryman using code.
All salarymen begin as fresh students, ready for life as a worker!

Then they progress to new grads and are eventually made either bosses or workers. After a few years, they retire.

Student -> Shinsotsu
            -> BossSalaryMan
            -> WorkerSalaryMan
                -> RetiredWorkerSalaryMan

## Resources
* [Exploring ES6](http://exploringjs.com/es6/ch_classes.html)
* [ES6 Classes in Depth](https://ponyfoo.com/articles/es6-classes-in-depth)
* [ES6 Modules in Depth](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)

## Getting Started

1. Download the repository of files from GitHub
2. Open up `MochaChaiTestRunner.html` in Chrome or Firefox
3. A bunch of failing tests will show up--please fix them! The first test starts in `src/Student.js` and all of the test specs are in the `specs` folder. The files you need to modify are all in the `src` folder.

## Basic Requirements

Please do everything in ES6.

#### Student

- [ ] Create a Student class with:
  - [ ] an `age` property with a value of `18`
  - [ ] a `food` property with a value of `cupnoodle`
  - [ ] a `drink` property with a value of `highball`
  - [ ] a `work` method that returns `'study study study'`
  - [ ] a `clothing` property with a value of `'tshirt'`

#### Shinsotsu

- [ ] Create a Shinsotsu class with:
  - [ ] the Student superclass
  - [ ] an `age` property with a value of `22`
  - [ ] a `food` property with a value of `ramen`
  - [ ] a `drink` property with a value of `beer`
  - [ ] a `work` method that returns `'work work work'`
  - [ ] a `clothing` property with a value of `black suit`

#### BossSalaryMan

- [ ] Create a BossSalaryMan class with:
  - [ ] the Shinsotsu superclass
  - [ ] an `age` property with a value of `40`
  - [ ] a `food` property with a value of `sushi`
  - [ ] a `drink` property with a value of `sake`
  - [ ] a `wallet` property with a value of `100`
  - [ ] a `work` method that returns `'yell yell drink drink'`
  - [ ] a `makeMoney` method that adds 10 to the boss's wallet

#### WorkerSalaryMan

- [ ] Create a WorkerSalaryMan class with:
  - [ ] the Shinsotsu superclass
  - [ ] an `age` property with a value of `40`
  - [ ] a `food` property with a value of `udon`
  - [ ] a `drink` property with a value of `cansake`
  - [ ] a `wallet` property with a value of `50`
  - [ ] a `work` method that returns `'work work drink drink'`
  - [ ] a `makeMoney` method that adds 5 to the worker's wallet
  - [ ] a  `karaoke` method that subtracts 2 from the worker's wallet and returns `'Near, far, wherever you are, I believe that the heart does go on'`

#### RetiredWorkerSalaryMan

- [ ] Create a RetiredWorkerSalaryMan class with:
  - [ ] the WorkerSalaryMan superclass
  - [ ] an `age` property with a value of `70`
  - [ ] a `food` property with a value of `soba`
  - [ ] a `drink` property with a value of `tea`
  - [ ] a `wallet` property with a value of `75`
  - [ ] a `work` method that returns `'sleep drink gamble sleep'`
  - [ ] a `getPension` method that adds 2 to the salaryman's wallet
  - [ ] a  `gamble` method that subtracts 2 from the salaryman's wallet



