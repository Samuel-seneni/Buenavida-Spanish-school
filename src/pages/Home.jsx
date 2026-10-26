import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import CoursePreview from "../components/home/CoursePreview";
import LearningLevels from "../components/home/LearningLevels";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <main>
      {/* Main welcome section */}
      <Hero />

      {/* Introduction to Buenavida Spanish School */}
      <AboutPreview />

      {/* Preview of the Spanish courses */}
      <CoursePreview />

      {/* Spanish proficiency levels: A1 to C2 */}
      <LearningLevels />

      {/* Final enrollment call to action */}
      <CallToAction />
    </main>
  );
}
