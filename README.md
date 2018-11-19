# [Udemy, Andrew Mead] The Modern GraphQL Bootcamp (Advanced Node.js) [2018, ENG]

<br/>

## 02 GraphQL Basics. Schemas and Queries

    $ mkdir 01-graphql-basics
    $ cd 01-graphql-basics
    $ npm init -y
    $ npm install --save babel-cli babel-preset-env

<br/>

### 07 Creating Your Own GraphQL API

    $ npm install --save graphql-yoga              

    $ npm start

http://localhost:4000/


<br/>

![Application](/img/pic-02-01.png?raw=true)

<br/>

### 08 GraphQL Scalar Types

<br/>

![Application](/img/pic-02-02.png?raw=true)

<br/>

### 09 Live Reload for GraphQL-Yoga

<br/>

### 10 Creating Custom Types

<br/>

![Application](/img/pic-02-03.png?raw=true)

<br/>

### 11 Operation Arguments

<br/>

![Application](/img/pic-02-04.png?raw=true)

<br/>

### 12 Working with Arrays-1

<br/>

![Application](/img/pic-02-05.png?raw=true)

<br/>

### 13 Working with Arrays-2

<br/>

![Application](/img/pic-02-06.png?raw=true)

<br/>

![Application](/img/pic-02-07.png?raw=true)

<br/>

### 14 Relational Data. Basics

<br/>

![Application](/img/pic-02-08.png?raw=true)


<br/>

### 15 Relational Data. Arrays

<br/>

![Application](/img/pic-02-09.png?raw=true)


<br/>

### 16 Comment Challenge-1

<br/>

![Application](/img/pic-02-10.png?raw=true)

<br/>

### 17 Comment Challenge-2

<br/>

![Application](/img/pic-02-11.png?raw=true)

<br/>

![Application](/img/pic-02-12.png?raw=true)

<br/>

### 18 Comment Challenge-3

<br/>

![Application](/img/pic-02-13.png?raw=true)

<br/>

![Application](/img/pic-02-14.png?raw=true)

<br/>

## 03 GraphQL Basics. Mutations

<br/>

### 02 Creating Data with Mutations-1

    $ npm install --save uuid

<br/>

![Application](/img/pic-03-01.png?raw=true)

<br/>

### 03 Creating Data with Mutations-2

<br/>

![Application](/img/pic-03-02.png?raw=true)

<br/>

![Application](/img/pic-03-03.png?raw=true)

<br/>

![Application](/img/pic-03-04.png?raw=true)


<br/>

### 04 The Object Spread Operator with Node.js

    $ npm install --save babel-plugin-transform-object-rest-spread

<br/>

### 05 The Input Type  

<br/>

### 06 Deleting Data with Mutations-1

<br/>

### 07 Deleting Data with Mutations-2

<br/>

![Application](/img/pic-03-05.png?raw=true)

<br/>

### 08 A Pro GraphQL Project Structure-1

<br/>

### 09 A Pro GraphQL Project Structure-2

<br/>

### 10 Updating Data with Mutations-1

<br/>

![Application](/img/pic-03-06.png?raw=true)

<br/>

### 11 Updating Data with Mutations-2

<br/>

![Application](/img/pic-03-07.png?raw=true)

<br/>

![Application](/img/pic-03-08.png?raw=true)


<br/>

## 04 GraphQL Basics. Subscriptions

<br/>

### 02 GraphQL Subscription Basics

https://github.com/apollographql/graphql-subscriptions

<br/>

![Application](/img/pic-04-01.png?raw=true)

<br/>

### 03 Setting up a Comments Subscription

<br/>

![Application](/img/pic-04-02.png?raw=true)

<br/>

![Application](/img/pic-04-03.png?raw=true)


<br/>

### 04 Setting up a Posts Subscription


**Create post**

```js
mutation {
  createPost (
    data: {
      title: "My new post",
      body: "My new post body",
      published: true,
      author: "3"
    }
  ) {
    id
    title
    body
    published
  }
}

```

<br/>

**Subscription post**

```js
subscription {
  post {
    id
    title
    body
    author {
      id
      name
    }
  }
}
```

<br/>

![Application](/img/pic-04-04.png?raw=true)

<br/>

### 05 Expanding the Posts Subscription for Edits and Deletions

<br/>

![Application](/img/pic-04-05.png?raw=true)


<br/>

```js 
mutation {
  deletePost (
    id: "12"
  ) {
    id
    title
    body
    published
  }
}
```
<br/>

![Application](/img/pic-04-06.png?raw=true)


<br/>

```js
mutation {
  updatePost(
    id: "10",
    data: {
      body: "This is my new body"
    } 
  )
  {
    id
    title
    body
    published
  }
}
```

<br/>

![Application](/img/pic-04-07.png?raw=true)

<br/>

### 06 Expanding the Comments Subscription for Edits and Deletions

```js
mutation {
  createComment(
    data: {
      text: "My new comment",
      author: "1",
      post: "10"
    }
  ) {
    id
    text
  }
}
```

<br/>

```js

subscription {
  comment(postId: "10"){
    mutation
    data {
      id
      text
      author{
        id
        name
      }
    }
    
  }
}

```

<br/>

![Application](/img/pic-04-08.png?raw=true)


```js

mutation {
  updateComment(
    id: "b11c9e31-5686-4cb4-b1a5-c82a5b2a2654",
    data: {
      text: "This is my new comment text!"
    }
  ){
    id
    text
  }
}

```

<br/>

![Application](/img/pic-04-09.png?raw=true)


```js

mutation {
  deleteComment(id: "b11c9e31-5686-4cb4-b1a5-c82a5b2a2654"){
    id
    text
  }
}
  
```  

<br/>

![Application](/img/pic-04-10.png?raw=true)


<br/>

### 07 Enums

<br/>

## 05 Database Storage with Prisma

<br/>

### 02 What is Prisma

<br/>

### 05 Prisma Ubuntu Setup

We made heroku postgresql database.

<br/>

![Application](/img/pic-05-01.png?raw=true)

We installed docker and docker-compose

<br/>

### 06 Prisma 101

http://prisma.io

    $ npm install -g prisma

<br/>

    $ prisma -v
    prisma/1.20.6 (linux-x64) node-v11.1.0

    $ cd 02-graphql-prisma/

<br/>

    $ prisma init prisma

    --> Use existing database
    --> PostgreSQL
    --> ? Does your database contain existing data? (No)


    $ cd prisma
    $ docker-compose up -d
    $ prisma deploy

http://localhost:4466/


<br/>

### 07 Exploring the Prisma GraphQL API

```js

mutation {
  createUser(
    data: {
      name: "Andrew Mead"
    }
  )
  {
    id
    name
  }
}
  
```
<br/>

![Application](/img/pic-05-02.png?raw=true)

<br/>

![Application](/img/pic-05-03.png?raw=true)


<br/>


```js

mutation {
  updateUser(
    where: {
      id: "cjoho6xt0000e0971hfc104dp"
    }
  ,
  data: {
  	name: "Andrew"
		}
  ){
    id
    name
  }
}

```

<br/>

### 08 Add Post type to Prisma

```js

mutation {
  createPost(
    data: {
      title: "Prisma post"
      body: "Some Text",
      published: false,
      author: {
        connect: {
          id: "cjoiifovh000c0988np1hga7c"
        }
      }
    }
  )
  {
    id
    title
    body
    published
    author {
      id
      name
    }
  } 
}

```

<br/>

### 09 Adding Comment Type to Prisma

    $ prisma reset
    $ prisma deploy

```js
mutation {
  createUser(
    data: {
      name: "Andrew Mead"
      email: "mead@example.com"
    }
  )
  {
    id
    name
    email
  }
  
}
```

<br/>

```js
# Write your query or mutation here
mutation {
  createPost(
    data: {
      title: "Prisma post"
      body: "Some Text",
      published: false,
      author: {
        connect: {
          id: "cjoipm2kq000d0a76qpdn5zrp"
        }
      }
    }
  )
  {
    id
    title
    body
    published
    author {
      id
      name
    }
  }
  
}
  
```

<br/>

```js
mutation {
  updatePost(
    where: {
      id: "cjoipoa66000m0a76odfxa7wv"
    }
  ,
  data: {
  	published: true
		}
  ){
    id
    title
    body
    published
  }
}
```

<br/>

<hr/>

```js

mutation {
  createUser(
    data: {
      name: "Andrew"
      email: "andrew@example.com"
    }
  )
  {
    id
    name
    email
  }
  
}
  
```


<br/>

```js

mutation {
  createComment(
    data: {
      text: "A comment from Prisma GraphQL"
      author: {
        connect: {
          id: "cjoiptotu000t0a76ld1oaz0p"
        }
      },
      post: {
        connect: {
          id: "cjoipoa66000m0a76odfxa7wv"
        }
      }
    }
  )
  {
    id
    text
    author {
      id
      name
    }
  }
  
}
  
```

<br/>

```js

query{
  comments {
    id
    text
    author {
      id
      name
    }
  }
}

```

<br/>

### 10 Integrating Prisma into a Node.js Project

    $ cd 01-graphql-basics/
    $ cp -R * ../02-graphql-prisma/

    https://github.com/prisma/prisma-binding

<br/>

    $ npm install --save prisma-binding
    $ npm install --save graphql-cli

    $ npm run get-schema


<br/>

### 11 Using Prisma Bindings

    $ npm start

output:

```json

[
  {
    "id": "cjoipm2kq000d0a76qpdn5zrp",
    "name": "Andrew Mead",
    "email": "mead@example.com",
    "posts": [
      {
        "id": "cjoipoa66000m0a76odfxa7wv",
        "title": "Prisma post"
      }
    ]
  },
  {
    "id": "cjoiptotu000t0a76ld1oaz0p",
    "name": "Andrew",
    "email": "andrew@example.com",
    "posts": []
  }
]

```

<br/>

### 12 Mutations with Prisma Bindings

<br/>

### 13 Using Async and Await with Prisma Bindings

<br/>

### 13 Using Async and Await with Prisma Bindings

<br/>

### 14 Checking If Data Exists Using Prisma Bindings

<br/>

### 15 Customizing Type Relationships

    $ prisma deploy

<br/>

### 16 Modeling a Review System with Prisma. Set Up

    $ cd ../prisma-review-website/
    $ prisma deploy

http://localhost:4466/reviews

<br/>

### 17 Modeling a Review System with Prisma. Solution

    $ prisma deploy

http://localhost:4466/reviews

<br/>

```js

mutation {
  createBook (
    data: {
      title: "Rest",
      author: "Alex Pang",
      isbn: "abc123"
    }
  ) {
    id
    title
    author
    isbn
    reviews {
      id
      text
      rating
    }
  }
}

```

<br/>

```js

mutation {
  createUser(
    data: {
      username: "SleepyGuy"
    }
  ) {
    id
    username
  }
}

```

<br/>

```js

mutation {
  createReview(
    data: {
      text: "It was a good read.",
      rating: 5,
      book: {
        connect: {
          id: "cjoj2hhoa006p0a76gq27yuj9"
        }
      }, 
      author: {
        connect: {
          id: "cjoj2karr006w0a76epo1by00"
        }
      }
    }
  ) {
    id
    text
    rating
  }
}

```

<br/>

```js

query {
  books {
    id
    title
    author
    isbn
    reviews {
      id
      text
      rating
      author {
        id
        username
      }
    }
  }
}

```

```js

mutation{
  deleteUser(
    where: {
      id: "cjoj2r3be00760a76xx66d1g8"
    }
  ){
    id
    username
  }
}

```

```js

mutation {
  deleteBook(
    where: {
      id: "cjoj2hhoa006p0a76gq27yuj9"
    }
  ) {
    id
    title
  }
}

```

<br/>

```js

query {
  reviews {
    id
  }
}

```


<br/>

## 06 Authentication with GraphQL

<br/>

### 02 Adding Prisma into GraphQL Queries

<br/>

![Application](/img/pic-06-01.png?raw=true)

<br/>

![Application](/img/pic-06-02.png?raw=true)

<br/>

### 03 Integrating Operation Arguments

<br/>

![Application](/img/pic-06-03.png?raw=true)

<br/>

### 04 Refactoring Custom Type Resolvers

<br/>

### 05 Adding Prisma into GraphQL Mutations


```js

mutation {
  createUser (
    data: {
      name: "Jess",
      email: "jess@example.com"
    }
  ) {
    id
    name
    email
  }
}

```

<br/>

```js


mutation{
  deleteUser(id: "cjoiptotu000t0a76ld1oaz0p"){
    id
    name
    email
  }
}

```

<br/>

### 06 Adding Prisma into GraphQL Update Mutations-1

```js

mutation {
  updateUser(
    id: "cjoipm2kq000d0a76qpdn5zrp",
  data: {
  	name: "Andrew"
		}
  ){
    id
    name
  }
}

```

<br/>

```js

mutation {
  createPost (
    data: {
      title: "My new post",
      body: "My new post body",
      published: true,
      author: "cjok8n13i000k09767bs8gh5a"
    }
  ) {
    id
    title
    body
    published
    author {
      id
      name
    }
  }
}

```

<br/>

### 07 Adding Prisma into GraphQL Update Mutations-2

    $ npm run get-schema

<br/>

### 08 Adding Prisma into GraphQL Subscriptions

```js

subscription {
  comment(postId: "10"){
    mutation
    node {
      id
      text
      author{
        id
        name
      }
    }
    
  }
}

```

<br/>

### 09 Closing Prisma to the Outside World

    $ prisma deploy
    $ prisma token


<br/>

### 10 Allowing for Generated Schemas

    $ prisma delete
    $ prisma deploy
    $ npm run get-schema

<br/>

### 11 Storing Passwords

    $ npm uninstall uuid
    $ npm install --save bcryptjs

```js

mutation {
  createUser (
    data: {
      name: "Jess",
      email: "jess@example.com",
      password: "12345678"
    }
  ) {
    id
    name
    email
    password
  }
}

```

<br/>

### 12 Creating Auth Tokens with JSON Web Tokens

    $ npm install --save jsonwebtoken

<br/>

### 13 Logging in Existing Users

```js
mutation {
  createUser (
    data: {
      name: "Andrew",
      email: "andrew@example.com",
      password: "12345678"
    }
  ) {
    user {
      id
      name
      email
    }
    token
  }
} 
```
<br/>

```js

mutation {
  login(
    data: {
      email:"andrew@example.com",
      password: "12345678"
    }
  ) {
    user {
      id
      name
    }
    token
  }
}

```

<br/>

### 14 Validating Auth Tokens

{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjam9ram5mbW8wMDJsMDk3NnlsMWJ2cHpnIiwiaWF0IjoxNTQyNDA0MjIzfQ.4A-G50GPGxjcIEsHtEmdY5AvHdKxFlvB15TzZ2hVEcc"
}

<br/>

![Application](/img/pic-06-04?raw=true)


<br/>

### 15 Locking Down Mutations (Users)

<br/>

### 16 Locking Down Mutations (Posts and Comments)

<br/>

### 17 Locking Down Queries-1

<br/>

![Application](/img/pic-06-05?raw=true)

---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>  