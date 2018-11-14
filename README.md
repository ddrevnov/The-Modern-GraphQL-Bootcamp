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

<br/ >

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

# Write your query or mutation here
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


---

**Marley**

<a href="https://jsdev.org">jsdev.org</a>  