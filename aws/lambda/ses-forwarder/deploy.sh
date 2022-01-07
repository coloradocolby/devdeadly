#/bin/sh
LAMBDA_FN="devdeadly-ses-forwarder"

npm i

echo "Zipping..."
zip -r lambda.zip .
echo "Zipped 🤐"

echo "Updating $LAMBDA_FN..."
aws lambda update-function-code --function-name $LAMBDA_FN \
    --zip-file fileb://./lambda.zip \
    --profile personal
echo "Updated!"

echo "Cleaning up..."
rm -rf lambda.zip
echo "Clean!"
