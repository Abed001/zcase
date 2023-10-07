import React from 'react'
import Product from '../Components/Product'


const productItems = [
  {
    id: 1,
    img: require('../images/1.png'),
  },
  {
    id: 2,
    img: require('../images/2.png'),
  },
  {
    id: 3,
    img: require('../images/3.png'),
  },
  {
    id: 4,
    img: require('../images/4.png'),
  },
  {
    id: 5,
    img: require('../images/5.png'),
  },

  {
    id: 7,
    img: require('../images/6.png'),
  },
  {
    id: 8,
    img: require('../images/7.png'),
  },
  {
    id: 8,
    img: require('../images/8.png'),
  },
  {
    id: 8,
    img: require('../images/9.png'),
  },
  {
    id: 8,
    img: require('../images/10.png'),
  },
  {
    id: 8,
    img: require('../images/11.png'),
  },
  {
    id: 8,
    img: require('../images/12.png'),
  },
  {
    id: 8,
    img: require('../images/13.png'),
  },
  {
    id: 8,
    img: require('../images/14.png'),
  },
  {
    id: 8,
    img: require('../images/15.png'),
  },
  {
    id: 8,
    img: require('../images/16.png'),
  },
  {
    id: 8,
    img: require('../images/17.png'),
  },

  {
    id: 8,
    img: require('../images/18.png'),
  },
  {
    id: 8,
    img: require('../images/19.png'),
  },
  {
    id: 8,
    img: require('../images/20.png'),
  },
  {
    id: 8,
    img: require('../images/21.png'),
  },

  {
    id: 8,
    img: require('../images/22.png'),
  },

  {
    id: 8,
    img: require('../images/23.png'),
  },

  {
    id: 8,
    img: require('../images/24.png'),
  },

  {
    id: 8,
    img: require('../images/25.png'),
  },

  {
    id: 8,
    img: require('../images/26.png'),
  },

  {
    id: 8,
    img: require('../images/27.png'),
  },

  {
    id: 8,
    img: require('../images/28.png'),
  },

  {
    id: 8,
    img: require('../images/29.png'),
  },

  {
    id: 8,
    img: require('../images/30.png'),
  },


  {
    id: 8,
    img: require('../images/31.png'),
  },

  {
    id: 8,
    img: require('../images/32.png'),
  },

  {
    id: 8,
    img: require('../images/33.png'),
  },


  {
    id: 8,
    img: require('../images/34.png'),
  },

  {
    id: 8,
    img: require('../images/35.png'),
  },

  {
    id: 8,
    img: require('../images/36.png'),
  },


   {
    id: 8,
    img: require('../images/37.png'),
  },

  {
    id: 8,
    img: require('../images/38.png'),
  },

  {
    id: 8,
    img: require('../images/39.png'),
  },
  {
    id: 8,
    img: require('../images/40.png'),
  },


  {
    id: 8,
    img: require('../images/41.png'),
  },



   {
    id: 8,
    img: require('../images/42.png'),
  },


  {
    id: 8,
    img: require('../images/43.png'),
  },


  {
    id: 8,
    img: require('../images/44.png'),
  },


  {
    id: 8,
    img: require('../images/45.png'),
  },


  {
    id: 8,
    img: require('../images/46.png'),
  },
  {
    id: 8,
    img: require('../images/47.png'),
  },

  {
    id: 8,
    img: require('../images/48.png'),
  },







];

function Products() {
  return (
    <div className="mx-auto max-w-screen-xl">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {productItems.map(product => (
        
          <Product thing={product} key={product.id} />
          
        ))}
      </div>
    </div>
  )
}
export default Products;