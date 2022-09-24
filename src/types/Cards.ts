interface Country {
    flagUrl: string
}
interface Season {
    name: string
}

interface Team {
    pictureUrl: string
}

interface Player {
    firstName: string
    lastName: string
    country: Country
    pictureUrl: string
}

export interface CardProps {
    player: Player
    age: string
    position: string
    rarity: string
    shirtNumber: string
    serialNumber: string
    season: Season
    team: Team
}

export interface Cards {
    cards?: CardProps[]
}
