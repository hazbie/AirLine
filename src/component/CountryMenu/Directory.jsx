import React from 'react';
import Items from './Items';
import './Directory.css';

const choices = [
  {
    title: 'Canada',
    imageUrl: 'https://static.grainger.com/rp/s/is/image/Grainger/5JFV2_AL01?$zmmain$',
    id: 1,
    url:'https://en.wikipedia.org/wiki/Canada'
  },
  {
    title: 'China',
    imageUrl: 'https://www.interflag.gr/1786-thickbox_default/china-flag.jpg',
    id: 2,
    url:'https://en.wikipedia.org/wiki/China'
  },
  {
    title: 'England',
    imageUrl: 'https://cdn3.vectorstock.com/i/1000x1000/98/97/england-flag-isolated-icon-design-vector-9619897.jpg',
    id: 3,
    url: 'https://en.wikipedia.org/wiki/England'
  },
  {
    title: 'Germany',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/21VUax%2BPBhL.jpg',
    id: 4,
    url: 'https://en.wikipedia.org/wiki/Germany'
  },
  {
    title: 'Italy',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41Jx9i-EiNL._SX425_.jpg',
    id: 5,
    url: 'https://en.wikipedia.org/wiki/Italy'
  },
  {
    title: 'Portugal',
    imageUrl: 'http://cliparts101.com/files/398/2B030070E0C85066EEDD006A43D5A2E7/Portugal_1.png',
    id: 6,
    url: 'https://en.wikipedia.org/wiki/Portugal'
  }
];

const Directory = () => 
    <div className='directory'>

      {choices.map(({title, imageUrl, id, url}) => (
        <Items 
          key={id} 
          title={title} 
          imageUrl={imageUrl} 
          url={url} 
        >
        </Items>
      ))
      }

    </div>
    
export default Directory;
