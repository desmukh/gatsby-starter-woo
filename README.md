# StyleShout Woo Ported to GatsbyJS

Simple, clean and responsive landing page for your product or service. This is a [GatsbyJS](https://www.gatsbyjs.org/) port of  StyleShout's [Woo](https://www.styleshout.com/free-templates/woo/) template.

[**DEMO**](https://gatsby-starter-woo.netlify.app/)

![Screenshot](screenshot.jpg)

## Getting Started

### Prerequisites
GatsbyJS should be installed in your local environment. See instructions [here](https://www.gatsbyjs.org/docs/preparing-your-environment/) for details.

### Installation
1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using the Gatsby Woo starter
    gatsby new my-project https://github.com/desmukh/gatsby-starter-woo
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit the markdown content files in the `content` folder. Save your changes and the browser will update in real time!

## Site Configuration

The configuration settings and metadata of your new site can be found in the `siteMetadata` object of `gatsby-config.js` at the root of your project directory.

The default settings are:

```js
siteMetadata: {
  title: `Woo - Free Responsive HTML5/CSS3 Template`,
  author: {
    name: `Joe Bloggs`,
  },
  description: `Woo is a clean, modern, landing page site template.`,

  /* Choose and arrange the sections to be displayed on the landing page */
  sections: [
    `hero`,
    `features`,
    `pricing`,
    `call-to-action`,
    `screenshots`,
    `testimonials`,
    `subscribe`
  ],

  /* Configure the navigation menu */
  menuItems: [
    {path: 'features', label: 'Features'},
    {path: 'pricing', label: 'Pricing'},
    {path: 'screenshots', label: 'Screenshots'},
    {path: 'testimonials', label: 'Testimonials'},
    {path: 'subscribe', label: 'Subscribe'},
  ],

  /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
  social: [
    { service: `Facebook`,
      url : `https://facebook.com/styleshout`,
      fa: `facebook` },
    { service: `Twitter`,
      url : `https://twitter.com/styleshout`,
      fa: `twitter` },
    { service: `GitHub`,
      url : `https://github.com/desmukh/gatsby-starter-woo`,
      fa: `github` },
  ],

  /* Path to favicon and logo (located inside the 'static' folder) */
  favicon: `favicon.png`,
  logo: `/images/logo.png`,

  /* Logo and text to show in footer */
  footer: {
    logo: `/images/footer-logo.png`,
    text: `This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.`,
  },

  /* Address and contact info to show in footer */
  address: {
    line1: `1600 Amphitheatre Parkway`,
    line2: `Mountain View, CA`,
    line3: `94043 US`,
  },
  contacts: [
    { text: `647.343.8234`, url: `tel:6473438234` },
    { text: `123.456.7890`, url: `tel:1234567890`},
    { text: `someone@woosite.com`, url: `mailto:someone@woo.com`},
  ],
},
```

## Customising Content

### Landing page
The content for the landing page can be found in the `content/` folder, in which each [YAML](https://cheat.readthedocs.io/en/latest/yaml.html) file corresponds to a particular section on the page.

### Additional pages
To add more pages, just add a new `.js` file in the `src/pages/` directory and Gatsby will automatically create a new page with the same name as the file.

These files are written in [JSX](https://www.gatsbyjs.org/docs/glossary/jsx/). A sample/style guide can be found [here](https://gatsby-starter-woo.netlify.app/demo/) [(source)](https://github.com/desmukh/gatsby-starter-woo/blob/master/src/pages/demo.js).

### Images
Currently images are stored in the `static/` folder.

## Credits
This theme was originally designed by [StyleShout](https://www.styleshout.com/free-templates/woo/) and was ported to Gatsby by [Fahad Desmukh](https://github.com/desmukh/).

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details
