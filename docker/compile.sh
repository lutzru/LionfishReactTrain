echo "-------------------------------------- delete old build files"
rm -R app
mkdir app
mkdir app/public

echo "-------------------------------------- building the frontend"
cd ../client
yarn
yarn build
mv build/* ../docker/app/public
