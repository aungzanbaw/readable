const api = "https://localhost:3001"

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const get = (bookId) => fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

