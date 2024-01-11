import { convertToMorseCode, convertToEnglish } from "./module";

describe("convertToMorseCode() tests", () => {
  it("should have a return", () => {
    expect(convertToMorseCode("a")).toBe(".-");
    expect(convertToMorseCode("abc")).toBe(".- -... -.-.");
    expect(convertToMorseCode("Hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(convertToMorseCode("ABC")).toBe(".- -... -.-.");
    expect(convertToMorseCode(2)).toBe("");
  });
});

describe("convertToEnglish() tests", () => {
  it("should have a return", () => {
    expect(convertToMorseCode("--.. -.-- -..-")).toBe("ZYX");
    expect(convertToMorseCode("--. .-. -.-- ..-. ..-. .. -. -.. --- .-.")).toBe(
      "GRYFFINDOR"
    );
    expect(convertToMorseCode("%")).toBe("");
  });
});
