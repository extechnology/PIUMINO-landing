
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Star, Gem, BadgeCheck, Feather,ShieldCheck  } from 'lucide-react';

const Index = () => {
  const featuredProducts = [
    {
      image: "/ProductImageCompressed/ladies1.jpg",
      title: "Ladies Chappals",
      price: "₹490.99",
      originalPrice: "₹690.99",
      isNew: true
    },
    {
      image: "/ProductImageCompressed/kids1.jpg",
      title: "Kids Chappals",
      price: "₹390.99",
      originalPrice: "₹590.99"
    },
    {
      image: "/ProductImageCompressed/gents1.jpg",
      title: "Gents Chappals",
      price: "₹440.99",
      isNew: true
    },
    {
      image: "/ProductImageCompressed/ladies1.jpg",
      title: "Ladies Sandals",
      price: "₹340.99",
      originalPrice: "₹490.99"
    }
  ];

  const features = [
    {
      icon: Gem,
      title: "Premium Materials ",
      // description: "Free shipping on orders over ₹1500",
      image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400'
    },
    {
      icon: BadgeCheck,
      title: "Expert Craftsmanship",
      // description: "100% materials"
    },
    {
      icon: Feather,
      title: "Comfort Technology",
      // description: "Customer support whenever you need"
    },
    {
      icon: ShieldCheck ,
      title: "Quality Hardware & Finishes",
      // description: "30-day hassle-free returns"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Confidence Starts From
                  <span className="text-gradient block">The Ground Up</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Discover our premium collection of footwear,<br /> where comfort meets style in every step.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/shop"}><Button size="lg" className="bg-gradient-piumino hover:opacity-90 text-lg px-8">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button></Link>
                <Link to={"/about"}><Button variant="outline" size="lg" className="text-lg px-8">
                  Watch Story
                </Button></Link>
              </div>
              <div className="flex flex-col sm:flex-row">
                <p className="text-xl text-black font-bold max-w-md">
                  Shop Now!
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Rated 4.9/5 by 78Lk + customers
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="animate-float">
                <img
                  src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600"
                  alt="Featured Chappal"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-piumino"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-piumino text-white p-4 rounded-full shadow-lg">
                <span className="text-sm font-bold">NEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Find Perfect Pair, <br />
              <span className="text-gradient">Enjoy a Perfect Moment.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best quality chappals with exceptional service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow ">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-gradient-piumino rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  {/* <p className="text-muted-foreground">{feature.description}</p> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Collections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafted For Comfort, Built For Beauty
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to={"/shop"}><Button size="lg" variant="outline" className="text-lg px-8">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button></Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-piumino text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Experience Ultimate Comfort?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of satisfied customers who've made Piumino their go-to choice for quality footwear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
