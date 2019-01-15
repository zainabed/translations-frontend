import { TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";

import { LocaleForm } from "./locale.form";
import { Locale } from "../model/locale";

describe("Unit test for LocaleForm.\n", () => {
    let localeForm: LocaleForm;
    let form;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                FormBuilder,
                LocaleForm
            ]
        });
    });

    beforeEach(() => {
        localeForm = TestBed.get(LocaleForm);
        form = localeForm.form;
    });

    it("Form should have been defined.\n", () => {
        expect(form).toBeDefined();
    });

    describe("Validation test for name field.\n", () => {
        let name;

        beforeEach(() => {
            name = form.get("name");
        });

        it("Should fail cause name field is empty.\n", () => {
            name.setValue(null);
            expect(name.invalid).toBeTruthy();
        });

        it("Should fail cause name filed size is less than 2.\n", () => {
            name.setValue("1");
            expect(name.invalid).toBeTruthy();
        });

        it("Should fail cause name filed size is more than 20.\n", () => {
            name.setValue("123456789012345678901");
            expect(name.invalid).toBeTruthy();
        });

        it("Should pass cause valid name filed.\n", () => {
            name.setValue("test name");
            expect(name.invalid).toBeFalsy();
        });
    });

    describe("Validation test for code field.\n", () => {
        let code;

        beforeEach(() => {
            code = form.get("code");
        });

        it("Should fail cause code field is empty.\n", () => {
            code.setValue(null);
            expect(code.invalid).toBeTruthy();
        });

        it("Should fail cause code filed size is less than 2.\n", () => {
            code.setValue("1");
            expect(code.invalid).toBeTruthy();
        });

        it("Should fail cause code filed size is more than 6.\n", () => {
            code.setValue("1234567");
            expect(code.invalid).toBeTruthy();
        });

        it("Should pass cause valid code filed.\n", () => {
            code.setValue("se-SV");
            expect(code.invalid).toBeFalsy();
        });
    });

    it("GetData should return valid Locale object.\n", () => {
        let locale = localeForm.getData();
        expect(locale instanceof Locale).toBeTruthy();
    });
});