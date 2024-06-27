import AniHeroSection from "./Animation/AniHeroSection"

function HeroSection() {
  return (
    <section className='w-full h-screen z-0    
    ease-in-out overflow-hidden  duration-300 
    transition-all g-no-repeat bg-cover flex items-center '
       style={{ backgroundImage: `url("/assets/images/Customers/customersHeader.webp")` }} >
         <AniHeroSection />
    </section>
  )
}

export default HeroSection
