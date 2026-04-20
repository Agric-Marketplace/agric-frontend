import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";
import { 
  apiGetCart, 
  apiAddToCart, 
  apiRemoveFromCart,
  apiUpdateCartItem
} from "../services/cart"; 

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const fetchCart = async () => {
    if (!user) return;
    try {
      const response = await apiGetCart();
      const userCart = response.data.productCarts[0];
      
      if (userCart) {
        setCart(userCart.items);
        setCartTotal(response.data.subtotal);
      } else {
        setCart([]);
        setCartTotal(0);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      setCart([]);
      setCartTotal(0);
    }
  }, [user]);


  const addToCart = async (product, quantity = 1) => {
    try {
      const productId = product._id || product.id; 
      
      await apiAddToCart(productId, quantity);
      await fetchCart(); 
      toast.success(`${product.title || product.name} added to cart!`);
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error(error.response?.data?.message || "Could not add to cart.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await apiRemoveFromCart(productId);
      await fetchCart(); 
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Remove from cart error:", error);
      toast.error("Failed to remove item.");
    }
  };
  
  const updateQuantity = async (productId, quantity) => {
      try {
          await apiUpdateCartItem(productId, quantity);
          await fetchCart();
      } catch (error) {
          toast.error(error.response?.data?.message || "Failed to update quantity");
      }
  }

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, cartTotal, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
