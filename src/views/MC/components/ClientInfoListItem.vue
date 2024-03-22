<script setup>
import { ref, onMounted } from 'vue'

const ClientInfoListItemData = ref([])
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  imgUrlName: {
    type: String,
    required: true
  },
  modrinthLinkName: {
    type: String,
    required: true
  },
  curseforgeLinkName: {
    type: String,
    required: true
  }
})

onMounted(async () => {
  ClientInfoListItemData.value = props.data
})


const imgUrl = (imgUrlName, imgName) => {
  return new URL(`/src/assets/icon/${imgUrlName}/${imgName}.webp`, import.meta.url)
}
</script>

<template>
  <div class="container" id="container">
    <ul>
      <li v-for="item in ClientInfoListItemData" :key="item.id">
        <div class="logo">
          <img :src="imgUrl(imgUrlName, item.imgName)" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <h3>
              {{ item.name }}
            </h3>
          </div>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
        <div class="icon">
          <a :href="item.otherLink" target="_blank" :title="`前往${item.otherName}查看详情`" v-if="item.otherName">
            <img :src="`/src/assets/icon/logo/${item.otherName}.svg`" :alt="item.otherName" class="other-icon" />
          </a>
          <a :href="`https://modrinth.com/${modrinthLinkName}/${item.modrinthName}`" target="_blank"
            title="前往modrinth查看详情" v-if="item.modrinthName">
            <img src="/src/assets/icon/logo/modrinth.svg" alt="modrinth" class="modrinth-icon" />
          </a>
          <a :href="`https://www.curseforge.com/minecraft/${curseforgeLinkName}/${item.curseforgeName}`" target="_blank"
            title="前往curseforge查看详情" v-if="item.curseforgeName">
            <img src="/src/assets/icon/logo/curseforge.svg" alt="curseforge" class="curseforge-icon" />
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.container {
  ul {
    li {
      display: flex;
      align-items: flex-start;
      height: 5.625rem;
      background-color: #fff;
      border-radius: 0.5rem;
      margin-bottom: 0.9375rem;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.625rem;
        margin-right: 1.25rem;
        margin-left: 1rem;

        img {
          display: block;
          width: 4rem;
          height: 4rem;
          background-color: #f4f4f5;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .title {
          flex: 0 0 auto;
          margin-top: .7rem;
        }

        .description {
          flex: 1 1 auto;
          overflow: hidden;
          font-size: 0.9375rem;
          margin-top: 0.125rem;
        }
      }

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: auto;
        margin-bottom: 0.125rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.875rem;
          height: 1.875rem;
          margin-right: 0.3125rem;
        }

        .other-icon {
          width: 1.5rem;
        }

        .modrinth-icon {
          width: 1.5rem;
        }

        .curseforge-icon {
          width: 1.875rem;
        }
      }
    }
  }
}

@media (max-width: 992px) {

  #container {

    li {
      height: 6.875rem;

      .logo {
        height: 6.875rem;
      }

      .content {
        .title {
          margin-top: 1.25rem;
        }

        .description {
          font-size: 14.5px;
        }
      }

      .icon {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        margin-bottom: 0.125rem;

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.3125rem;
        }
      }

    }
  }
}
</style>