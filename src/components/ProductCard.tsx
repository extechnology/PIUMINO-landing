import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  id?: number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isNew?: boolean;
}

const ProductCard = ({ id = 1, image, title, price, originalPrice, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-md hover:shadow-piumino transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-4 left-4 z-10 bg-gradient-piumino text-white px-2 py-1 text-xs font-semibold rounded">
            NEW
          </span>
        )}
        {/* <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white transition-colors"
        >
          <Heart className="h-4 w-4" />
        </Button> */}
        <Link to={`#`}>
          <img
            loading='lazy'
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {/* <Button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-piumino hover:opacity-90"
          size="sm"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button> */}
      </div>
      <CardContent className="p-4">
        <Link to={`#`}>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
