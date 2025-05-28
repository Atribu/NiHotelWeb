import React from "react";
import InstagramBar from "./InstagramBar";
import { CarouselSimple } from "./CarouselSimple";
import Loader from "./Loader";

// In your route file

const getInstagramDetails = async (id, access_token) => {
  const fields = [
    "id",
    "name",
    "username",
    "profile_picture_url",
    "followers_count",
    "follows_count",
    "media_count",
    "biography",
  ];

  const req = await fetch(
    `https://graph.facebook.com/v18.0/${id}?fields=${fields.join(",")}&access_token=${access_token}&limit=25`,
    {
      next: {
        revalidate: 86400,
      },
    },
  );

  const data = await req.json();

  if (data.error) {
    return {
      status: 500,
      error: true,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      data: data,
    };
  }

  return {
    status: 200,
    error: false,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    data: data,
  };
};

async function getInstagramMedia(id, access_token) {
  const fields = [
    "id",
    "caption",
    "media_product_type",
    "thumbnail_url",
    "media_type",
    "permalink",
    "children{media_type,media_url,owner}",
    "media_url",
    "like_count",
    "comments_count",
    "owner",
    "username",
    "comments{user,username,media,text,like_count,replies}",
  ];

  let url = `https://graph.facebook.com/v18.0/${id}/media?fields=${fields.join(",")}&access_token=${access_token}`;

  let req = await fetch(url);

  let data = await req.json();

  if (data.error) {
    return {
      status: 500,
      error: true,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      data: data,
    };
  }

  return {
    status: 200,
    error: false,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    data: data.data,
  };
}

async function Instagram() {
  const inonehotel = "17841457919429217";
  const ionicbeachclub = "17841458404181920";
  const access_token =
    "EAAFjP92vBLwBO0B1kS02lpLUFmTqdCFYY7nXhRW88TXZCS9XwZBvrGc1FMaPhyXitz61d7ZBCL0rmK7x1xvPU4iCBIDefmWK1ctiH08RhsFSEcbkMGlJKCAvsunFBY3wsE9TC1j1OHMw1XCXKuNRPftYziIpc49tFR2kEHwoxIZBiJsrnvRNBc3TZBwZDZD";

  const inoneHotelInstagramDetail = await getInstagramDetails(
    inonehotel,
    access_token,
  );
  const ionicBeachClubInstagramDetail = await getInstagramDetails(
    ionicbeachclub,
    access_token,
  );

  const instagramMedia = await getInstagramMedia(inonehotel, access_token);
  const ionicBeachMedia = await getInstagramMedia(ionicbeachclub, access_token);

  const defaultInoneHotelInstagramDetail = {
    name: "NiHotel",
    username: "nihotellara",
    media_count: 51,
    followers_count: 447,
  };

  const defaultIonicBeachClubInstagramDetail = {
    name: "NiHotel",
    username: "NiHotellara",
    media_count: 51,
    followers_count: 447,
  };

  return (
    <div className="relative mt-7 lg:-mt-8 mb-16 overflow-hidden">
      <div className=" mx-4 flex flex-col rounded-4  bg-white pb-4 shadow-[0_11px_49px_0px_rgba(0,0,0,0.07)] md:bg-transparent">
        {inoneHotelInstagramDetail && ionicBeachClubInstagramDetail ? (
          <div className="flex flex-col justify-evenly md:flex-row md:gap-4">
            {!inoneHotelInstagramDetail.error &&
            inoneHotelInstagramDetail.status == 200 ? (
              <InstagramBar data={inoneHotelInstagramDetail.data} />
            ) : (
              <InstagramBar data={defaultInoneHotelInstagramDetail} />
            )}
            {!ionicBeachClubInstagramDetail.error &&
            ionicBeachClubInstagramDetail.status == 200 ? (
              <InstagramBar data={ionicBeachClubInstagramDetail.data} />
            ) : (
              <InstagramBar data={defaultIonicBeachClubInstagramDetail} />
            )}
          </div>
        ) : (
          <div className="mb-8 mt-16 flex items-center justify-center">
            <Loader />
          </div>
        )}
        {!ionicBeachMedia.error &&
        ionicBeachMedia.status == 200 &&
        !instagramMedia.error &&
        instagramMedia.status == 200 ? (
          <CarouselSimple
            mediaData1={ionicBeachMedia}
            mediaData2={instagramMedia}
          />
        ) : (
          <div className="my-8 flex items-center justify-center">
            <Loader />
          </div>
        )}
      </div>
      {/* <div className="absolute bottom-0 left-0 top-0 z-50 h-full w-4 overflow-hidden bg-white"></div> */}
    </div>
  );
}

export default Instagram;