describe('WorkerSalaryMan class functionality', () => {
  let workerSalaryMan;

  beforeEach(() => workerSalaryMan = new WorkerSalaryMan());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property with a value of `40`', () => {
    expect(workerSalaryMan.age).to.equal(40);
  });

  it('should have a `food` property with a value of `udon`', () => {
    expect(workerSalaryMan.food).to.equal('udon');
  });

  it('should have a `drink` property with a value of `cansake`', () => {
    expect(workerSalaryMan.drink).to.equal('cansake');
  });

  it('should have a `work` method that drunkenly works', () => {
    expect(workerSalaryMan.work()).to.equal('work work drink drink');
  });

  it('should have a `wallet` property with a value of `50`', () => {
    expect(workerSalaryMan.wallet).to.equal(50);
  });

  it('should have a `makeMoney` method that adds 5 to the worker\'s wallet', () => {
    expect(workerSalaryMan.makeMoney).to.be.a('function');
    workerSalaryMan.makeMoney();
    expect(workerSalaryMan.wallet).to.equal(55);
    workerSalaryMan.makeMoney();
    expect(workerSalaryMan.wallet).to.equal(60);
  });

  it('should have a `karaoke` method that subtracts 2 from the worker\'s wallet and sings Celine Dion', () => {
    expect(workerSalaryMan.karaoke).to.be.a('function');
    expect(workerSalaryMan.karaoke()).to.equal('Near, far, wherever you are, I believe that the heart does go on');
    expect(workerSalaryMan.wallet).to.equal(48);
  });
  
});
