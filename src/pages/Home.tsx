import About from "@/components/About";
import Appointment from "@/components/Appointment";
import Blog from "@/components/Blog";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import ProductsMenu from "@/components/ProductsMenu";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


function Home() {
  return (
    <div className="min-h-screen bg-[#151111] font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MenuSection />
      <Counter />
      <Products />
      <Gallery />
      <ProductsMenu />
      <Testimonials />
      <Blog />
      <Appointment />
      <Footer />
    </div>
  );
}

export default Home;
