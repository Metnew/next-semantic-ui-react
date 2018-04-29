# Next-Semantic.UI-React

- [Next-Semantic.UI-React](#next-semanticui-react)
    - [Quickstart](#quick-start)
    - [Environment variables](#environment-variables)
    - [Dependencies](#dependencies)
        - [Client:](#client)
        - [Webpack](#webpack)
    - [FAQ](#faq)
        - [Static assets](#static-assets)
        - [Theming](#theming)
        - [Serverless + `up`](#serverless-up)
    - [Author](#author)


**Demo: https://next-suir.now.sh**

## Quickstart

```bash
    # Install
    git clone --depth=1 --single-branch https://github.com/Metnew/next-semantic-ui-react.git
    cd next-semantic-ui-react
    npm install
    # Development
    npm run dev
    # Build
    npm run build
    # Production
    PORT=$PORT npm run start # by default PORT is 3000
    # Deploy with `now`:
    now
    # Deploy with `up`:
    up 
    # apex/up only: Don't forget to set `assetPrefix: "/staging"` in `next.config.js`, if you deploy to staging environment without custom domain.
```

## Environment variables

- `process.env.PORT` - port for production running, required during `npm start`. Default: `3000`.

## Dependencies

### Client:

- **[Flow](https://flow.org/en/)** - static typing rocks!
- **[React 16](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**
- **SASS**, **[PostCSS](https://github.com/postcss/postcss)**, and **[styled-components](https://github.com/styled-components/styled-components)**.
- **[Redux-thunk](https://github.com/gaearon/redux-thunk)**, **[Redux-Devtools-Extension](https://github.com/zalmoxisus/redux-devtools-extension)**
- **[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)**
- **[Semantic-ui-react](http://react.semantic-ui.com/)** - UI components.
- **[Lodash](https://lodash.com/)** - SUIR dependency.

### Webpack

* Babel: `stage-0` and few known plugins.
* **[optimize-js-plugin](https://github.com/vigneshshanmugam/optimize-js-plugin)**
* **[wepback-assets-manifest](https://www.npmjs.com/package/webpack-assets-manifest)**


> Some `devDependencies` exist in production deps for `up` compability. Because `next.js` requires own config during start, which requires webpack plugins. 

## FAQ

### Static assets?

`/static` folder + `url-loader`.

### Theming?

Yes, with `styled-components'` `<ThemeProvider>` it's possible to specify a color theme.

### Serverless + `up`

These vars are required if you're deploying using `.gitlab-ci.yml`:

- `process.env.AWS_ACCESS_KEY_ID` - AWS access key
- `process.env.AWS_SECRET_ACCESS_KEY` - AWS secret key

Check [`.gitlab-ci.yml`](./.gitlab-ci.yml) for more info.

### Deploy

Optimized to deploy with `apex/up`.
Could be deployed to `now` too.

## Author

Vladimir Metnew [vladimirmetnew@gmail.com](mailto:vladimirmetnew@gmail.com)
