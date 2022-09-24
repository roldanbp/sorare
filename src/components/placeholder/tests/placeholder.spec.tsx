import React from 'react'
import { render, screen } from '@testing-library/react'
import Placeholders from '../placeholders'
import { PlaceholderProps } from '../../../types/placeholder'

test('renders learn Placeholders', async () => {
    const props: PlaceholderProps = {
        placeholder: ['slug', 'slug2'],
        onClickHandler: jest.fn(),
    }

    render(<Placeholders {...props} />)
    const placeholders = await screen.findAllByTestId('placeholders')
    expect(placeholders).toHaveLength(2)
})
