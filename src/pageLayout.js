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
            key: "multi-units",
            labels: [Array(8).fill("multi-units")],
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

      "multi-units": {
        title: "multi units",
        urlFormatted: "multi-units",
        component: "ArchiGallery/ArchiGallery",
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
