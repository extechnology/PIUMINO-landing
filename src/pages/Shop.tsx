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
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      title: "Classic Brown Leather Chappals",
      price: "$49.99",
      originalPrice: "$69.99",
      isNew: true,
      category: "leather"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
      title: "Premium Black Chappals",
      price: "$39.99",
      originalPrice: "$59.99",
      category: "casual"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      title: "Comfortable Tan Sandals",
      price: "$44.99",
      isNew: true,
      category: "comfort"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=400",
      title: "Casual Slip-On Chappals",
      price: "$34.99",
      originalPrice: "$49.99",
      category: "casual"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      title: "Luxury Brown Sandals",
      price: "$59.99",
      category: "luxury"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
      title: "Everyday Comfort Chappals",
      price: "$29.99",
      originalPrice: "$39.99",
      category: "comfort"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      title: "Premium Leather Sandals",
      price: "$54.99",
      isNew: true,
      category: "leather"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=400",
      title: "Stylish Urban Chappals",
      price: "$42.99",
      category: "casual"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'leather', name: 'Leather' },
    { id: 'casual', name: 'Casual' },
    { id: 'comfort', name: 'Comfort' },
    { id: 'luxury', name: 'Luxury' }
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