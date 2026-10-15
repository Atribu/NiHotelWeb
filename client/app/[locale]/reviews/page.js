import { getTranslations } from "next-intl/server";
import { getReviewPlatforms } from "@/lib/reviewPlatforms";
import { buildPageMetadata } from "@/lib/seo";
import ReviewPlatforms from "../components/teona/ReviewPlatforms";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "reviews" });
}

export default async function ReviewsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reviews" });
  const platforms = getReviewPlatforms().map((platform) => ({
    ...platform,
    action: t(
      platform.directReview ? "googleDirectAction" : `platforms.${platform.id}.action`,
    ),
    guide: t(
      platform.directReview ? "googleDirectGuide" : `platforms.${platform.id}.guide`,
    ),
    linkLabel: t(
      platform.directReview ? "googleDirectLinkLabel" : `platforms.${platform.id}.linkLabel`,
    ),
  }));

  return (
    <main className="bg-[#f7f5f0] text-[#19334F]" id="main-content">
      <SeoStructuredData
        items={[{ name: t("title"), page: "reviews" }]}
        locale={locale}
      />
      <section className="bg-[#10273d] px-5 pb-16 pt-36 text-center text-white sm:px-8 sm:pb-20 lg:pt-44">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[#dec7a6] sm:text-xs">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 font-display text-[2.5rem] font-medium leading-[1.1] sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#e0e5eb] sm:text-base">
            {t("lead")}
          </p>
        </div>
      </section>

      <section
        aria-label={t("platformsLabel")}
        className="relative mx-auto -mt-6 max-w-4xl px-4 pb-12 sm:px-8 sm:pb-16"
      >
        <ReviewPlatforms
          labels={{
            platformsLabel: t("platformsLabel"),
            closeGuide: t("closeGuide"),
            openInNewTab: t("openInNewTab"),
          }}
          platforms={platforms}
        />
        <p className="mx-auto mt-8 max-w-lg text-center text-xs leading-6 text-[#657387] sm:mt-10 sm:text-sm">
          {t("thankYou")}
        </p>
      </section>
    </main>
  );
}
