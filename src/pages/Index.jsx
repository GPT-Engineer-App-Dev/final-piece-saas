import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <img
          src="/placeholder.svg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            The Last Piece of Software You'll Ever Need
          </h1>
          <p className="text-xl mb-8">
            Streamline your workflow, boost productivity, and transform your business with our all-in-one solution.
          </p>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                      <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Company Name</h3>
              <p>The last piece of software you'll ever need.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
                <a href="#" className="hover:text-gray-300"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: Facebook,
    title: "Seamless Integration",
    description: "Easily connect with all your favorite tools and platforms.",
  },
  {
    icon: Twitter,
    title: "Advanced Analytics",
    description: "Gain deep insights into your business performance.",
  },
  {
    icon: Instagram,
    title: "Automated Workflows",
    description: "Save time and reduce errors with intelligent automation.",
  },
];

const testimonials = [
  {
    avatar: "/placeholder.svg",
    quote: "This software has completely transformed our business operations. It's a game-changer!",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
  },
  {
    avatar: "/placeholder.svg",
    quote: "I can't imagine running my company without this tool. It's truly the last piece of software we needed.",
    name: "John Smith",
    title: "Founder, StartUp Success",
  },
  {
    avatar: "/placeholder.svg",
    quote: "The ROI we've seen since implementing this solution has been phenomenal. Highly recommended!",
    name: "Emily Johnson",
    title: "CFO, Global Enterprises",
  },
];

export default Index;