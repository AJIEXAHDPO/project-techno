const importImages = (list) => {
  const placeholder = require("@images/no_image.jpg");
  const imageImports = {};

  list.forEach((elem) => {
    try {
      imageImports[elem.img] = elem.img ? require(`@images/${elem.img}`) : placeholder;
    } catch (error) {
      console.log(`Import Error: no ${elem.img} exists`);
      imageImports[elem.img] = placeholder;
    }
  }
  );

  return imageImports;
}

const importImage = (img) => {
  const placeholder = require("@images/no_image.jpg");
  let imageImport;
  try {
    imageImport = img ? require(`@images/${img}`) : placeholder;
  } catch (error) {
    console.error(`Import Error: no ${img} exists`);
    imageImport = placeholder;
  }
  return imageImport;
}


export { importImages, importImage };