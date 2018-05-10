/**
 * 
 * @param input 
 * @param fixture 
 * @param errorId 
 * @param expectNull 
 */
export function ExpectFormError(input, fixture, errorId, expectNull) {
    input.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    let errorMesage = fixture.debugElement.nativeElement.querySelector(errorId);
    if (expectNull) {
        expect(errorMesage).toBeNull();
    } else {
        expect(errorMesage).not.toBeNull();
    }

}