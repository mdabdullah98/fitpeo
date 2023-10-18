const headerChart = [
  {
    title: "earning",
    money: "$198k",
    updownArrow: "⬆",
    percentage: "37.8%",
    icon: "./icons8-dollar-50.png",
    alt: "icon-dollar--v8",
    month: "this month",
    bgColor: "rgb(232,255,242)",
    txtColor: "rgb(0,79,0)",
  },
  {
    title: "orders",
    money: "$2.4k",
    updownArrow: "⬇",
    percentage: "2%",
    icon: "./icons8-document-64.png",
    alt: "icon-document--v8",
    month: "this month",
    bgColor: "rgb(231,219,255)",
    txtColor: "red",
  },
  {
    title: "balance",
    money: "$2.4k",
    updownArrow: "⬇",
    percentage: "2%",
    icon: "./icons8-wallet-64.png",
    alt: "icon-wallet--v8",
    month: "this month",
    bgColor: "rgb(204,243,255)",
    txtColor: "red",
  },
  {
    title: "total sales",
    money: "$89k",
    updownArrow: "⬆",
    percentage: "11%",
    icon: "./icons8-bag-64.png",
    alt: "icon-bag---v8",
    month: "this week",
    bgColor: "rgb(254,197,232)",
    txtColor: "rgb(0,79,0)",
  },
];

const ChartArray = new Array(12).fill(true);

export { headerChart, ChartArray };
