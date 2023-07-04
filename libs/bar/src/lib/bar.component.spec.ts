import { BarComponent } from './bar.component';

describe('BarComponent', () => {
  let sut: BarComponent;

  beforeEach(() => {
    sut = new BarComponent();
  })

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should display "Bar really rocks" as a title', () => {
    expect(sut.title).toBe('Bar really rocks');
  });
});
