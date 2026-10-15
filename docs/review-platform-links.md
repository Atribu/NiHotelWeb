# Guest review page

The page uses the existing site layout and is available at:

- Turkish: `/tr/yorumlar`
- English: `/en/leave-a-review`
- German: `/de/bewertung-abgeben`
- Russian: `/ru/ostavit-otzyv`

The former Turkish URL, `/tr/yorum-birak`, permanently redirects to `/tr/yorumlar`.

Destinations are kept in `client/lib/reviewPlatforms.js`. Guest-facing instructions are in the `reviews` namespace of each locale's messages. Selecting a platform displays its instructions and an external link; authentication takes place on that platform.

## Google review link

Set `GOOGLE_REVIEW_URL` in the deployment environment to the hotel's actual review link copied from Google Business Profile → Read reviews → Get more reviews. Rebuild the application after changing it. This also switches the Google card to the direct-review wording.

Until that link is supplied, Google opens a Maps search for Teona Hotel and the hotel's full address. The card accurately says to view the hotel on Google and explains how to find the review option. No unverified Place ID is used.

Official instructions: https://support.google.com/business/answer/16816815?hl=tr

## Verified destinations (15 October 2026)

| Platform | Destination | Meaning |
| --- | --- | --- |
| Google | Maps hotel search, or configured review URL | Google account required to publish a review. |
| Booking.com | https://www.booking.com/signin.html | Sign in with the account used for the completed hotel reservation and find the review option. |
| Expedia | https://www.expedia.com/trips | Trips page offers account sign-in and booking lookup; the stay-specific review may also come through Expedia's invitation. |
| Etstur | https://www.otelpuan.com/Teona-Otel/yorum-yaz | Verified public review form for Teona Otel. |
| Airbnb | https://www.airbnb.com/users/reviews | Official account reviews page, redirects signed-out guests to login and back to reviews. Reviews are tied to the guest's stay. |
| Tatilsepeti | https://www.tatilsepeti.com/teona-otel | Correct hotel profile; no public submission form verified. |
| Tatilbudur | https://www.tatilbudur.com/teona-hotel | Correct hotel profile; no public submission form verified. |
| Otelz | https://www.otelz.com/hotel/teona-hotel | Correct hotel profile with existing guest reviews; exact submission route not verified. |
| ENUYGUN | https://www.enuygun.com/otel/detay/teona-hotel-217697/ | Correct hotel profile; reviews are from customers who purchased and stayed, but no public submission route was verified. |
| Setur | https://www.tripadvisor.com.tr/Hotel_Review-g298012-d2469489-Reviews-Teona_Otel-Izmit_Kocaeli_Province.html | Setur displays Tripadvisor reviews. This opens the matching hotel's Tripadvisor profile, where the guest can find its review option. |
| Jolly | https://www.jollytur.com/teona-hotel | Hotel profile with aggregated TrustYou review summaries. No independent Jolly review form verified. |
| Sorgulamax | https://sorgulamax.com/otel/teona-hotel | Correct hotel profile and guest review list; no public submission form verified. |

The profile identities were checked against the İzmit address and, where shown, tourism operation certificate 12796. Do not change profile links into guessed review/login URLs or add session-specific redirect parameters.

Additional official references:

- Booking.com: https://www.booking.com/trust-and-safety/travellers.html
- Expedia: https://www.expedia.com/lp/b/content-guidelines
- Airbnb: https://www.airbnb.com/help/article/3531 and https://www.airbnb.com/help/article/995
- Otelz: https://www.otelz.com/corporate/legal/terms-and-conditions
- ENUYGUN: https://www.enuygun.com/hakkinda/
- Jolly: https://www.jollytur.com/yardim-merkezi

No rating filtering, incentives, review submission, or platform credential collection takes place on this site.
