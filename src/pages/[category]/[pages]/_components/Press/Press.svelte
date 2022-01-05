<script>
  import { ready } from "@roxi/routify";

  import gsap from "gsap";

  import { onDestroy, onMount } from "svelte";
  import AdditionalPress from "./AdditionalPress.svelte";
  import PressCard from "./PressCard.svelte";

  let windowHeight = 0,
    windowWidth = 0;

  let wrapper;
  let scrollTl;
  onMount(() => {
    scrollTl = gsap.timeline({
      paused: true,
    });
    scrollTl.to(wrapper, {
      y: "-180vh",
      duration: 2,
    });
    scrollTl.to(
      ".main-text-header",
      {
        opacity: 0,
        duration: 2,
      },
      "<"
    );
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    $ready();
  });
  onDestroy(() => {
    gsap.set(".main-text-header", {
      opacity: 1,
    });
  });

  const images = [
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_3_jrf0mt.jpg",
      link: "https://www.archiscene.net/interior-design/moment-hotel-amit-apel-design/",
    },
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_6_idnrik.jpg",
      link: "https://www.latimes.com/business/realestate/hot-property/la-fi-hotprop-outside-box-20160510-story.html",
    },
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_7_fqqhhs.jpg",
      link: "https://www.homebuilderdigest.com/the-15-best-residential-architects-in-malibu-california/",
    },
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380455/mainSite/press/Press_2_uiz2po.jpg",
      link: "http://voyagela.com/interview/meet-amit-apel-apel-design-inc-malibu/",
    },
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_4_pl9uqy.jpg",
      link: "https://www.gessi.com/it/project/design/93",
    },

    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_5_e8oy37.jpg",
      link: "https://www.google.com/url?q=https://www.californiahomedesign.com/property/2015/03/27/open-house-obsession-little-holmby-looker-6495m/&sa=D&source=editors&ust=1633933659385000&usg=AOvVaw0XyO2cGSBqPsV15pNuMNcM",
    },
    {
      img: "https://res.cloudinary.com/dt4xntymn/image/upload/v1633380454/mainSite/press/Press_1_pt9bba.jpg",
      link: "http://voyagela.com/interview/meet-amit-apel-apel-design-inc-malibu/",
    },
  ];
  let text = [
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_3_PNG_jnmqzk.png",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_2_PNG_dtejy7.png",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_4_PNG_zqtwne.png",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_5_PNG_ysj7nx.png",
    "https://res.cloudinary.com/dt4xntymn/image/upload/v1633988338/mainSite/press/text/Press_PNG_se76b5.png",
  ];
</script>

<div class="hidden-wrapper">
  <div class="button-wrapper">
    <div class="button-container">
      <button
        on:click="{() => {
          scrollTl.reverse();
        }}"></button>
      <button
        on:click="{() => {
          scrollTl.play();
        }}"></button>
    </div>
  </div>
  <div bind:this="{wrapper}" class="wrapper">
    <div class="container">
      <div class="content-container flex-item">
        <div class="press-container">
          {#each images.slice(0, 8) as card, i}
            <PressCard
              windowHeight="{windowHeight}"
              windowWidth="{windowWidth}"
              img="{card.img}"
              link="{card.link}"
              index="{i}"
            />
          {/each}
        </div>
        <div class="text-image-wrapper">
          {#each text as img}
            <div class="text-image-container">
              <img src="{img}" alt="" />
            </div>
          {/each}
        </div>
      </div>
    </div>
    <AdditionalPress />
  </div>
</div>

<style lang="scss">
  .button-wrapper {
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    box-shadow: 0 0 10px 0px rgb(146, 146, 146);


    padding: 30px;
    bottom: 0;
    margin: auto;
    z-index: 4;
    display: flex;
    align-items: center;
  }
  .button-container {
    width: 8px;
    height: 85px;
    right: 20px;
    display: flex;

    flex-direction: column;

    button {
      cursor: pointer;
      height: 100%;
      display: block;
      &:first-child {
        margin-bottom: 10px;
      }
      border: none;

      background: gray;
      border-radius: 5px;
    }
  }
  .hidden-wrapper {
    height: 100%;
    overflow: hidden;
  }
  .wrapper {
    height: 100%;
    position: relative;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .press-container {
    height: 100%;
    display: grid;
    position: relative;
    width: 100%;
    grid-template-columns: repeat(20, minmax(10px, 1fr));
    grid-template-rows: repeat(20, 1fr);

    max-width: 1600px;
  }
  .content-container {
    width: 100%;
    position: relative;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-image-wrapper {
    max-height: 42vh;
    grid-area: 3/1/26/26;
    display: grid;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    grid-template-columns: repeat(25, 4%);
    grid-template-rows: repeat(25, 4%);
    padding: 0 7vw;
    width: 100%;

    align-items: center;
    pointer-events: none;
    position: absolute;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .text-image-container {
      &:nth-child(1) {
        grid-area: 1/21/6/28;
        transform: rotateZ(25.8deg);
      }
      &:nth-child(2) {
        grid-area: 22/3/32/9;
        transform: rotateZ(-7.7deg);
      }
      &:nth-child(3) {
        grid-area: 24/15/27/28;
        transform: rotateZ(7.7deg);
      }
      &:nth-child(4) {
        grid-area: 12/8/16/19;
      }
      &:nth-child(5) {
        transform: rotateZ(-10deg);
        grid-area: 1/3/2/11;
      }
    }
  }
</style>
