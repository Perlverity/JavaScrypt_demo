// 年間の売上と利益のデータ
const report = [
  {
    month: '1',
    revenue: 7700000,
    profit: 1166900,
  },
  {
    month: '2',
    revenue: 8500000,
    profit: 320300,
  },
  {
    month: '3',
    revenue: 8600040,
    profit: 900030,
  },
  {
    month: '4',
    revenue: 9000003,
    profit: 1520000,
  },
  {
    month: '5',
    revenue: 8100000,
    profit: 1220890,
  },
  {
    month: '6',
    revenue: 8772652,
    profit: 610300,
  },
  {
    month: '7',
    revenue: 8087550,
    profit: 910300,
  },
  {
    month: '8',
    revenue: 9985166,
    profit: 543200,
  },
  {
    month: '9',
    revenue: 8448764,
    profit: 741200,
  },
  {
    month: '10',
    revenue: 8406786,
    profit: 342210,
  },
  {
    month: '11',
    revenue: 8094797,
    profit: 710190,
  },
  {
    month: '12',
    revenue: 8838988,
    profit: 815610,
  },
]

// let report_label = []

// for (let i = 0; i < report.length; i++) {
//     let month = report[i].month
//     month = month + '月'
//     report_label.push(month)
// }

const report_label = report.map((el) => {
  console.log(el)
  let month = el.month
  month = month + '月'
  return month
})

// 売上データ
const report_revenue = report.map((el) => {
  return el.revenue
})

// 利益データの配列
const report_profit = report.map((el) => {
  return el.profit
})

// 営業利益率の抽出
// let high_profit_rate = []

// for (let i = 0; i < report.length; i++) {
//     const profit_rate = (report[i].profit / report[i].revenue) * 100

//     // 利益率が10%を超える月を high_profit_rate 配列にプッシュ
//     if (profit_rate > 10) {
//         let month = report[i].month + '月'
//         high_profit_rate.push(month)
//     }
// }

// report.forEach((el) => {
//     const profit_rate = (el.profit / el.revenue) * 100

//     if (profit_rate > 10) {
//         let month = el.month + '月'
//         high_profit_rate.push(month)
//     }
// })

let high_profit_rate = report.filter((el) =>
    (el.profit / el.revenue) * 100 > 10
)

// 抽出後に month のみ取得
high_profit_rate = high_profit_rate.map((el) => {
  let month = el.month
  month = month + '月'
  return month
})

const text = high_profit_rate.join('・')
document.getElementById('profit-rate-high-month').textContent = text

console.log(high_profit_rate)

const ctx = document.getElementById('myChart').getContext('2d')

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: report_label,
    datasets: [
      {
        // 売上データ
        label: '売上',
        data: report_revenue,
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        // 利益データ
        label: '利益',
        data: report_profit,
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  },
})
