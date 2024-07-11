import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { server } from './mocks/server'

describe('Blog posts', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

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
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument(), { timeout: 2000 })
    const postElements = await screen.findAllByRole('listitem')
    expect(postElements).toHaveLength(2)
    expect(postElements[0]).toHaveTextContent(
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
    )
    expect(postElements[1]).toHaveTextContent('qui est esse')
  })
})
