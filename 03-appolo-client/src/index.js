import ApolloBoost, { gql } from 'apollo-boost';


const client = new ApolloBoost({
  uri: 'http://192.168.1.9:4000'
});

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`

client.query({
  query: getUsers
})
  .then((response) => {

    let html = '';

    response.data.users.forEach((user) => {
      html += `
        <div>
          <h3>${user.name}</h3>
        </div>
      `;
    });

    document.getElementById('users').innerHTML = html;
  });

  const getPosts = gql`
    query {
      posts {
        title
        author {
          name
        }
      }
    }
  `;

  client.query({
    query: getPosts
  })
    .then((response) => {
      let html = '<br/><br/>';

      response.data.posts.forEach((post) => {
        html += `
          <div>
            <h3>${post.title}</h3>
            <h4>${post.author.name}</h4>
          </div>
        `;
      });

      document.getElementById('posts').innerHTML = html;
    });