import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      image: "/ProductImageCompressed/gents1.jpg",
      title: "Gents Chappals",
      price: "₹490.99",
      originalPrice: "₹690.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 2,
      image: "/ProductImageCompressed/gents2.jpg",
      title: "Gents chappals",
      price: "₹400.99",
      originalPrice: "₹590.99",
      category: "gents"
    },
    {
      id: 3,
      image: "/ProductImageCompressed/gents3.jpg",
      title: "Gents chappals",
      price: "₹390.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 4,
      image: "/ProductImageCompressed/gents4.jpg",
      title: "Gents chappals",
      price: "₹490.99",
      originalPrice: "₹510.99",
      category: "gents"
    },
    {
      id: 5,
      image: "/ProductImageCompressed/gents5.jpg",
      title: "Gents chappals",
      price: "₹400.99",
      category: "gents"
    },
    {
      id: 6,
      image: "/ProductImageCompressed/gents6.jpg",
      title: "Gents chappals",
      price: "₹490.99",
      originalPrice: "₹690.99",
      category: "gents"
    },
    {
      id: 7,
      image: "/ProductImageCompressed/kids1.jpg",
      title: "Gents chappals",
      price: "₹400.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 8,
      image: "/ProductImageCompressed/kids2.jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "kids"
    },
    {
      id: 9,
      image: "/ProductImageCompressed/kids3.jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "kids"
    },
    {
      id: 10,
      image: "/ProductImageCompressed/ladies1.jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "ladies"
    },
    {
      id: 11,
      image: "/ProductImageCompressed/ladies2.jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 12,
      image: "/ProductImageCompressed/ladies3.jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 13,
      image: "/ProductImageCompressed/ladies4.jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    // {
    //   id: 14,
    //   image: "/ProductImageCompressed/ladies (5).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 15,
    //   image: "/ProductImageCompressed/ladies (6).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 16,
    //   image: "/ProductImageCompressed/ladies (7).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 17,
    //   image: "/ProductImageCompressed/ladies (8).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 18,
    //   image: "/ProductImageCompressed/ladies (9).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 19,
    //   image: "/ProductImageCompressed/ladies (10).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 20,
    //   image: "/ProductImageCompressed/ladies (11).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 21,
    //   image: "/ProductImageCompressed/ladies (12).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 22,
    //   image: "/ProductImageCompressed/ladies (13).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 23,
    //   image: "/ProductImageCompressed/ladies (14).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },
    // {
    //   id: 24,
    //   image: "/ProductImageCompressed/ladies (15).jpg",
    //   title: "Ladies chappals",
    //   price: "₹380.99",
    //   category: "ladies"
    // },

  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'gents', name: 'Gents' },
    { id: 'ladies', name: 'Ladies' },
    { id: 'kids', name: 'Kids' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      
      {/* Page Header */}
      <section className="pt-20 pb-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of premium chappals and sandals
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-gradient-piumino" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                {/* <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button> */}
              </div>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
          </div>
          
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Shop;