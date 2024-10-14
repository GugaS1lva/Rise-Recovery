import data from '../../api/data.json';
import Card from '../card';

export default function CardList() {
  return (
    <div className="flex flex-wrap gap-4">
      {data.map((item, index) => (
        <Card
          key={index}
          link={item.link}
          image={item.image}
          name={item.name}
          description={item.description}
          spec={item.spec}
        />
      ))}
    </div>
  );
}
