import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { 
  Star, 
  Heart, 
  ShoppingBag, 
  Truck, 
  Shield, 
  RefreshCw,
  ChevronLeft,
  Plus,
  Minus
} from 'lucide-react';

const Product = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('8');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in a real app, this would be fetched based on the ID
  const product = {
    id: 1,
    title: "Classic Brown Leather Chappals",
    price: "$49.99",
    originalPrice: "$69.99",
    rating: 4.8,
    reviewCount: 124,
    description: "Crafted from premium genuine PU leather, these classic brown chappals offer the perfect blend of comfort and style. Featuring a cushioned footbed and durable sole, they're perfect for both casual outings and everyday wear.",
    features: [
      "100% Genuine PU Leather",
      "Cushioned Footbed",
      "Anti-slip Sole",
      "Handcrafted Quality",
      "Breathable Design"
    ],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=600",
      "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=600"
    ],
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    inStock: true
  };

  const relatedProducts = [
    {
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400",
      title: "Premium Black Chappals",
      price: "$39.99",
      originalPrice: "$59.99"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      title: "Comfortable Tan Sandals",
      price: "$44.99",
      isNew: true
    },
    {
      image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?w=400",
      title: "Casual Slip-On Chappals",
      price: "$34.99",
      originalPrice: "$49.99"
    }
  ];

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>
        </div>

        {/* Product Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.title}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-primary text-primary' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div>
                  <h3 className="font-semibold mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                        className={selectedSize === size ? "bg-gradient-piumino" : ""}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange('decrease')}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange('increase')}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 bg-gradient-piumino hover:opacity-90">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-semibold">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm">Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span className="text-sm">Quality Guarantee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="h-5 w-5 text-primary" />
                    <span className="text-sm">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                You might also <span className="text-gradient">like</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;