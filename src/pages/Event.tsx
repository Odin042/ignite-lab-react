import React from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Slidebar } from '../components/Slidebar'
import { Video } from '../components/Video'

export const Event = () => {
  const { slug } = useParams<{ slug:string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        { slug ? <Video lessonSlug={slug} /> : <div className='flex-1'>Loading...</div> }
        <Slidebar />
      </main>
    </div>
  )
}
