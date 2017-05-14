describe('Student class functionality', () => {
  let student;

  beforeEach(() => student = new Student());

  it('should have an `age` property with a value of `18`', () => {
    expect(student.age).to.equal(18);
  });

  it('should have a `food` property with a value of `cupnoodle`', () => {
    expect(student.food).to.equal('cupnoodle');
  });

  it('should have a `drink` property with a value of `highball`', () => {
    expect(student.drink).to.equal('highball');
  });

  it('should have an `work` method', () => {
    expect(student.work).to.be.a('function');
  });

  it('should have a `work` method that studies', () => {
    expect(student.work()).to.equal('study study study');
  });

  it('should have a `clothing` property with a value of `tshirt`', () => {
    expect(student.clothing).to.equal('tshirt');
  });
});
