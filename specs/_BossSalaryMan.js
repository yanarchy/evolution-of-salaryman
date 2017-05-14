describe('BossSalaryMan class functionality', () => {
  let bossSalaryMan;

  beforeEach(() => bossSalaryMan = new BossSalaryMan());

  it('should have an `age` property with a value of `40`', () => {
    expect(bossSalaryMan.age).to.equal(40);
  });

  it('should have a `food` property with a value of `sushi`', () => {
    expect(bossSalaryMan.food).to.equal('sushi');
  });

  it('should have a `drink` property with a value of `sake`', () => {
    expect(bossSalaryMan.drink).to.equal('sake');
  });

  it('should have a `work` method that drunkenly yells', () => {
    expect(bossSalaryMan.work()).to.equal('yell yell drink drink');
  });

  it('should have a `clothing` property with a value of `black suit`', () => {
    expect(bossSalaryMan.clothing).to.equal('black suit');
  });

  it('should have a `wallet` property with a value of `100`', () => {
    expect(bossSalaryMan.wallet).to.equal(100);
  });

  it('should have a `makeMoney` method that adds 10 to the boss\'s wallet', () => {
    expect(bossSalaryMan.makeMoney).to.be.a('function');
    bossSalaryMan.makeMoney();
    expect(bossSalaryMan.wallet).to.equal(110);
    bossSalaryMan.makeMoney();
    expect(bossSalaryMan.wallet).to.equal(120);
  });
});
