import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 2,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
    ])
  }),

  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' },
    ])
  }),
]
