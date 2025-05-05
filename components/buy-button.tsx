'use client'

import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';

interface BuyButtonProps {
  isOutOfStock?: boolean;
  productName?: string;
}

export default function BuyButton({ isOutOfStock = false, productName = "" }: BuyButtonProps) {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  
  const handleBuyClick = () => {
    // Obtén el slug desde los parámetros de la URL
    const slug = params.slug;
    
    // Usa el nombre del producto si está disponible, o el slug como alternativa
    const productIdentifier = productName || slug || "un producto";
    
    // Crea el mensaje de WhatsApp con el identificador del producto
    const message = `Hola, me gustaria comprar el ${productIdentifier}`;
    const encodedMessage = encodeURIComponent(message);
    
    // Redirige al usuario a WhatsApp con el mensaje preparado
    router.push(`https://api.whatsapp.com/send?phone=5491122904558&text=${encodedMessage}`);
  };

  return (
    <button
      className="bg-black text-white py-4 w-full mt-8 hover:bg-gray-900 transition-colors uppercase font-medium text-sm"
      disabled={isOutOfStock}
      onClick={handleBuyClick}
    >
      {isOutOfStock ? "AGOTADO" : "COMPRAR"}
    </button>
  );
}