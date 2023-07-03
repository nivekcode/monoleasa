import {FooComponent} from "./foo.component";

describe('FooComponent', () => {
  let sut: FooComponent;

  beforeEach(() => {
    sut = new FooComponent();
  })

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should display "Foo rocks" as a title', () => {
    expect(sut.title).toBe('Foo rocks');
  });
});
