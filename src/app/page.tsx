import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import StickyScrolls from "@/components/StickyScrolls";
import TestmonialsCard from "@/components/TestmonialsCard";
import UpComingWebner from "@/components/UpComingWebner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased  text-white">
      <HeroSection/>
      <FeaturedCourses/>
      <StickyScrolls/>
      <TestmonialsCard/>
      <UpComingWebner/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
