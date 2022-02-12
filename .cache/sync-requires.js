const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---node-modules-gatsby-theme-chronoblog-src-pages-404-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/pages/404.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-pages-tags-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/pages/tags.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-templates-link-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/templates/link.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-templates-note-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/templates/note.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-templates-post-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/templates/post.js"))),
  "component---node-modules-gatsby-theme-chronoblog-src-templates-tag-template-js": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/node_modules/gatsby-theme-chronoblog/src/templates/tag-template.js"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/src/pages/index.mdx"))),
  "component---src-pages-projects-mdx": hot(preferDefault(require("/Users/mikolaj/dev_priv/kontrolqa/src/pages/projects.mdx")))
}

