import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestComponentForPosts from '../tests/testComponents/TestComponentForPosts'

describe('usePosts', () => {
  it('fetches posts successfully', async () => {
    render(<TestComponentForPosts authorId={1} />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
      expect(
        screen.getByText('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
      ).toBeInTheDocument()
      expect(screen.getByText('qui est esse')).toBeInTheDocument()
    })
  })

  it('handles the loading state correctly', async () => {
    render(<TestComponentForPosts authorId={null} />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
    })
  })
})
