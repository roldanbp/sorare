import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../button'

test('renders learn button reveal', () => {
    render(<Button />)
    const button = screen.getByTestId('button')
    expect(button.textContent).toEqual('Reveal')
})
