import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from './App'

describe('Blog posts', () => {
  it('renders the header correctly', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const headerElement = screen.getByRole('heading', { name: /blog posts/i })
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveClass('text-5xl', 'text-indigo-500')
  })

  it('renders the AuthorFilter component', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
    const selectElement = screen.getByRole('combobox')
    expect(selectElement).toBeInTheDocument()
    expect(selectElement).toHaveClass('text-black bg-white text-lg px-2 py-2 border border-gray-300 rounded')
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

  it('filters posts by author', async () => {
    render(<App />)
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())

    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.selectOptions(screen.getByRole('combobox'), '1')

    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())

    await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(1))
  })

  it('shows and hides loader correctly', async () => {
    render(<App />)
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    await waitFor(() => expect(screen.queryByRole('progressbar')).not.toBeInTheDocument())
  })
})
