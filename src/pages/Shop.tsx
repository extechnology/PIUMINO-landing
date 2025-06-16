import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      image: "/Gents (2).jpg",
      title: "Gents Chappals",
      price: "₹490.99",
      originalPrice: "₹690.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 2,
      image: "/gents (3).jpg",
      title: "Gents chappals",
      price: "₹400.99",
      originalPrice: "₹590.99",
      category: "gents"
    },
    {
      id: 3,
      image: "/gents (4).jpg",
      title: "Gents chappals",
      price: "₹390.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 4,
      image: "/gents (5).jpg",
      title: "Gents chappals",
      price: "₹490.99",
      originalPrice: "₹510.99",
      category: "gents"
    },
    {
      id: 5,
      image: "/gents (6).jpg",
      title: "Gents chappals",
      price: "₹400.99",
      category: "gents"
    },
    {
      id: 6,
      image: "/gents (7).jpg",
      title: "Gents chappals",
      price: "₹490.99",
      originalPrice: "₹690.99",
      category: "gents"
    },
    {
      id: 7,
      image: "/Gents.jpg",
      title: "Gents chappals",
      price: "₹400.99",
      isNew: true,
      category: "gents"
    },
    {
      id: 8,
      image: "/kids.jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "kids"
    },
    {
      id: 9,
      image: "/kids (2).jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "kids"
    },
    {
      id: 10,
      image: "/kids (3).jpg",
      title: "Kids chappals",
      price: "₹280.99",
      category: "kids"
    },
    {
      id: 11,
      image: "/ladies (2).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 12,
      image: "/ladies (3).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 13,
      image: "/ladies (4).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 14,
      image: "/ladies (5).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 15,
      image: "/ladies (6).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 16,
      image: "/ladies (7).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 17,
      image: "/ladies (8).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 18,
      image: "/ladies (9).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 19,
      image: "/ladies (10).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 20,
      image: "/ladies (11).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 21,
      image: "/ladies (12).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 22,
      image: "/ladies (13).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 23,
      image: "/ladies (14).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },
    {
      id: 24,
      image: "/ladies (15).jpg",
      title: "Ladies chappals",
      price: "₹380.99",
      category: "ladies"
    },

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
      <Header />
      
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
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
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

      <Footer />
    </div>
  );
};

export default Shop;