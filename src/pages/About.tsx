
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We source only the finest PU materials to ensure comfort and durability in every pair."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Our customers are at the heart of everything we do. Their comfort is our priority."
    },
    {
      icon: Award,
      title: "Craftsmanship",
      description: "Traditional techniques meet modern innovation in our carefully crafted chappals."
    },
    {
      icon: Target,
      title: "Sustainability",
      description: "We're committed to sustainable practices and ethical manufacturing processes."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b587?w=300",
      description: "With 15 years in footwear design, Sarah founded Piumino to bring comfort to everyone."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      description: "Michael's innovative designs have revolutionized comfort in casual footwear."
    },
    {
      name: "Emily Rodriguez",
      role: "Quality Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      description: "Emily ensures every pair meets our strict quality standards before reaching customers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Piumino</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Born from a passion for comfort and style, Piumino has been crafting premium 
              PU chappals that redefine what it means to walk in comfort.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Unique Designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2014, Piumino began as a small family business with a simple mission: 
                to create the most comfortable chappals using the finest PU materials available.
              </p>
              <p className="text-lg text-muted-foreground">
                What started in a small workshop has grown into a beloved brand trusted by 
                thousands of customers worldwide. We've never lost sight of our core values: 
                quality, comfort, and customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, Piumino continues to innovate while staying true to our heritage of 
                craftsmanship and attention to detail that makes each pair special.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                alt="Piumino Workshop"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-piumino text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2014</div>
                <div className="text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Piumino
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-2">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-piumino rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Piumino's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-2">
                <CardContent className="pt-8 pb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-piumino text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl opacity-90 mb-8">
              To provide the world's most comfortable and stylish PU chappals while 
              maintaining our commitment to quality, sustainability, and customer satisfaction. 
              Every step you take should be a step towards comfort.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
                <p className="opacity-80">Eco-friendly materials and processes</p>
              </div>
              <div>
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Innovative</h3>
                <p className="opacity-80">Cutting-edge design and technology</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-2">Trustworthy</h3>
                <p className="opacity-80">Reliable quality and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
