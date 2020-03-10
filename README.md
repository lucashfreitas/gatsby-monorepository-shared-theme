# gatsby-monorepository-shared-theme (Under development)

This repository shows how you can setup multiple websites using the same "layout" theme and changing specific things as colors, images. This makes possible to build a SaaS application for multiple customers using the same code base, for example.


## Why?

In many situations, we can have multiples websites using the same components, layouts, features , services, etc. When working with gatsby we might need even to share some GraphQL queries from different accounst on same sources (contentful, etc)

Let's imagine you have to set up a same web application with the same data structure for different customers, then you might need to change little things such as images, colors, and all the data with is sitting on your backend crm system. (I will use contentful in this example).

We will use [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) which is perfect for this situation. We'll share componentes, services, graphQL queries, pages, everything! 

## Monorepository?

You might be thinking, does not make sense to keep all the websites and the shared theme in different respositories, right? To solve that we will use lerna/yarn workspaces to manage our monorepository structure. It will be super easy to integrate that with web hosting services such as [Netlify](https://www.netlify.com/)


## Stack :rocket:

- **Gatsby**
- **Contentful**
- **Lerna/Monorepository**
- **Netlify for deployment**




