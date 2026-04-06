# GitHub Profile README Snippets for Data Scientists (2025-2026)

> Replace `YOUR_USERNAME` with your actual GitHub username (e.g., `robertkimutai-ds`).

---

## 1. Typing Animation SVG (DenverCoder1/readme-typing-svg)

```markdown
<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&multiline=true&repeat=true&width=800&height=100&lines=Hi+%F0%9F%91%8B+I'm+Robert+Kimutai;Data+Scientist+%7C+ML+Engineer+%7C+IoT+Enthusiast" alt="Typing SVG" />
  </a>
</p>
```

### Key Parameters
| Parameter    | Description                                      |
|-------------|--------------------------------------------------|
| `font`      | Font family (e.g., Fira+Code, Roboto+Mono)       |
| `size`      | Font size in px                                   |
| `duration`  | Typing speed in ms (lower = faster)               |
| `pause`     | Pause between lines in ms                         |
| `color`     | Hex color without `#` (38BDF8 = sky blue)         |
| `center`    | Center text horizontally                          |
| `vCenter`   | Center text vertically                            |
| `multiline` | Show multiple lines stacked                       |
| `width`     | SVG width                                         |
| `height`    | SVG height                                        |
| `lines`     | Semicolon-separated lines; `+` for spaces         |

Customize interactively: https://readme-typing-svg.demolab.com/demo/

---

## 2. GitHub Stats Card (anuraghazra/github-readme-stats) — Dark Theme

```markdown
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=38BDF8&icon_color=38BDF8&text_color=C9D1D9&count_private=true&include_all_commits=true" alt="GitHub Stats" />
</p>
```

### Auto Dark/Light Mode (uses GitHub's theme detection)

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
  <source media="(prefers-color-scheme: light)" srcset="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=default&hide_border=true&count_private=true" />
  <img alt="GitHub Stats" src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
</picture>
```

### Popular Dark Themes
`tokyonight`, `radical`, `merko`, `gruvbox`, `dracula`, `onedark`, `nord`, `catppuccin_mocha`

---

## 3. Top Languages Card

```markdown
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=38BDF8&text_color=C9D1D9&langs_count=10&hide=jupyter%20notebook,html,css" alt="Top Languages" />
</p>
```

### Layout Options
- `layout=compact` — horizontal compact layout (recommended)
- `layout=donut` — donut/pie chart
- `layout=donut-vertical` — vertical donut
- `layout=pie` — pie chart
- `hide=jupyter%20notebook` — hide specific languages (URL-encode spaces with `%20`)

### Side-by-Side Stats + Languages

```markdown
<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
  <img width="49%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=tokyonight&hide_border=true&langs_count=8" />
</p>
```

---

## 4. GitHub Streak Stats (DenverCoder1/github-readme-streak-stats)

```markdown
<p align="center">
  <img src="https://streak-stats.demolab.com?user=YOUR_USERNAME&theme=tokyonight&hide_border=true&background=0D1117&stroke=38BDF8&ring=38BDF8&fire=FF6B6B&currStreakLabel=38BDF8" alt="GitHub Streak" />
</p>
```

### Popular Dark Themes
`dark`, `tokyonight`, `radical`, `merko`, `gruvbox`, `dracula`, `onedark`, `nord`

### Simple Dark Theme Version

```markdown
[![GitHub Streak](https://streak-stats.demolab.com?user=YOUR_USERNAME&theme=tokyonight&hide_border=true)](https://git.io/streak-stats)
```

Customize interactively: https://streak-stats.demolab.com/demo/

---

## 5. Tech Stack Badges (Shields.io) with Logos

### Style: `for-the-badge` (large, bold — best for profiles)

```markdown
### Languages & Frameworks
![R](https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Data Science & ML
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![scikit--learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)

### DevOps & Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

### IoT & Hardware
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)
```

### Style: `flat-square` (minimal, sleek — alternative)

```markdown
![R](https://img.shields.io/badge/-R-276DC3?style=flat-square&logo=r&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![React](https://img.shields.io/badge/-React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![ESP32](https://img.shields.io/badge/-ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)
![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=flat-square&logo=arduino&logoColor=white)
![TensorFlow](https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
```

### Badge Syntax Explained
```
https://img.shields.io/badge/{LABEL}-{COLOR}?style={STYLE}&logo={LOGO_SLUG}&logoColor={LOGO_COLOR}
```
- `LABEL`: Text on the badge (use `--` for a literal hyphen, `_` for space)
- `COLOR`: Hex color without `#`
- `STYLE`: `for-the-badge`, `flat`, `flat-square`, `plastic`, `social`
- `LOGO_SLUG`: From https://simpleicons.org (lowercase, no spaces)
- `logoColor`: Color of the logo icon

---

## 6. Social Badges (LinkedIn, Kaggle, Portfolio)

```markdown
<p align="center">
  <a href="https://linkedin.com/in/YOUR_LINKEDIN">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://kaggle.com/YOUR_KAGGLE">
    <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle" />
  </a>
  <a href="https://robertkimutai-ds.github.io/Portfolio">
    <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  <a href="mailto:your.email@example.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
```

### Profile Views Counter

```markdown
![Profile Views](https://komarev.com/ghpvc/?username=YOUR_USERNAME&color=38BDF8&style=for-the-badge&label=PROFILE+VIEWS)
```

---

## 7. Additional Popular Elements for Data Scientists

### A. GitHub Contribution Snake Animation

Requires a GitHub Action. Create `.github/workflows/snake.yml`:

```yaml
name: Generate Snake

on:
  schedule:
    - cron: "0 0 * * *"  # Runs daily
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: Platane/snk@v3
        with:
          github_user_name: YOUR_USERNAME
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Then in your README:

```markdown
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-snake-dark.svg" />
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-snake.svg" />
  <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_USERNAME/output/github-snake.svg" />
</picture>
```

### B. GitHub Activity Graph

```markdown
<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=38BDF8&line=38BDF8&point=FF6B6B" alt="Activity Graph" />
</p>
```

### C. GitHub Trophies

```markdown
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=YOUR_USERNAME&theme=tokyonight&no-frame=true&no-bg=true&column=7" alt="GitHub Trophies" />
</p>
```

### D. Random Dev Quote

```markdown
<p align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" alt="Dev Quote" />
</p>
```

### E. Pinned Repos Card (feature specific projects)

```markdown
<p align="center">
  <a href="https://github.com/YOUR_USERNAME/REPO_NAME">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YOUR_USERNAME&repo=REPO_NAME&theme=tokyonight&hide_border=true" alt="Repo Card" />
  </a>
  <a href="https://github.com/YOUR_USERNAME/ANOTHER_REPO">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YOUR_USERNAME&repo=ANOTHER_REPO&theme=tokyonight&hide_border=true" alt="Repo Card" />
  </a>
</p>
```

### F. Wakatime Stats (if you use Wakatime)

```markdown
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api/wakatime?username=YOUR_USERNAME&theme=tokyonight&hide_border=true&layout=compact" alt="Wakatime Stats" />
</p>
```

---

## 8. Full Profile Template (Copy-Paste Ready)

```markdown
<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=28&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&repeat=true&width=800&height=80&lines=Hi+%F0%9F%91%8B+I'm+Robert+Kimutai;Data+Scientist+%7C+ML+Engineer+%7C+IoT+Enthusiast" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://linkedin.com/in/YOUR_LINKEDIN">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://kaggle.com/YOUR_KAGGLE">
    <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" />
  </a>
  <a href="https://robertkimutai-ds.github.io/Portfolio">
    <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=googlechrome&logoColor=white" />
  </a>
  <img src="https://komarev.com/ghpvc/?username=YOUR_USERNAME&color=38BDF8&style=for-the-badge&label=PROFILE+VIEWS" />
</p>

---

### About Me

- 🔭 I'm currently working on **[Project Name]**
- 🌱 I'm learning **[Technology]**
- 💬 Ask me about **Data Science, Machine Learning, IoT**
- 📫 Reach me at **your.email@example.com**

---

### Tech Stack

![R](https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)

---

### GitHub Stats

<p align="center">
  <img width="49%" src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
  <img width="49%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=tokyonight&hide_border=true&langs_count=8&hide=jupyter%20notebook,html,css" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=YOUR_USERNAME&theme=tokyonight&hide_border=true" alt="GitHub Streak" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&theme=tokyo-night&hide_border=true" alt="Activity Graph" />
</p>

---

### Featured Projects

<p align="center">
  <a href="https://github.com/YOUR_USERNAME/REPO_1">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YOUR_USERNAME&repo=REPO_1&theme=tokyonight&hide_border=true" />
  </a>
  <a href="https://github.com/YOUR_USERNAME/REPO_2">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=YOUR_USERNAME&repo=REPO_2&theme=tokyonight&hide_border=true" />
  </a>
</p>

---

### GitHub Trophies

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username=YOUR_USERNAME&theme=tokyonight&no-frame=true&no-bg=true&column=7" />
</p>

---

<p align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=tokyonight" />
</p>
```

---

## Notes

- **Consistent theming**: Use `tokyonight` across all cards for a cohesive dark look.
- **Logo slugs**: Find all available logos at https://simpleicons.org
- **Typing SVG demo**: https://readme-typing-svg.demolab.com/demo/
- **Streak stats demo**: https://streak-stats.demolab.com/demo/
- **Stats themes list**: https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md
- **Badge reference**: https://github.com/Ileriayo/markdown-badges
- **Awesome profiles**: https://github.com/abhisheknaiidu/awesome-github-profile-readme
