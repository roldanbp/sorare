import React from 'react'
import { render, screen, within } from '@testing-library/react'
import CardList from '../card-list'
import { Cards } from '../../../types/Cards'

test('renders learn card list', () => {
    const props: Cards = {
        cards: [
            {
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
            },
        ],
    }

    render(<CardList {...props} />)
    const cardList = screen.getByTestId('card-list')
    const { getByText } = within(cardList)
    expect(getByText('test-firstName')).toBeInTheDocument()
    expect(getByText('test-lastName')).toBeInTheDocument()
    expect(getByText('28')).toBeInTheDocument()
    expect(getByText('test-position')).toBeInTheDocument()
    expect(getByText('test-shirtNumber')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('test-season')).toBeInTheDocument()
})
