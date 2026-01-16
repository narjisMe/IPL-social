import { validateEmail } from "../services/email.service";

describe("Email validation", () => {
  it("return true valid email", () => {
    expect(validateEmail("narjis.benmessoud@gmail.com")).toBe(true);
  });

  it("return false invalid email", () => {
    expect(validateEmail("narjis.benmessoud.gmail.com")).toBe(false);
  });
  
});