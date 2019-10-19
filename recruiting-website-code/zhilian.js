// zhilian
// https://sou.zhaopin.com/?jl=538&sf=10001&st=15000&kw=%E5%89%8D%E7%AB%AF&kt=3
Array.from(
  document.querySelectorAll('.contentpile__content__wrapper__item  a .jobName')
)
  .slice(0, 10)
  .forEach(e => e.click())
