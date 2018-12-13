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
  console.log(onlyOneQ.join(""));
  return onlyOneQ.join("");
};
