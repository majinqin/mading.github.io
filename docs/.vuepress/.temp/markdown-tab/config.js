import CodeTabs from "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/star/Documents/mine/github_code/mading.github.io/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
