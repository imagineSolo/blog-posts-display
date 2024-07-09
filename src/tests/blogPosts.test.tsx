import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { useState } from 'react'

vi.mock('../hooks/usePosts', () => {
  const initialPosts = [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
  ]

  return {
    usePosts: () => {
      const [posts, setPosts] = useState(initialPosts)

      const authors = [
        { id: 1, name: 'Leanne Graham' },
        { id: 2, name: 'Ervin Howell' },
      ]

      const filterPostsByAuthor = (authorId: number) => {
        if (authorId === 1) {
          setPosts([
            {
              userId: 1,
              id: 1,
              title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
            },
            {
              userId: 1,
              id: 2,
              title: 'qui est esse',
              body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
            },
          ])
        } else if (authorId === 2) {
          setPosts([
            {
              userId: 2,
              id: 11,
              title: 'et ea vero quia laudantium autem',
              body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi',
            },
            {
              userId: 2,
              id: 12,
              title: 'in quibusdam tempore odit est dolorem',
              body: 'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio',
            },
          ])
        } else {
          setPosts([])
        }
      }

      return { posts, authors, filterPostsByAuthor }
    },
  }
})

describe('Blog posts', () => {
  it('renders the header correctly', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const headerElement = screen.getByText(/blog posts/i)
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveClass('text-5xl', 'text-indigo-500')
  })

  it('renders the AuthorFilter component', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveClass('custom-select p-2 border border-gray-300 rounded')
  })

  it('renders the List component with posts rendered', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const postElements = screen.getAllByRole('listitem')
    expect(postElements).toHaveLength(2)
    expect(postElements[0]).toHaveTextContent(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    )
    expect(postElements[1]).toHaveTextContent('qui est esse')
  })

  it('updates the List component when a new author is selected', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: '2' } })

    await waitFor(() => {
      const postElements = screen.getAllByRole('listitem')
      expect(postElements).toHaveLength(2)
      expect(postElements[0]).toHaveTextContent('et ea vero quia laudantium autem')
    })
  })
})
