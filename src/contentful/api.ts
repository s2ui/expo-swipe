'use strict';

const contentful = require('contentful');
const chalk = require('chalk');
const Table = require('cli-table2');

const SPACE_ID = 'immbqw1m25ce';
const ACCESS_TOKEN = 'a7f8ded2847ff80145a1743298502de8774df807f6bf5b40645eb16b400e570a';

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN
});

console.log(chalk.green.bold('\nWelcome to the Contentful JS Boilerplate\n'));
console.log('This is a simplified example to demonstrate the usage of the Contentful CDA\n');

// Entry point of the boilerplate, called at the end.
export function runBoilerplate () {
  return displayContentTypes()
    .then(displayEntries)
    .catch((error: Error) => {
      console.log(chalk.red('\nError occurred:'));
      if (error.stack) {
        console.error(error.stack);
        return
      }
      console.error(error)
    })
}

function displayContentTypes () {
  console.log(chalk.green('Fetching and displaying Content Types ...'));

  return fetchContentTypes()
    .then((contentTypes: any) => {
      // Display a table with Content Type information
      const table = new Table({
        head: ['Id', 'Title', 'Fields']
      });
      contentTypes.forEach((contentType: any) => {
        const fieldNames = contentType.fields
          .map((field: any) => field.name)
          .sort();
        table.push([contentType.sys.id, contentType.name, fieldNames.join(', ')])
      });
      console.log(table.toString());

      return contentTypes
    })
}

export function displayEntries (contentTypes: any) {
  console.log(chalk.green('Fetching and displaying Entries ...'));

  return Promise.all(contentTypes.map((contentType: any) => {
    return fetchEntriesForContentType(contentType)
      .then((entries: any) => {
        console.log(`\These are the first 100 Entries for Content Type ${chalk.cyan(contentType.name)}:\n`);

        // Display a table with Entry information
        const table = new Table({
          head: ['Id', 'Title']
        });
        entries.forEach((entry: any) => {
          table.push([entry.sys.id, entry.fields[contentType.displayField] || '[empty]'])
        });
        console.log(table.toString());

        return entries
      })
  }))
}

// Load all Content Types in your space from Contentful
function fetchContentTypes () {
  return client.getContentTypes()
    .then((response: any) => response.items)
    .catch((error: Error) => {
      console.log(chalk.red('\nError occurred while fetching Content Types:'));
      console.error(error)
    })
}

// Load all entries for a given Content Type from Contentful
function fetchEntriesForContentType (contentType: any) {
  return client.getEntries({
    content_type: contentType.sys.id
  })
    .then((response: any) => response.items)
    .catch((error: Error) => {
      console.log(chalk.red(`\nError occurred while fetching Entries for ${chalk.cyan(contentType.name)}:`));
      console.error(error)
    })
}
