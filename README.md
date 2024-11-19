# Strapi backend service
Working title of the project is **studio-preview**. Open source site creator based on headless CMS Strapi backend. 
Strapi allows to create relational structures that are available via json REST API. More about Strapi here: [Strapi docs](https://docs.strapi.io/)

More info is available on the frontend repo: [studio-preview-front](https://github.com/albinoplant/studio-preview-front)

## Run
To run the backend with example pages setup:
+ Rename example sqlite so Strapi uses it `cp -R .tmp.example .tmp`
+ Copy example to .env file
`cp .env.example .env`
+ `npm run develop`
+ Login with example credentials:
    + username: `test@example.com`
    + password: `TestExample1`
+ Play around a bit