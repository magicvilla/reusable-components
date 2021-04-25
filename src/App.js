import Card from 'lib/Card'
import React from 'react'
import styled from 'styled-components/macro'

const ThinnerCard = styled(Card)`
  width: 400px;
`

export const App = () => {
  return (
    <div>
      <ThinnerCard 
        coverImage="https://www.fillmurray.com/g/500/300"
        thumbnailUrl="https://placebear.com/100/100"
        title="This is the title" 
        secondaryText="This is the secodnary text"
      />
      <Card 
        title="Second Card"
        secondaryText="With only some text"
      />
      <Card>
        <h1>Hello from children components - pass in the children as prop in card</h1>
      </Card>
    </div>
  )
}
