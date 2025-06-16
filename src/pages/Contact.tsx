
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Store",
      details: ['SADAF ELASTOMERS, PIumino 15/617','KASHAYAPADI, FEROKE',', Kozhikode, Kerala, 673631'],
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 858 901 0885"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@piumino.com", "sales@piumino.com"],
      color: "text-primary"
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: ["Mon - Fri: 9:00 AM - 8:00 PM", "Sat: 10:00 AM - 6:00 PM", "Sun: 12:00 PM - 5:00 PM"],
    //   color: "text-orange-500"
    // }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about our products or need assistance? 
              We're here to help! 
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-all hover:-translate-y-2">
                <CardContent className="pt-8 pb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${info.color} bg-current/10`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Send className="h-6 w-6 mr-2 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-piumino hover:opacity-90 text-lg py-6"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-primary" />
                    Find Our Store
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.2934145235663!2d75.8423126745219!3d11.160836651986601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651ef8ba1d59b%3A0x4da3ab54d9c1e664!2spiumino%20footware!5e1!3m2!1sen!2sin!4v1749815200615!5m2!1sen!2sin" width="600" height="450" style={{border:0}}  loading="lazy"></iframe>
                    </div>
                  </div>
                  {/* <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Store Location</h4>
                      <p className="text-muted-foreground">
                        Our flagship store is located in the heart of Style City's fashion district. 
                        Easy parking available and accessible by public transport.
                      </p>
                    </div>
                  </div> */}
                </CardContent>
              </Card>

              {/* <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Quick Questions?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Live chat available on our website</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">WhatsApp support: +1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Follow us on social media for updates</span>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What sizes do you offer?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer sizes from 6 to 12 for both men and women, with half sizes available for most styles.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, we ship worldwide! International shipping typically takes 7-14 business days.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What's your return policy?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer a 30-day return policy for unworn items in original packaging with receipt.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Are your chappals waterproof?</h3>
                <p className="text-muted-foreground text-sm">
                  Our PU chappals are water-resistant and easy to clean, perfect for everyday wear.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Contact;
