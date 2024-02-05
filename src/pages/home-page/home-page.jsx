import React from 'react'
import { GameItem } from '../../components/game-item/game-item'
import './home-page.css' 

const GAMES = [
    {
        id: 1,
        image: '/game-covers/38258659.jpg',
        title: 'Настільна гра "Дженга"',
        genres: ['Рекоменд. возраст от: 7 р.'],
        price: 18,
    },
    {
        id: 2,
        image: '/game-covers/245423434.jpg',
        title: 'Настільна гра  "Четыре в ряд "',
        genres: ['Рекоменд. возраст от: 10 р.', 'Для двоих'],
        price: 21,
    },
    {
        id: 3,
        image: '/game-covers/354454545.jpg',
        title: 'Настільна гра "Коридор"',
        genres: ['для чотирьох'],
        price: 15,
    },
    {
        id: 4,
        image: '/game-covers/3434543543.png',
        title: 'Настільна гра "Крокинол"',
        genres: [' игры для всех', 'Рекоменд. возраст от: 6+ р.'],
        price: 18,
    },
    { 
        id: 5,
        image: '/game-covers/2334342.jpg',
        title:  'Настільна гра "керлінг"',
        genres: ['Рекоменд. возраст от: 12+ р.', 'Для двоих'],
        price: 13,
    },
    {
        id: 6,
        image: '/game-covers/34445345.jpg',
        title: 'Настільна гра "Джаколо – Жульбак"',
        genres: ['Рекоменд. возраст от: 6+ р.'],
        price: 21,
    },
    {
        id: 7,
        image: '/game-covers/34546444.jpg',
        title: 'Настільна гра "Новус"',
        genres: ['Количество игроков от 1 до 4 чел.'],
        price: 25,
    },
    {
        id: 8,
        image: '/game-covers/34323456.jpg',
        title: 'Настільна гра " Pucket"',
        genres: [ 'Для двоих'],
        price: 23,
    },
    {
        id: 9,
        image: '/game-covers/233550167.jpg',
        title: 'Настільна гра " Шеш-беш"',
        genres: [ 'Для двоих'],
        price: 17,
    },
]

export const HomePage = () => {
  return (
    <div className='home-page'>
        {GAMES.map(game => <GameItem game = {game} key = {game.id}/>)}
    </div>
  )
}
