<template>
  <div class="page">
    <main>
      <header>
        THIS SITE IS CURRENTLY WORK IN PROGRESS
        <div class="welcome">
          <p class="letter">W</p>
          <p class="letter">E</p>
          <p class="letter">L</p>
          <p class="letter">C</p>
          <p class="letter">O</p>
          <p class="letter">M</p>
          <p class="letter">E</p>
        </div>
        <div class="about-me">
          <div class="name info">
            <h1>Name’s Noan</h1>
            <h2>aka Waradu</h2>
          </div>
          <div class="description info">
            <h1 class="profession">Designer & Developer from Swiss</h1>
            <h2 class="details">I’m 17 years old and working @ EpilogueTeam</h2>
          </div>
        </div>
      </header>
      <Section title="Made by me">
        <div class="h-scroll">
          <div class="items">
            <article class="item" v-for="project in projects">
              <NuxtLink :to="project.link" target="_blank">{{ project.title }}</NuxtLink>
              <p>{{ project.description }}</p>
            </article>
          </div>
        </div>
      </Section>
      <Section title="What I use">
        <div class="h-scroll">
          <div class="items">
            <article class="item" v-for="product in products">
              <NuxtLink :to="product.link" target="_blank">{{ product.title }}</NuxtLink>
              <p>{{ product.description }}</p>
            </article>
          </div>
        </div>
      </Section>
    </main>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title: string
  description: string
  link: string
}

const projects: Item[] = [
  {
    title: "A • NI • ME",
    description: "Helps you keep track of all the anime you’ve watched. It’s simple, fast, and easy to use.",
    link: "https://a.ni.me.waradu.dev"
  },
  {
    title: "Eggcellent",
    description: "Lets you search, controll and manage your bookmarks, history, extensions, and tabs.",
    link: "https://egg.waradu.dev"
  },
  {
    title: "Database",
    description: "A collection of tutorials or blog posts for things I like or had problems with.",
    link: "https://database.waradu.dev"
  },
]

const products: Item[] = [
  {
    title: "Figma",
    description: "I love designing and figma makes this easy for me.",
    link: "https://figma.com"
  },
  {
    title: "Arc / Zen",
    description: "A gorgeous and good browser’s all I need.",
    link: "https://arc.net"
  },
  {
    title: "Apple Products",
    description: "Yes I love Apple and you ain’t changing my mind.",
    link: "https://apple.com"
  },
  {
    title: "VScode / Jetbrain",
    description: "I would not be the person I am today without these",
    link: "https://code.visualstudio.com/"
  },
  {
    title: "Bitwarden",
    description: "Not much to say, it’s just great",
    link: "https://bitwarden.com"
  },
  {
    title: "Discord",
    description: "Hit me up if you want @waradu",
    link: "https://discord.com"
  },
]
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  main {
    display: flex;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    header {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
      max-width: 800px;
      padding-inline: 40px;

      .welcome {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .letter {
          font-size: 36px;
        }
      }

      .about-me {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        .info {
          display: flex;
          flex-direction: column;

          h1 {
            font-size: 24px;
          }

          h2 {
            color: rgba(0, 0, 0, 0.8);
            font-size: 12px;
          }

          &.description {
            text-align: end
          }
        }
      }
    }

    #made-by-me, #what-i-use {
      .h-scroll {
        overflow: auto;
        padding-left: calc(-360px + 50vw);
        padding-right: calc(-360px + 50vw);
        width: 100%;
        position: relative;

        &::after {
          content: "";
          display: block;
          position: fixed;
          height: 100%;
          width: 40px;
          right: 0;
          top: 0;
          background-image: linear-gradient(to right, transparent, #e8dfd7 80%);
          pointer-events: none;
        }

        .items {
          display: flex;
          gap: 40px;
          min-width: max-content;

          .item {
            display: flex;
            width: 100%;
            max-width: 250px;
            flex-direction: column;
            gap: 5px;

            a {
              color: #000;
              text-overflow: ellipsis;
              width: 100%;
              max-width: max-content;
              overflow: hidden;
              font-size: 16px;
              text-decoration-color: transparent;
              transition: .2s ease-in-out;
              white-space: nowrap;

              &:hover {
                text-decoration-color: #00000040 !important;
              }
            }

            p {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              align-self: stretch;
              text-overflow: ellipsis;
              font-size: 14px;
            }
          }
        }
      }
    }

    #what-i-use {
      .item {
        max-width: 150px !important;
      }
    }
  }
}
</style>