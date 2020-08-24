# gatsby-monorepository-shared-theme - Under development :runner:

Blog Post: [https://lucasfsantos.com/gatsby-react-shared-theme-monorepository](https://lucasfsantos.com/gatsby-react-shared-theme-monorepository)

This repository shows how you can setup multiple websites using the same "layout" theme and changing specific things as colors, images. This makes possible to build a SaaS application for multiple customers using the same code base, for example.

![Shared-theme-arch.png](https://d33wubrfki0l68.cloudfront.net/29613106f229b55f39ef78a2eb1bff263ed5ef57/0a1ce/media/gatsby-theme-right.png)

## Why?:point_up:

In many situations, specially for SaaS applications, we can have multiples web applications using the same components, layouts, features , services, etc.

Let's imagine you have to set up a same web application with the same data structure for different customers, then you might need to change little things such as images, colors, and all the data with is sitting on your backend crm system. (I will use contentful in this example).

We will use [Gatsby Theme](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) which is perfect for this situation. We'll share componentes, services, graphQL queries, pages, everything!

It's easy, simple to maintain & deploy!

## Utility? :muscle:

If you want to have completely separated and idenpendent web applications that share same logic, pages but differ in specific aspects like colors, data, you can wrap all that logic in a shared plugin and use that in your web applications. 

## Positive Points? :+1:

- Maintenability: If your functions code on shared theme are tested and working fine, you will be sure that it will work across all the websites. If you find a bug, you can fix it for multiple websites at once, etc.
- Dry Code: You won't duplicate same things across different websites.
- Development Speed: You can abstract things and build an entire website by just importing a plugin and adding things to configuration. You can even use the shared theme as a npm package and build multiple web applications quickly.


## Negative Points? :thumbsdown:

- Abstractions: Abstractions are great, right? You save time, your code is clean and not repeatable, but...... In some cases it can make **things really complex** and **inflexible**, so this solution is definitely not a good fit for all cases. Be careful when delegating things to the shared theme. You might want to watch these two great talks done by [Chenglow](https://github.com/chenglou) and [Dan Abramov](https://github.com/gaearon), you will get easily what I mean with that: 

  - [The Wet CodeBase by Dan Abramov](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase)
  - [On the Aspect of Abstraction by Cheng Lou](https://www.youtube.com/watch?v=mVVNJKv9esE)


## Monorepository? :muscle:

You might be thinking, does not make sense to keep all the websites and the shared theme in different respositories, right? To solve that we will use lerna/yarn workspaces to manage our monorepository structure. It will be super easy to integrate that with web hosting services such as [Netlify](https://www.netlify.com/)

## Stack :rocket:

- **Gatsby**
- **Contentful**
- **Lerna/Yarn Workspaces**
- **Netlify for deployment**
