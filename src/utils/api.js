import { uuidv1 } from 'uuid/v1'

const api = "https://localhost:3001"

// Generate a unique token for storing your data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export function getCategories(){
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export function getPosts(){
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
}

export function getPostsByCategory({category = 'all'}){
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json()) 
}

export function getPostById({id = ''}){
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json()) 
}

export function postPost({id = uuidv1(), timestamp = Date.now(), title ='', body='', author='', category='react', voteScore=0, deleted=false, commentCount=0}) {
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category })
  }).then(res => res.json())
}

export function putUpdatePost({ id='', title='', body=''}) {
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json())
}

export function postVotePost({ id='', option=''}) {
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, option })
  }).then(res => res.json())
}

export function getPostCommentsById({id = ''}){
  fetch(`${api}/${id}/comments`, { headers })
    .then(res => res.json()) 
}

export function getCommentById({id = ''}){
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json()) 
}

export function postComment({id = uuidv1(), parentId='', timestamp = Date.now(), body='', author='', voteScore=0, deleted=false, parentDeleted=false}) {
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted})
  }).then(res => res.json())
}

export function putUpdateComment({ id='', timestamp='', body=''}) {
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json())
}

export function postVoteComment({ id='', option=''}) {
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  }).then(res => res.json())
}

export function deleteComment({ id='', deleted=true}) {
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ deleted })
  }).then(res => res.json())
}

export function deletePost({ id='', deleted=true}) {
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ deleted })
  }).then(res => res.json())
  .then(d => 
    getPostCommentsById(d.id)
      .then(comments => comments.json().forEach(comment => deleteComment(comments.id)))
  ) 
}