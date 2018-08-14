const _ = require('lodash');
const unirest = require('unirest');

const endpoint = _.template("https://duckduckgo.com/local.js?q=<%= query %>&tg=maps_places&rank=1&id=<% id %>&strong_hint=<%= strongHint %>&l=wt-wt")

let find = process.argv[2];
let near = process.argv[3];

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim()
    .trim('-');
}

unirest.get(endpoint({
    query: encodeURIComponent(find),
    id: slugify(find+ '-' + near),
    strongHint: slugify(find+ '-' + near)
}))
.end(function (response) {
    if(!response.error) return console.log(JSON.stringify( JSON.parse(response.body), true, '    ') );
    return console.log(response.error)
});