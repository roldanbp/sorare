import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Card from '../card'
import { CardProps } from '../../../types/Cards'

test('renders learn card', () => {
    const props: CardProps = {
        player: {
            firstName: 'test-firstName',
            lastName: 'test-lastName',
            country: {
                flagUrl: 'test-flag',
            },
            pictureUrl: 'test-pictureurl',
        },
        age: '28',
        position: 'test-position',
        rarity: 'test-rarity',
        shirtNumber: 'test-shirtNumber',
        serialNumber: '1',
        season: {
            name: 'test-season',
        },
        team: {
            pictureUrl: 'test-pictureurl',
        },
    }

    render(<Card {...props} />)
    const card = screen.getByTestId('card')
    const { getByText } = within(card)
    expect(getByText('test-firstName')).toBeInTheDocument()
    expect(getByText('test-lastName')).toBeInTheDocument()
    expect(getByText('28')).toBeInTheDocument()
    expect(getByText('test-position')).toBeInTheDocument()
    expect(getByText('test-shirtNumber')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('test-season')).toBeInTheDocument()
})
