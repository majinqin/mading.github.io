import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
