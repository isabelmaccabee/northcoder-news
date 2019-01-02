# Northcoder News

## A news forum to keep up-to-date with all the goings-on at NorthCoders: https://northcoder-news.netlify.com

Made using React and hosted on Netlify, this front-end uses JSX, HTML and CSS. It also makes use of packages such as @reach/router, lodash, moment, react-alert and axios, with the latter being used for requesting news data back from a SQL database via the site's backend API using Knex: https://northcoder-news-api.herokuapp.com/api/.

## User actions

As a user of this site, you are able to:

- Read articles (with sort-by queries used)
- Vote on each article
- Submit your own article
- Delete your own articles
- Read the comments for each article
- Vote on each comment
- Submit your own comment for each article
- Delete yor own comments
- Submit a new topic for articles to be grouped by

## How to use this Front-End

Clone this repo from github (git clone [repo url here]) and navigate (cd) into the folder /northcoder-news. Using CLI, execute the 'npm install' command to install all the relevant dependencies, then execute 'npm start' to create a localhost version of the site.

The defualt log-in value is 'jessjelly' for your ease of accessing the site. Other valid usernames (checked against the users in the Knex database) that you could use include: 'tickle122', 'cooljmessy', 'weegembump' and 'grumpy19'.
