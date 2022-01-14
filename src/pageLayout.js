export const pageLayoutMaster = {
  categories: {
    byTitle: {
      developments: {
        urlFormatted: "developments",
        title: "developments",
        index: 3,
        video:
          "https://res.cloudinary.com/dt4xntymn/video/upload/v1638227066/mainSite/homeVideoAnimation/SD_Bar_1_vbyidn.mp4",
        pages: [
          {
            key: "maliview",
            labels: [Array(8).fill("maliview")],
          },
          {
            key: "aviator",
            labels: [Array(8).fill("aviator")],
          },
          {
            key: "map",
            labels: [Array(8).fill("map")],
          },
        ],
      },
      "apel-design": {
        urlFormatted: "apel-design",
        title: "apel design",
        index: 0,
        video:
          "https://res.cloudinary.com/dt4xntymn/video/upload/v1638227066/mainSite/homeVideoAnimation/SD_Bar_4_uvy6cy.mp4",
        pages: [
          {
            key: "meet-amit-apel",
            labels: Array(8).fill("meet amit apel"),
          },

          {
            key: "meet-the-team",
            labels: Array(8).fill("meet the team"),
          },
          {
            key: "what-we-do",
            labels: Array(8).fill("what we do"),
          },
          {
            key: "malibu-rebuild",
            labels: Array(8).fill("malibu rebuild"),
          },
          {
            key: "press",
            labels: Array(8).fill("press"),
          },
          {
            key: "contact-us",
            labels: Array(8).fill("contact us"),
          },
        ],
      },
      design: {
        urlFormatted: "design",
        title: "design",
        index: 2,
        video:
          "https://res.cloudinary.com/dt4xntymn/video/upload/v1638227061/mainSite/homeVideoAnimation/SD_Bar_3_btxkep.mp4",
        pages: [
          {
            key: "furniture",
            labels: [Array(8).fill("furniture")],
          },
          {
            key: "concept",
            labels: [Array(8).fill("concept")],
          },
          {
            key: "sculptures",
            labels: [Array(8).fill("sculptures")],
          },
        ],
      },
      architecture: {
        urlFormatted: "architecture",
        title: "architecture",
        index: 1,
        video:
          "https://res.cloudinary.com/dt4xntymn/video/upload/v1638227068/mainSite/homeVideoAnimation/SD_Bar_2_rwcg50.mp4",
        pages: [
          {
            key: "private-homes",
            labels: [Array(8).fill("private-homes")],
          },
          {
            key: "multi-family",
            labels: [Array(8).fill("multi family")],
          },
          {
            key: "mixed-use",
            labels: [Array(8).fill("mixed use")],
          },
          {
            key: "hospitality",
            labels: [Array(8).fill("hospitality")],
          },
          {
            key: "commercial",
            labels: [Array(8).fill("commercial")],
          },
          {
            key: "video-renders",
            labels: [Array(8).fill("video renders")],
          },
        ],
      },
    },
  },
  pages: {
    byTitle: {
      maliview: {
        component: "Developments",
        title: "maliview",
        urlFormatted: "maliview",
        data: {
          img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1637713367/mainSite/Developments/33340_MULHOLLAND_HWY_IMG_5_nswjvh.jpg",
          description:
            "The villa will have open space plan with high ceilings with a touch of nature coming indoors. The home includes 4 perfectly placed bedrooms with views to admire the scenery as well as 4.5 bathrooms. All of the interior will be featuring custom interior design by Amit Apel Design, Inc. From an infinity pool you will be enjoying the ocean in the horizon, the view of Santa Monica Mountains, and overwhelming sunrises, and sunsets.",
          link: "https://maliviewestates.com/",
          title: "Maliview",
        },
      },
      aviator: {
        title: "aviator",
        component: "Developments/Developments",
        urlFormatted: "aviator",
        data: {
          img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1637713367/mainSite/Developments/CAYMAN_AVIATOR_20210722_1_i39rsx.jpg",
          description:
            "Conceptually, Apel Design wanted to create the notion that the architecture of building continues beyond. In a sense, the forms flow throughout and never stop. The architecture forms emerge from the ground, extends to the horizon and divides into two beautiful irregular volumetric elements as if the architecture was slicing the space, emphasizing the gorgeous views of the Malibu mountains and the Pacific Ocean. The bird-like building program also incorporates the ideas of flow and continuation; the first level proposes an open floor plan with a glass facade that opens up the space to a beautiful deck and a second floor for bedrooms that are elevated from the ground to again emphasize this notion of flow and lightness.",
          link: "https://malibuaviator.com/",
          title: "Aviator",
        },
      },
      "video-renders": {
        title: "video renders",
        urlFormatted: "video-renders",
        component: "Masonry/Masonry",
      },
      "meet-the-team": {
        title: "meet the team",
        urlFormatted: "meet-the-team",
        component: "MeetTheTeam/MeetTheTeam",
      },

      furniture: {
        title: "furniture",
        urlFormatted: "furniture",
        component: "Masonry/Masonry",
      },
      sculptures: {
        title: "sculptures",
        urlFormatted: "sculptures",
        component: "Masonry/Masonry",
      },

      "private-homes": {
        title: "private homes",
        urlFormatted: "private-homes",
        categories: [
          {
            name: "All",
            urlFormatted: "/",
          },
          {
            name: "Contemporary",
            urlFormatted: "contemporary-houses",
          },

          {
            name: "Spanish Revival",
            urlFormatted: "spanish-revival-homes",
          },
          {
            name: "Traditional",
            urlFormatted: "traditional-homes",
          },
        ],
      },
      hospitality: {
        title: "hospitality",
        urlFormatted: "hospitality",
      },
      "mixed-use": {
        title: "mixed use",
        urlFormatted: "mixed-use",
        videos: {
          "50581f59-1d7f-4238-a3dd-834464a40049": {
            video: "https://youtu.be/embed/wxRpmJaPfrQ",
          },
          "68db54c2-18ae-4a3d-8994-6cef7672e615": {
            video: "https://youtu.be/embed/6htaSST25hc",
          },
        },
      },
      "meet-amit-apel": {
        title: "meet amit apel",
        urlFormatted: "meet-amit-apel",
        component: "MeetAmitApel/MeetAmitApel",
      },
      "what-we-do": {
        title: "what we do",
        urlFormatted: "what-we-do",
        component: "WhatWeDo/WhatWeDo",
      },
      commercial: {
        title: "commercial",
        urlFormatted: "commercial",
      },
      "multi-family": {
        title: "multi family",
        urlFormatted: "multi-family",
        videos: {
          "10e44ccf-241f-47b8-8c56-72e76c3cdd3f": {
            video: "https://www.youtube.com/embed/4U8GFaPPN8A",
          },
          "4710d858-d363-4852-b69a-f7616026b19c": {
            video: "https://www.youtube.com/embed/uMxkF8007rg",
          },
          "755e01e5-d01a-488b-9c53-e92f21309121": {
            video: "https://www.youtube.com/embed/NNpfFAAdq5c",
          },
          "6082d254-5e18-4cde-a07a-0dd9e245b4c4": {
            video: "https://www.youtube.com/embed/sn8uMO5kvHQ",
          },
          "b38327e6-2eee-42b7-a14f-81959dfa6e70": {
            video: "https://www.youtube.com/embed/fZ12k_0CuK0",
          },
          "5d9199aa-aa3a-493c-b1c6-31591f8cc194": {
            video: "https://www.youtube.com/embed/Gibdo4VVRbg",
          },
          "1a267c8b-3a0c-4426-8fb9-3eb662201129": {
            video: "https://www.youtube.com/embed/a-OIhZv8ZII",
          },
        },
      },
      "malibu-rebuild": {
        title: "malibu rebuild",
        urlFormatted: "malibu-rebuild",
        component: "MalibuRebuild/MalibuRebuild",
      },
      "contact-us": {
        title: "contact us",
        urlFormatted: "contact-us",
        component: "Contact/Contact",
      },

      concept: {
        title: "concept",
        urlFormatted: "concept",
        component: "ArchiGallery/ArchiGallery",
      },
      press: {
        title: "press",
        urlFormatted: "press",
        component: "Press/Press",
      },
      map: {
        title: "project map",
        urlFormatted: "map",
        component: "Map/Map",
      },
    },
  },
};

export const pageLayoutMasterArr = [
  "apel-design",
  "architecture",
  "design",
  "developments",
];

export const videos = (function allVideos() {
  const arr = [];
  for (const key in pageLayoutMaster.pages.byTitle) {
    if (Object.hasOwnProperty.call(pageLayoutMaster.pages.byTitle, key)) {
      if (pageLayoutMaster.pages.byTitle[key].videos) {
        for (const property in pageLayoutMaster.pages.byTitle[key].videos) {
          if (
            Object.hasOwnProperty.call(
              pageLayoutMaster.pages.byTitle[key].videos,
              property
            )
          ) {
            const video = pageLayoutMaster.pages.byTitle[key].videos[property];
            video.key = property;
            arr.push(video);
          }
        }
      }
    }
  }
  return arr;
})();
