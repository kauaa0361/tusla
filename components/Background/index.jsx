import { useState,useEffect } from "react";


export function ImageBackground({ children }) {
  const [download, setDownload] = useState(false)
  useEffect(() => {
    setDownload(true)
  }, [])
  
  return (
    <section className="relative h-full w-full min-h-screen min-w-screen overflow-hidden bg-auto bg-no-repeat bg-center
    bg-[url('https://images.unsplash.com/photo-1549822701-09dcb3dd5ef2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {/* {download && (
        <Image
        className="absolute min-h-screen min-w-screen"
          src="https://unsplash.com/pt-br/fotografias/carro-branco-na-estrada-de-asfalto-durante-o-dia-AptKyEIayGc"
          alt="Background Image"
          width={1000}
          height={1000}
        />
      )} */}
      {children}
    </section>
  );
}