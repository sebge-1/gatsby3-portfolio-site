const getActiveTagfromPath = (pathname) => {
  let pathEndIndex = -2;
  const pathEnding = pathname.split("/").at(pathEndIndex);
  return isNaN(parseInt(pathEnding))
    ? pathEnding
    : pathname.split("/").at(pathEndIndex - 1);
};
export default getActiveTagfromPath;
