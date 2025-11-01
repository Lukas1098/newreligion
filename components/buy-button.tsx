'use client'

interface BuyButtonProps {
  isOutOfStock?: boolean;
  productName?: string;
}

export default function BuyButton({ isOutOfStock = false }: BuyButtonProps) {
  
  const handleBuyClick = () => {
    console.log("Gracias")
  };

  return (
    <button
      className="bg-white text-black py-4 w-full mt-8 hover:bg-gray-100 transition-colors uppercase font-medium text-sm"
      disabled={isOutOfStock}
      onClick={handleBuyClick}
    >
      {isOutOfStock ? "SOLD OUT" : "BUY"}
    </button>
  );
}