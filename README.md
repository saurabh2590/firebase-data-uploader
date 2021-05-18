* To run the script:
  * Run `npm install`
  * Run `find ../material-design-icons -name '*.png' | grep 'materialicons/48dp/2x' | xargs -I{} node src/smart-home-icon-uploader.js {}`
  * Assumes that material-design-icons repo is cloned at same level as this project. 
