exports.createPages = async function({actions, graphql}) {
    const {data} = await graphql (`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                  node {
                    frontmatter {
                      slug
                    }
                    id
                  }
                }
            }
        }
    
   `)
 // creat pageinated pages for posts

const postperPage = 3;

const numPages = Math.ceil(data.allMdx.edges.length /postperPage);

Array.from({ length:numPages }).forEach((_,i) => {
    actions.createPage({
        path: i === 0 ? `/` : `/${i +1}`,
        component: require.resolve("./src/templates/allPosts.js"),
        context: {
            limit: postperPage,
            skip: i * postperPage,
            numPages,
            currentPage: i+1,
        },
    })
 })


// creat a single blog post
data.allMdx.edges.forEach(edge =>  {
     const slug = edge.node.frontmatter.slug
     const id = edge.node.id
     actions.createPage({
         path: slug,
         component: require.resolve(`./src/templates/singlePost.js`),
         context: { id },
    })
 })
}
//www.Doodly.com $67