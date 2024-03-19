<script setup>
import { ref, computed, defineProps, onMounted, watch } from "vue"

const items = ref([])
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

onMounted(async () => {
  items.value = props.data
})

//-----筛选功能-----

//存储用户选择的标签
const selectedTags = ref([])

const allTags = computed(() => {
  const tagSet = new Set() //用于存储所有唯一标签
  items.value.forEach((item) => {
    //遍历所有数据
    item.tags.split(" ").forEach((tag) => {
      //遍历所有的标签 并按空格分隔
      tagSet.add(tag) //把唯一标签添加进Set *使用了Set自动去重的特性
    })
  })
  return Array.from(tagSet) //返回储存所有唯一标签的数组
})

const filteredItems = computed(() => {
  if (selectedTags.value.length === 0) {
    //如果selectedTags长度为0 即用户没有选择标签
    return items.value //返回全部数据
  }

  //如果用户选择了标签
  return items.value.filter((item) => {
    //根据用户选择的标签过滤数据
    const itemTags = new Set(item.tags.split(" ")) //将所有数据的标签按空格分割成数组并转换为Set
    return selectedTags.value.every((selectedTag) => itemTags.has(selectedTag)) //检查用户选择的标签是否都在数据的标签Set中
  })
})

watch(
  () => props.data,
  (newData, oldData) => {
    if (newData !== oldData) {
      items.value = props.data
    }
  },
)

const imgUrl = (url) => {
  return new URL(`/src/assets/icon/mods/${url}.webp`, import.meta.url)
}
</script>

<template>
  <div class="container" v-loading.fullscreen.lock="items.length === 0" element-loading-background="#fff">
    <el-row v-show="items">
      <el-col :xs="0" :sm="0" :md="5" :lg="5" :xl="5" class="hidden-sm-and-down">
        <div class="tag-list">
          <p>筛选</p>
          <el-checkbox-group v-model="selectedTags">
            <el-checkbox v-for="tag in allTags" :key="tag.id" :label="tag" size="large"
              :validate-event="false"></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="19" :lg="19" :xl="19">
        <div class="list">
          <ul>
            <li v-for="item in filteredItems" :key="item.id">
              <div class="logo">
                <img :src="imgUrl(item.imgName)" alt="" />
              </div>
              <div class="content">
                <div class="title">
                  <h3>
                    {{ item.modName }}
                    <p v-show="item.chineseName">{{ item.chineseName }}</p>
                  </h3>
                </div>
                <div class="description">{{ item.description }}</div>
                <div class="tags">
                  <span>{{ item.tags }}</span>
                </div>
              </div>
              <div class="icon">
                <a :href="`https://modrinth.com/mod/${item.modrinthName}`" target="_blank" v-show="item.modrinthName">
                  <img src="/src/assets/icon/logo/modrinth.svg" alt="modrinth" class="modrinth-icon" />
                </a>
                <a :href="`https://www.curseforge.com/minecraft/mc-mods/${item.curseforgeName}`" target="_blank"
                  v-show="item.curseforgeName">
                  <img src="/src/assets/icon/logo/curseforge.svg" alt="curseforge" class="curseforge-icon" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.container {
  width: 60vw;
  margin: 0 auto;
  margin-top: 1.875rem;
  overflow: hidden;

  .tag-list {
    width: 90%;
    min-width: 7.5rem;
    height: fit-content;
    background-color: #fff;
    border-radius: 0.25rem;

    p {
      margin-left: 1.875rem;
      height: 2rem;
      line-height: 2rem;
      font-weight: 600;
      color: #999;
    }

    .el-checkbox-group {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .el-checkbox {
        margin-left: 1.875rem;

        :deep(.el-checkbox__inner) {
          border: 1px solid #000;
        }

        :deep(.is-checked .el-checkbox__inner) {
          border: none;
        }
      }
    }
  }

  .list {
    li {
      display: flex;
      align-items: flex-start;
      height: 5.625rem;
      background-color: #fff;
      margin-bottom: 0.9375rem;
      border-radius: 0.5rem;

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
          margin-top: 0.1875rem;

          p {
            display: inline-block;
            transform: translateY(-0.0625rem);
            font-size: 14px;
            color: #999;
          }
        }

        .description {
          flex: 1 1 auto;
          overflow: hidden;
          font-size: 0.9375rem;
          margin-top: 0.125rem;
        }

        .tags {
          flex: 0 0 auto;
          margin-bottom: 0.5rem;

          span {
            width: fit-content;
            height: fit-content;
            padding: 0.1875rem;
            border-radius: 0.1875rem;
            background-color: #ecf5ff;
            color: #606266;
            font-size: 0.8125rem;
          }
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
          margin-right: 0.3125rem;
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

//响应式布局设置
@media (max-width: 1200px) {
  .container {
    .tag-list {
      p {
        margin-left: 1.25rem;
      }

      .el-checkbox-group {
        .el-checkbox {
          margin-left: 1.25rem;
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .container {
    width: 90vw;

    .list {
      li {
        height: 6.875rem;

        .logo {
          height: 6.875rem;
        }

        .content {
          .description {
            margin-top: 0.0625rem;
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
}
</style>
