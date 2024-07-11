import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestComponentForAuthors from '../tests/testComponents/TestComponentForAuthors'

describe('useAuthors', () => {
  it('fetches authors successfully', async () => {
    render(<TestComponentForAuthors />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument()
    })
  })
})
