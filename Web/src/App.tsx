import './styles/main.css'
import logoImg from './assets/logo-nlw-esports.svg'
import { GameBaner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

function App() {
  interface Game {
    id: string
    title: string
    bannerUrl: string
    _count: {
      ads: number
    }
  }

  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1000px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black m-20">
        Seu{' '}
        <span className="bg-nlw-gradient bg-clip-text text-transparent ">
          {' '}
          duo
        </span>{' '}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBaner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
        
      </Dialog.Root>
    </div>
  )
}

export default App
