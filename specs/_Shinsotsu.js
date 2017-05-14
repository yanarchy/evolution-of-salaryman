describe('Shinsotsu class functionality', () => {
  let shinsotsu;

  beforeEach(() => shinsotsu = new Shinsotsu());

  /*  Overwrite methods from superclass  */

  it('should have an `age` property with a value of `22`', () => {
    expect(shinsotsu.age).to.equal(22);
  });

  it('should have a `food` property with a value of `ramen`', () => {
    expect(shinsotsu.food).to.equal('ramen');
  });

  it('should have a `drink` property with a value of `beer`', () => {
    expect(shinsotsu.drink).to.equal('beer');
  });

  it('should have a `work` method that works', () => {
    expect(shinsotsu.work()).to.equal('work work work');
  });

  it('should have a `clothing` property with a value of `black suit`', () => {
    expect(shinsotsu.clothing).to.equal('black suit');
  });

});
