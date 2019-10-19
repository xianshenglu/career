/**
 * * 在控制台执行下面代码
 * ? 自动点击下一页继续筛选? 这样打开的窗口太多，容易卡死
 * TODO 关键词排除，譬如 '压力'
 * TODO 本次搜索的时间在localStroage里，下次搜索直接从里面取
 * @param time 筛选日期，默认三天内
 */

// boss 下面这个日期之前的看了
// https://www.zhipin.com/geek/new/index/recommend?expectId=24439869&sortType=2
openWinAfterTime('2019/02/19 17:02')

function openWinAfterTime(time = Date.now() - 3 * 24 * 60 * 1000) {
  $('.job-primary [ka^=new_list_job_]')
    .toArray()
    .map(ele => ele.href)
    .forEach((url, index) => {
      filterPage(url, time)
    })
}

function filterPage(url, filterTime) {
  let reg = /\d{4}\s*-\s*\d{1,2}\s*-\s*\d{1,2}\s*\d{1,2}\s*:\s*\d{1,2}/
  let win = window.open(url)
  $(win).load(function() {
    let publishTime = new Date(
      $(this.document)
        .find('.sider-company .gray')
        .text()
        .match(reg)[0]
    )
    let isPast = publishTime.getTime() < new Date(filterTime).getTime()
    if (isPast) {
      win.close()
    }
  })
}
