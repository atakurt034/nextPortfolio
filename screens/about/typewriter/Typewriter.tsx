import React, { useState, useEffect } from 'react'

import Typewriter from 'typewriter-effect'

interface TypeWriterProps {
  exit: () => void
  enter: () => void
  image: (image: string) => void
}

const TypeWords: React.FC<TypeWriterProps> = ({ exit, enter, image }) => {
  const [change, setChange] = useState(0)

  useEffect(() => {
    if (change === 1) {
      image('/images/profile2.jpg')
    } else if (change === 2) {
      image('/images/profile3.jpg')
    } else {
      image('/images/profile.jpg')
    }
  }, [change, image])

  return (
    <>
      <Typewriter
        options={{ loop: true, cursorClassName: 'cursor' }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .callFunction(() => setChange(0))
            .pauseFor(500)
            .callFunction(() => enter())
            .typeString('<span class="string">Hi,')
            .pauseFor(500)
            .typeString(
              '<span class="string"> my name is <span class="name">Anthony</span></span>'
            )

            .pauseFor(1500)
            .deleteAll()
            .typeString(
              '<span class="string">I am a fullstack developer.</span>'
            )
            .pauseFor(1500)
            .callFunction(() => exit())
            .pauseFor(500)
            .deleteChars(21)
            .callFunction(() => setChange(1))
            .pauseFor(500)
            .callFunction(() => enter())
            .typeString(
              '<span class="string">lso a <span class="blue">registered nurse</span> but my passion is:</span>'
            )
            .pauseFor(500)
            .deleteAll()
            .typeString('<span class="red string">CODING</span>')
            .pauseFor(1000)
            .deleteAll()
            .pauseFor(500)
            .typeString(
              '<span class="string"> <span class="red">RESEARCH</span></span>'
            )
            .pauseFor(500)
            .callFunction(() => exit())
            .pauseFor(500)
            .deleteChars(8)
            .callFunction(() => setChange(2))
            .pauseFor(500)
            .callFunction(() => enter())
            .typeString(
              '<span class="string">and <strong class="red">EATING.</strong></span>'
            )
            .pauseFor(2000)
            .callFunction(() => exit())
            .start()
        }}
      />
    </>
  )
}

export default TypeWords
