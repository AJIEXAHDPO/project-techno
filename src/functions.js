const importImages = (list) => {
  const placeholder = require("@images/14hq.jpeg");
  const imageImports = {};

      list.forEach((elem) => {
        try {
          imageImports[elem.img] = elem.img? require(`@images/${elem.img}`): placeholder;
        } catch (error) {
          console.log(`Import Error: no ${elem.img} exists`);
          imageImports[elem.img] = placeholder;
        }
      }
    );
  
  return imageImports;
}

export {importImages};