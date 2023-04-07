// Write your code here

import PlanetItem from '../PlanetItem'

import {PlanetsAppContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <PlanetsAppContainer>
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} details={each} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
