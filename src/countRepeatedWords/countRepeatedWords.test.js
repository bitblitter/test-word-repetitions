import countRepeatedWords from "./countRepeatedWords";

it("should ignore short words (< 2 chars)", () => {
  expect(countRepeatedWords("a a a")).toEqual({});
});

it("should accept long enough words ( 2 chars or more )", () => {
  expect(countRepeatedWords("aa aa aa")).toEqual({ aa: 3 });
});

it("should ignore letter case for words", () => {
  expect(countRepeatedWords("aa AA aA Aa")).toEqual({ aa: 4 });
});

it("should not ignore words with accents", () => {
  expect(countRepeatedWords("áá áá áá")).toEqual({ áá: 3 });
});

it("should include ' in words (such as in \"Shouldn't\")", () => {
  expect(countRepeatedWords("should shouldn't should shouldn't")).toEqual({
    should: 2,
    "shouldn't": 2
  });
});

it("should treat hyphenated words as one word (such as 'go-to')", () => {
  expect(countRepeatedWords("go-to go to go-to go to")).toEqual({
    go: 2,
    to: 2,
    "go-to": 2
  });
});
