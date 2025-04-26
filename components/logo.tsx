import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="https://yhxagirrbrqtcqer.public.blob.vercel-storage.com/Santozfellas%20Logo%20White-JPSmIFz81s6OmZwltcRGyf2MEWTnGH.png"
        alt="SF Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
