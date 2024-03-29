
# Install

## Install with NEXTJS, TAILWINDCSS and SHADCN


Chart demo

1. Make a repo in Github

https://github.com/csjcode/chart-demo.git

2. NextJS, Tailwindcss

DO Use:
https://nextjs.org/docs/app/building-your-application/styling/tailwind-css

Had some issues:
do not use ~~https://tailwindcss.com/docs/guides/nextjs~~

Updated node

brew update
brew doctor
brew upgrade node
brew link node

3. Shadcn

https://ui.shadcn.com/docs/installation/next

4. I deleted the tailwind.config.js as it conflicting with tailwind.config.ts
5. I followed this to modify layout.tsx (2 areas to make a dark)

    <html className="dark" lang="en">
      <body className={`dark:bg-gray-800 {inter.className}`}>{children}</body>
    </html>

---------------------------------------------------------

lightweight-charts
https://github.com/tradingview/lightweight-charts

React
https://tradingview.github.io/lightweight-charts/tutorials/react/simple

YouTube Video Tutorial playlist:
https://www.youtube.com/watch?v=zxhWjV1-AyE&list=PLwnDHoBU_EKY_xauZ6bvZt7z6rgmH7EHj

Series types:
https://tradingview.github.io/lightweight-charts/docs/series-types


`npm install lightweight-charts`

```js
import { createChart } from 'lightweight-charts';

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
```
---------------------------------------------------------


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
