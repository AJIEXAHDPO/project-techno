const importImages = (list) => {
  const placeholder = require("@images/14hq.jpeg");
  const imageImports = {};
  list.forEach((elem) => {
      imageImports[elem.img] = elem.img? require(`@images/${elem.img}`): placeholder;
    }
  );
  return imageImports;
}

export {importImages};