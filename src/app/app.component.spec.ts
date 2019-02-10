import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OmnilaysMainComponent } from './app.component';

describe('OmnilaysMainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        OmnilaysMainComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OmnilaysMainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Omnilays'`, () => {
    const fixture = TestBed.createComponent(OmnilaysMainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Omnilays');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(OmnilaysMainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Omnilays!');
  });
});
