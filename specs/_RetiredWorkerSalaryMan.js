describe('RetiredWorkerSalaryMan class functionality', () => {
  let retiredWorkerSalaryMan;

  beforeEach(() => retiredWorkerSalaryMan = new RetiredWorkerSalaryMan());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property with a value of `70`', () => {
    expect(retiredWorkerSalaryMan.age).to.equal(70);
  });

  it('should have a `food` property with a value of `soba`', () => {
    expect(retiredWorkerSalaryMan.food).to.equal('soba');
  });

  it('should have a `drink` property with a value of `tea`', () => {
    expect(retiredWorkerSalaryMan.drink).to.equal('tea');
  });

  it('should have a `work` method that doesn\'t really work', () => {
    expect(retiredWorkerSalaryMan.work()).to.equal('sleep drink gamble sleep');
  });

  it('should have a `wallet` property with a value of `75`', () => {
    expect(retiredWorkerSalaryMan.wallet).to.equal(75);
  });

  it('should have a `getPension` method that adds 2 to the salaryman\'s wallet', () => {
    expect(retiredWorkerSalaryMan.getPension).to.be.a('function');
    retiredWorkerSalaryMan.getPension();
    expect(retiredWorkerSalaryMan.wallet).to.equal(77);
    retiredWorkerSalaryMan.getPension();
    expect(retiredWorkerSalaryMan.wallet).to.equal(79);
  });

  it('should have a `gamble` method that subtracts 2 from the salaryman\'s wallet', () => {
    expect(retiredWorkerSalaryMan.gamble).to.be.a('function');
    expect(retiredWorkerSalaryMan.wallet).to.equal(73);
  });
  
});
