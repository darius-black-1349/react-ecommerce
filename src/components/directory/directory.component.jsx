import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.pinimg.com/564x/b6/41/60/b6416017fc4b3af939c873530bb737ab.jpg',
    route: 'shop/hats',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.pinimg.com/564x/02/3a/d2/023ad261de404cd1e485f33207c1180e.jpg',
    route: 'shop/jackets',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.pinimg.com/564x/46/ad/a4/46ada488a7ac073f6eb061feaba57dec.jpg',
    route: 'shop/sneakers',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.pinimg.com/564x/50/7c/ab/507caba456ccc03e85e1e9b2ded7170c.jpg',
    route: 'shop/womens',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.pinimg.com/564x/95/c9/d9/95c9d99969e942da4943c5badcd24d3b.jpg',
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
