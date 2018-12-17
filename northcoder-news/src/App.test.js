import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  capitaliseFirst,
  formatDate,
  changeQmarkToAmp
} from "../src/utils/index";

describe("Smoke test", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("/utils functions", () => {
  describe("capitliseFirst", () => {
    it("when passed single word string, first letter is capitalised", () => {
      const singleWord = "hello";
      const capitlised = capitaliseFirst(singleWord);
      expect(capitlised[0]).toEqual(singleWord[0].toUpperCase());
      expect(capitlised[0]).toBe("H");
    });
  });
  describe("changeQmarkToAmp", () => {
    it('when passed url with only one "?", returns same output as input', () => {
      const url = "www.example-website.com?search=true";
      expect(changeQmarkToAmp(url)).toEqual(url);
    });
    it('when passed url with multiple "?"s, returns only first "?" is in output, other are "&', () => {
      const url = "www.example-website.com?search=true?order_by=false";
      expect(changeQmarkToAmp(url)).not.toBe(url);
      const QmarkCounter = changeQmarkToAmp(url)
        .split("")
        .reduce((acc, val) => {
          if (val === "?") acc++;
          return acc;
        }, 0);
      expect(QmarkCounter).toEqual(1);
      expect(changeQmarkToAmp(url)).toEqual(
        "www.example-website.com?search=true&order_by=false"
      );
    });
  });
  describe("formatDate", () => {
    it("when passed date but no location, slices dates so just YYYY-MM-DD", () => {
      expect(formatDate("2018-01-01helloworldhelloworld0000")).toEqual(
        "2018-01-01"
      );
    });
    it('when passed long date and articles/comments as 2nd param, get "fromNow" time', () => {
      const fromNowArticles = formatDate("2018-01-01helloworl0000", "articles");
      expect(/[a-z]/gi.test(fromNowArticles)).toEqual(true);
      const fromNowComments = formatDate("2018-01-01helloworl0000", "comments");
      expect(/[a-z]/gi.test(fromNowComments)).toEqual(true);
    });
  });
});
