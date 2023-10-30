`const { readFile, writeFile } = require('fs/promises');
const Logo = require('./index');




readFile('./inputs/data.json', 'utf-8', ( err, jsonString) =>
{})
  .then((json) => {
    const logoData = JSON.parse(json);
    // Use BlogPost to generate the html
    const logoDetails = new logoMaker(
      logoData.logo,
      logoData.textColor,
      logoData.shape,
      logoData.shapeColor
    );
    const html = post.render();

    // Use return with the writeFile method which returns a promise so that another .then() can be chained that will
    // wait for writeFile to resolve.
    return writeFile('./dist/post.html', html);
  })
  .then(() => {
    // This function will only run after the asynchronous call to writeFile has resolved.
    console.log('Created post.html');
  });`