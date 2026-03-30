import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "@/app/components/header";
import { HeroSlider } from "@/app/components/hero-slider";
import { Services } from "@/app/components/services";
import { WhyChooseUs } from "@/app/components/why-choose-us";
import { Gallery } from "@/app/components/gallery";
import { Testimonials } from "@/app/components/testimonials";
import { Blog } from "@/app/components/blog";
import { Footer } from "@/app/components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
