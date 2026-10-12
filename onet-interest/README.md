# 职业兴趣插画

2026-10-10 用户要求参考现有求职人设 UI，并允许使用 image2，随后要求增加角色。采用内置 ImageGen 工具生成六幅独立活动插画；工具没有可指定的模型参数，因此不宣称调用了某个特定模型版本。未使用 CLI/API fallback，也未新增图片生成运行时依赖。

本地源图保留于 Codex generated_images，项目使用下列 768×768 WebP 版本，仅做尺寸及编码优化，无裁切或内容编辑：

- `making-v1.webp`：海狸制作鸟屋，约 66 KB。
- `research-v1.webp`：蓝色猫头鹰观察烧瓶，约 60 KB。
- `creating-v1.webp`：水獭持画笔和调色板，约 59 KB。
- `helping-v1.webp`：金毛讲解绘本，约 65 KB。
- `organizing-v1.webp`：狮子持协作清单，约 66 KB。
- `recording-v1.webp`：松鼠整理文件夹，约 76 KB。

六图是工作活动的装饰性示例，不作为 RIASEC 类型、能力、人格或职业匹配的判定。结果页研究插画也是装饰，不根据得分赋予动物人设。

用户随后将展示数量改为四个。当前开始页仅展示海狸、猫头鹰、水獭、金毛；狮子和松鼠保留为未使用的素材，未放入当前角色配置或界面。

## 最终提示词设定

所有调用均附带已查看的 `personas/owl.webp`、`personas/fox.webp`、`personas/dog.webp` 作为风格参考，不作为编辑目标。共同设定：illustration-story，单幅方形 1024×1024 插画，匹配现有手绘水粉、可见笔触、大眼睛、亲切动物角色与低密度浅色背景；主体居中约占 80%，头及手完整；无文字、数字、Logo、边框或 UI，避免光滑 3D、矢量图标、霓虹渐变、复杂布景和过多闪光。

- 动手：chestnut-brown beaver craftsperson wearing a soft blue work apron, holding a wooden handmade birdhouse and a small hand tool, cheerful and focused, three-quarter portrait; pale warm cream backdrop with sparse soft blue painterly strokes。
- 研究：bright blue anthropomorphic owl researcher with round dark-blue spectacles, wearing a blue jacket and white shirt, smiling with curiosity, examining a small flask with soft turquoise liquid and holding an open notebook; pale powder blue backdrop。
- 创作：brown anthropomorphic otter artist in a muted lavender painter's smock, holding a wooden palette with blue, green, warm yellow and coral paint plus a paintbrush; pale lavender backdrop with understated blue and mint brush marks。
- 帮助：golden retriever mentor wearing a sea-green cardigan over a cream shirt, holding an open picture book and pointing at a page, happy and welcoming; pale mint backdrop。
- 组织：golden lion organizer wearing a navy-blue casual jacket and cream shirt, holding a clipboard with simple checkmarks and gesturing with an open paw, cheerful; pale peach backdrop。
- 整理：russet squirrel archivist in a light blue shirt holding three pastel file folders and a pencil, attentive and relaxed; pale buttery yellow backdrop。

新增三图分别附带已查看的 `personas/dog.webp`、`personas/lion.webp`、`personas/squirrel.webp`，以及现有 `onet-interest/creating-v1.webp`、`onet-interest/research-v1.webp`，作为风格参考。其余共同设定相同。

背景不透明。原始生成图未覆盖现有求职人设资产。
