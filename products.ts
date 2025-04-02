export interface Product {
  id: string;
  brand: string;
  model: string;
  storage: string;
  price: number;
  image?: string;
  specs?: {
    display?: string;
    camera?: string;
    processor?: string;
    battery?: string;
    os?: string;
  };
}

export const products: Product[] = [
  // Apple Products
  {
    id: 'iphone-13-128',
    brand: 'Apple',
    model: 'iPhone 13',
    storage: '128GB',
    price: 1800,
    specs: {
      display: '6.1 אינץ׳ Super Retina XDR',
      camera: 'מערכת מצלמה כפולה 12MP',
      processor: 'A15 Bionic',
      battery: 'עד 19 שעות נגינת וידאו',
      os: 'iOS 15'
    }
  },
  {
    id: 'iphone-15-128',
    brand: 'Apple',
    model: 'iPhone 15',
    storage: '128GB',
    price: 2450,
    specs: {
      display: '6.1 אינץ׳ Super Retina XDR',
      camera: 'מערכת מצלמה כפולה 48MP',
      processor: 'A16 Bionic',
      battery: 'עד 20 שעות נגינת וידאו',
      os: 'iOS 17'
    }
  },
  {
    id: 'iphone-15-256',
    brand: 'Apple',
    model: 'iPhone 15',
    storage: '256GB',
    price: 2699,
    specs: {
      display: '6.1 אינץ׳ Super Retina XDR',
      camera: 'מערכת מצלמה כפולה 48MP',
      processor: 'A16 Bionic',
      battery: 'עד 20 שעות נגינת וידאו',
      os: 'iOS 17'
    }
  },
  {
    id: 'iphone-15-pro-256',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    storage: '256GB',
    price: 3699,
    specs: {
      display: '6.1 אינץ׳ Super Retina XDR ProMotion',
      camera: 'מערכת מצלמה משולשת 48MP',
      processor: 'A17 Pro',
      battery: 'עד 23 שעות נגינת וידאו',
      os: 'iOS 17'
    }
  },
  {
    id: 'iphone-15-pro-max-256',
    brand: 'Apple',
    model: 'iPhone 15 Pro Max',
    storage: '256GB',
    price: 4099,
    specs: {
      display: '6.7 אינץ׳ Super Retina XDR ProMotion',
      camera: 'מערכת מצלמה משולשת 48MP עם זום אופטי x5',
      processor: 'A17 Pro',
      battery: 'עד 29 שעות נגינת וידאו',
      os: 'iOS 17'
    }
  },
  {
    id: 'iphone-16-128',
    brand: 'Apple',
    model: 'iPhone 16',
    storage: '128GB',
    price: 2699,
    specs: {
      display: '6.1 אינץ׳ Super Retina XDR',
      camera: 'מערכת מצלמה כפולה 48MP',
      processor: 'A18',
      battery: 'עד 22 שעות נגינת וידאו',
      os: 'iOS 18'
    }
  },
  {
    id: 'iphone-16-plus-256',
    brand: 'Apple',
    model: 'iPhone 16 Plus',
    storage: '256GB',
    price: 4050,
    specs: {
      display: '6.7 אינץ׳ Super Retina XDR',
      camera: 'מערכת מצלמה כפולה 48MP',
      processor: 'A18',
      battery: 'עד 26 שעות נגינת וידאו',
      os: 'iOS 18'
    }
  },
  {
    id: 'iphone-16-pro-256',
    brand: 'Apple',
    model: 'iPhone 16 Pro',
    storage: '256GB',
    price: 4250,
    specs: {
      display: '6.3 אינץ׳ Super Retina XDR ProMotion',
      camera: 'מערכת מצלמה משולשת 48MP',
      processor: 'A18 Pro',
      battery: 'עד 25 שעות נגינת וידאו',
      os: 'iOS 18'
    }
  },
  {
    id: 'iphone-16-pro-max-256',
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
    storage: '256GB',
    price: 4390,
    specs: {
      display: '6.9 אינץ׳ Super Retina XDR ProMotion',
      camera: 'מערכת מצלמה משולשת 48MP עם זום אופטי x5',
      processor: 'A18 Pro',
      battery: 'עד 30 שעות נגינת וידאו',
      os: 'iOS 18'
    }
  },
  {
    id: 'iphone-16-pro-max-512',
    brand: 'Apple',
    model: 'iPhone 16 Pro Max',
    storage: '512GB',
    price: 5399,
    specs: {
      display: '6.9 אינץ׳ Super Retina XDR ProMotion',
      camera: 'מערכת מצלמה משולשת 48MP עם זום אופטי x5',
      processor: 'A18 Pro',
      battery: 'עד 30 שעות נגינת וידאו',
      os: 'iOS 18'
    }
  },
  
  // Samsung Products
  {
    id: 's24-256',
    brand: 'Samsung',
    model: 'Galaxy S24',
    storage: '256GB',
    price: 2399,
    specs: {
      display: '6.2 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה משולשת 50MP',
      processor: 'Snapdragon 8 Gen 3',
      battery: '4,000mAh',
      os: 'Android 14'
    }
  },
  {
    id: 's24-plus-256',
    brand: 'Samsung',
    model: 'Galaxy S24 Plus',
    storage: '256GB',
    price: 2799,
    specs: {
      display: '6.7 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה משולשת 50MP',
      processor: 'Snapdragon 8 Gen 3',
      battery: '4,900mAh',
      os: 'Android 14'
    }
  },
  {
    id: 's24-ultra-256',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    storage: '256GB',
    price: 3599,
    specs: {
      display: '6.8 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה מרובעת 200MP',
      processor: 'Snapdragon 8 Gen 3',
      battery: '5,000mAh',
      os: 'Android 14'
    }
  },
  {
    id: 's24-ultra-512',
    brand: 'Samsung',
    model: 'Galaxy S24 Ultra',
    storage: '512GB',
    price: 4000,
    specs: {
      display: '6.8 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה מרובעת 200MP',
      processor: 'Snapdragon 8 Gen 3',
      battery: '5,000mAh',
      os: 'Android 14'
    }
  },
  {
    id: 's25-ultra-256',
    brand: 'Samsung',
    model: 'Galaxy S25 Ultra',
    storage: '256GB',
    price: 3950,
    specs: {
      display: '6.9 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה מרובעת 200MP עם AI',
      processor: 'Snapdragon 8 Gen 4',
      battery: '5,500mAh',
      os: 'Android 15'
    }
  },
  {
    id: 's25-ultra-512',
    brand: 'Samsung',
    model: 'Galaxy S25 Ultra',
    storage: '512GB',
    price: 4400,
    specs: {
      display: '6.9 אינץ׳ Dynamic AMOLED 2X',
      camera: 'מערכת מצלמה מרובעת 200MP עם AI',
      processor: 'Snapdragon 8 Gen 4',
      battery: '5,500mAh',
      os: 'Android 15'
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
};

export const getProductsByPriceRange = (min: number, max: number): Product[] => {
  return products.filter(product => product.price >= min && product.price <= max);
};

export const getProductsByStorage = (storage: string): Product[] => {
  return products.filter(product => product.storage === storage);
};

export const getBrands = (): string[] => {
  return [...new Set(products.map(product => product.brand))];
};

export const getStorageOptions = (): string[] => {
  return [...new Set(products.map(product => product.storage))];
};
