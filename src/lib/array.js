// Removes undefined null or false values from a given array
export const pruneArray = (arr) => {
  return arr.filter((item) => !!item);
};

// Joins classes and removes undefined, null or false classnames
// Usage: className={cssJoin(["class1", "class2", undefinedVar])}
export const cssJoin = (arr) => {
  return pruneArray(arr).join(" ");
};
