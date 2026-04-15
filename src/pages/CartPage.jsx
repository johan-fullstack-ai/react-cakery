import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount } = useCart();
  const { products } = useProducts();
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  function findProduct(productId) {
    return products.find((p) => p.id === productId);
  }

  function getCartTotal() {
    return cart.reduce((total, item) => {
      const product = findProduct(item.productId);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  function handleCheckout() {
    clearCart();
    setShowSuccess(true);
  }

  function handleCloseSuccess() {
    setShowSuccess(false);
    navigate(-1);
  }

  function handleContinueShopping() {
    navigate(-1);
  }

  if (showSuccess) {
    return (
      <div className="modalOverlay" role="dialog" aria-modal="true" aria-label="Order confirmation">
        <div className="modalContent successModal">
          <h2 className="modalTitle">Order placed!</h2>
          <p className="successText">Your delicious treats are on the way.</p>
          <button className="ctaButton" onClick={handleCloseSuccess}>
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="cartPage">
      <h2 className="sectionTitle">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cartEmptyMessage">Your cart is empty</p>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((item) => {
              const product = findProduct(item.productId);
              if (!product) return null;
              return (
                <div className="cartItem" key={item.productId}>
                  <img
                    className="cartItemImage"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="cartItemDetails">
                    <p className="cartItemName">{product.name}</p>
                    <p className="cartItemPrice">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="cartItemControls">
                    <button
                      className="quantityButton"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(item.productId, -1)}
                    >
                      &minus;
                    </button>
                    <span className="cartItemQuantity">{item.quantity}</span>
                    <button
                      className="quantityButton"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(item.productId, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="removeButton"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cartSummary">
            <p className="cartTotal">Total: ${getCartTotal().toFixed(2)}</p>
          </div>

          <div className="cartActions">
            <button className="ctaButton" onClick={handleCheckout}>
              Checkout
            </button>
            <button className="secondaryButton" onClick={handleContinueShopping}>
              Continue shopping
            </button>
            <button className="dangerButton" onClick={clearCart}>
              Clear cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}
