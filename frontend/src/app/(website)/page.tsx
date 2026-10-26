import { BackToTop } from "@/components/home/back-to-top";
import { HeroBanner } from "@/components/home/hero-banner";
import { HotProductsSection } from "@/components/home/hot-products-section";
import { NewsSection } from "@/components/home/news-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { StorySection } from "@/components/home/story-section";
import {
  getHomepageNewsCards,
  getHomepageSlides,
  getHomepageStoryCards,
  getHotProducts,
} from "@/lib/cms/get-cms";

export default async function HomePage() {
  const [slides, hotProducts, newsCards, storyCards] = await Promise.all([
    getHomepageSlides(),
    getHotProducts(),
    getHomepageNewsCards(),
    getHomepageStoryCards(),
  ]);

  return (
    <>
      <HeroBanner slides={slides} />
      <HotProductsSection products={hotProducts} />
      <SolutionsSection />
      <NewsSection items={newsCards} />
      <StorySection items={storyCards} />
      <BackToTop />
    </>
  );
}
