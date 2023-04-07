// Write your code here

import {PlanetContainer, Image, Name, Description} from './styledComponents'

const PlanetItem = props => {
  const {details} = props
  const {id, name, imageUrl, description} = details

  return (
    <PlanetContainer data-testid="planet">
      <Image src={imageUrl} alt={`planet ${name}`} />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </PlanetContainer>
  )
}

export default PlanetItem
