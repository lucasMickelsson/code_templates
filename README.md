This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In this application the user can store posts and fetch posts from Wordpress backend Rest API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## WordPress Backend with CPT UI and JSON Basic Authentication

This application utilizes a WordPress backend with Custom Post Types UI (CPT UI) plugin and JSON Basic Authentication plugin. These plugins allow the application to interact with the WordPress REST API to store and fetch posts.

### Setting Up WordPress Locally

To run this application properly, you'll need to set up a WordPress instance locally with the following configurations:

1. Install and activate the Custom Post Types UI (CPT UI) plugin in your WordPress instance.
2. Create custom post types as needed using the CPT UI plugin.
3. Install and activate the JSON Basic Authentication plugin in your WordPress instance to enable basic authentication for the REST API.
4. Ensure that your WordPress instance is running locally on `http://localhost:your_port`.

### Storing and Fetching Posts

Once your WordPress instance is set up locally with the specified plugins, the application can store and fetch posts using the WordPress REST API.

### Note

Make sure to adjust the WordPress API endpoint URL in the application code (`app/components/LoadPosts.js`) to match your local WordPress instance URL.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
