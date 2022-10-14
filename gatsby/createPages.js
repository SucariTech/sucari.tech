const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  /* MDX */
  const MDXresult = await graphql(`
    query{
      allMdx{
        nodes{
          id
          fields{
            slug
          }
          internal{
            contentFilePath
          }
        }
      }
    }
  `);

  if(MDXresult.errors){
    console.error(MDXresult.errors);
    throw Error(MDXresult.errors);
  }

  /* MDX Templates */
  const privacyPolicyPageTemplate = resolve(__dirname, '../src/templates/privacy-policy/index.js');

  MDXresult.data.allMdx.nodes.forEach(node => {
    let template = null,
        path = node.fields.slug;

    const slug = node.fields.slug;
    
    if(slug.includes('privacy-policy/')){
      template = privacyPolicyPageTemplate;
    }

    if(template){
      createPage({
        path,
        component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id
        }
      });
    }
  });

  /* JSON */
  const JSONresult = await graphql(`
    query{
      allJson{
        nodes{
          id
          fields{
            slug
          }
        }
      }
    }
  `);

  if(JSONresult.errors){
    console.error(JSONresult.errors);
    throw Error(JSONresult.errors);
  }

  /* JSON Templates */
  const homePageTemplate = resolve(__dirname, '../src/templates/home/index.js');

  JSONresult.data.allJson.nodes.forEach(node => {
    let template = null,
        path = node.fields.slug;

    const slug = node.fields.slug;
    
    if(slug.includes('home/')){
      template = homePageTemplate;
      path = slug.replace('home/', '');
    }

    if(template){
      createPage({
        path,
        component: template,
        context: {
          id: node.id
        }
      });
    }
  });
}