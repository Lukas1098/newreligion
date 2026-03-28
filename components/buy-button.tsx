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
      className="bg-zinc-900 text-white py-4 w-full mt-8 hover:bg-zinc-800 transition-colors uppercase font-bold text-sm cursor-pointer"
      disabled={isOutOfStock}
      onClick={handleBuyClick}
    >
      {isOutOfStock ? "SOLD OUT" : "BUY"}
    </button>
  );
}