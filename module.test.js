import { convertToMorseCode, convertToEnglish } from "./module.js";

describe("convertToMorseCode() tests", () => {
  it("should have a return", () => {
    expect(convertToMorseCode("a")).toBe(".-");
    expect(convertToMorseCode("abc")).toBe(".- -... -.-.");
    expect(convertToMorseCode("Hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(convertToMorseCode("ABC")).toBe(".- -... -.-.");
    expect(convertToMorseCode("2")).toBe("..---");
    expect(convertToMorseCode("%")).toBe("");
    expect(convertToMorseCode(" ")).toBe("/");
  });
});

describe("convertToEnglish() tests", () => {
  it("should have a return", () => {
    expect(convertToEnglish(".- -... -.-.")).toBe("ABC");
    expect(convertToEnglish("--. .-. -.-- ..-. ..-. .. -. -.. --- .-.")).toBe(
      "GRYFFINDOR"
    );
    expect(convertToEnglish("----.")).toBe("9");
    expect(convertToEnglish("/")).toBe("");
  });
});
