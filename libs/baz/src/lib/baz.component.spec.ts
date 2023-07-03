import {BazComponent} from "./baz.component";

describe('BazComponent', () => {
  let sut: BazComponent;

  beforeEach(() => {
    sut = new BazComponent();
  })

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should display "Baz really rocks" as a title', () => {
    expect(sut.title).toBe('Baz really rocks');
  });
});
