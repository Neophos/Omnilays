import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OmnilaysMainComponent } from './app.component';
describe('OmnilaysMainComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                OmnilaysMainComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = TestBed.createComponent(OmnilaysMainComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'Omnilays'", function () {
        var fixture = TestBed.createComponent(OmnilaysMainComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Omnilays');
    });
    it('should render title in a h1 tag', function () {
        var fixture = TestBed.createComponent(OmnilaysMainComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to Omnilays!');
    });
});
//# sourceMappingURL=app.component.spec.js.map