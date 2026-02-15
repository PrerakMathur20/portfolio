# Personal Portfolio

[![Site preview](/public/site-preview.png)](https://prerak.tech)

My portfolio to showcase projects and experience as a Software Development Engineer. Built with [Next.js](https://nextjs.org/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

## Install & run

Make sure you have nodejs `18.0.0` or higher and npm `8.6.0` or higher installed. Install dependencies with:

```bash
npm install
```

Once it's done start up a local server with:

```bash
npm run dev
```

To view the components storybook:

```bash
npm run storybook
```

To create a production build:

```bash
npm run build
```

## Deployment

I've set up the site using AWS for hosting and serverless functions. You'll need an AWS account and the AWS CLI installed in order to deploy.

Deploy the site to s3:

```bash
npm run deploy
```

Deploy serverless functions:

```bash
cd functions
```

```bash
npm run deploy:api
```

## Credits

This portfolio is based on the amazing template by [Hamish Williams](https://github.com/HamishMW/portfolio). The design and components have been customized to showcase my personal projects and experience.

All projects and work experience listed are my own.

## FAQs

<details>
  <summary>How do I change the color on the <code>DisplacementSphere</code> (blobby rotating thing in the background).</summary>
  
  You'll need to edit the fragment shader. [Check out this issue for more details](https://github.com/HamishMW/portfolio/issues/19#issuecomment-870996615).
</details>

<details>
  <summary>How do I get the contact form to work?</summary>
  
  It's set up using a serverless function with AWS Lambda. You'll need to set up an AWS account and deploy the function. [Refer to this issue for more details](https://github.com/HamishMW/portfolio/issues/21#issuecomment-958727113).
</details>
