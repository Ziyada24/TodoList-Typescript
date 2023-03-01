import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1>Страница информации</h1>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur porro odit tempora minima, deserunt aliquam ex voluptate? Minus facere perspiciatis aliquam, aliquid quos quasi? Voluptate sint veritatis quisquam molestiae expedita!
    </p>
    <button className='btn' onClick={() => navigate('/')}>Обратно к списку дел</button>
    </>
  )
}
