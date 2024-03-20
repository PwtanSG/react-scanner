# Simple QR and barcode scanner

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`
creates or update build folder which contain the production build of the app

### AWS S3 cli
To create bucket `aws s3 mb s3://react-scan --profile admins3`
To remove all files in bucket `aws s3 rm s3://react-scan --recursive --profile admins3`

### `client-s3-deploy`
update aws-s3 bucket with the content in build folder

### `"client-deploy-cloudfront"`
this will first build (`npm run build`) then update aws-s3 bucket with the content in build folder

### `client-cloudfront`
invalidate cloudfront