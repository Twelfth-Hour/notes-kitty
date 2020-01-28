rm -rf dist
mkdir dist
cp -a ./src/ dist/
yarn build

mkdir dist/lib
cp ./lib/* dist/lib
cp ./*.png ./dist
cp ./manifest.json ./dist
cp ./popup.html ./dist

mkdir dist/config
cp ./config/* dist/config

cp -a ./assets/ dist/
