import Card from './Card'
import data from '../data'

const Experiences = () => {
  return (
    <section className="Experiences">
      {data.map(item => (
        <Card 
          key={item.id}
          item={item}
        />
      ))}
    </section>
  )
}

export default Experiences
