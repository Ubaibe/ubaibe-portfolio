import { Hero } from "@/components/hero";
import { ScrollTypography } from "@/components/sections/ScrollTypography";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollTypography />
      <SelectedWork />
      <Footer />
    </>
  );
}
