import moment from "../../node_modules/moment/moment";

export const capitaliseFirst = word => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};

export const changeQmarkToAmp = url => {
  const urlArray = url.split("");
  const firstQ = urlArray.indexOf("?");
  const onlyOneQ = urlArray.map((char, index) => {
    if (char === "?" && index !== firstQ) return "&";
    return char;
  });
  return onlyOneQ.join("");
};

export const formatDate = (longDate, location) => {
  if (longDate === "Just posted") return longDate;
  const sliced = longDate.slice(0, 10);
  if (["articles", "comments"].some(loc => location === loc))
    return moment(sliced, "YYYY-MM-DD").fromNow();
  return sliced;
};
