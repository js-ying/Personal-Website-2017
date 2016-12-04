var guand = angular.module('guand', []);

guand.controller('WorksCtrl', function($scope) {

    $scope.worksList = {

      "club": [
        {
          "img": "img/works/pi1.jpg",
          "name": "金頭腦",
          "date": "2013年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi1.jpg"
        },
        {
          "img": "img/works/pi2.jpg",
          "name": "紫錐花反毒宣傳活動",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi2.jpg"
        },
        {
          "img": "img/works/pi3.jpg",
          "name": "全元逃走中",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi3.jpg"
        },
        {
          "img": "img/works/pi4.jpg",
          "name": "健康性教育宣導",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi4.jpg"
        },
        {
          "img": "img/works/ai8.jpg",
          "name": "藥物濫用防制講座",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai8.jpg"
        },
        {
          "img": "img/works/pi5.jpg",
          "name": "四大義工評鑑封面",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi5.jpg"
        },
        {
          "img": "img/works/pi6.jpg",
          "name": "社團博覽會招生系列1",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi6.jpg"
        },
        {
          "img": "img/works/ai1.jpg",
          "name": "社團博覽會招生系列2",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai1.jpg"
        },
        {
          "img": "img/works/ai2.jpg",
          "name": "社團博覽會招生系列3",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai2.jpg"
        },
        {
          "img": "img/works/ai3.jpg",
          "name": "社團博覽會招生系列4",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai3.jpg"
        },
        {
          "img": "img/works/ai4.jpg",
          "name": "新生說明會",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai4.jpg"
        },
        {
          "img": "img/works/ai5.jpg",
          "name": "期初社大",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai5.jpg"
        },
        {
          "img": "img/works/ai13.jpg",
          "name": "六大義工開訓",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai13.jpg"
        },
        {
          "img": "img/works/ai6.jpg",
          "name": "健康週 - 心幸福紫錐花",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai6.jpg"
        },
        {
          "img": "img/works/ai7.jpg",
          "name": "金頭腦",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai7.jpg"
        },
        {
          "img": "img/works/ai9.jpg",
          "name": "藥物濫用防制講座",
          "date": "2014年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai9.jpg"
        },
        {
          "img": "img/works/ai10.jpg",
          "name": "金頭腦",
          "date": "2015年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai10.jpg"
        },
        {
          "img": "img/works/ai11.jpg",
          "name": "六大義工評鑑宣傳",
          "date": "2015年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai11.jpg"
        },
        {
          "img": "img/works/ai12.jpg",
          "name": "六大義工評鑑封面",
          "date": "2015年(大二)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai12.jpg"
        },
        {
          "img": "img/works/ai14.jpg",
          "name": "橘衛兵幹訓中心",
          "date": "2015年(大三)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai14.jpg"
        }
      ],

      "case": [
        {
          "img": "img/works/case1.jpg",
          "name": "樂高機器人營",
          "for": "元智大學電機系",
          "date": "2013年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case1.jpg"
        },
        {
          "img": "img/works/case2.jpg",
          "name": "藍鵲資訊志工",
          "for": "龍華科大社團",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case2.jpg"
        },
        {
          "img": "img/works/case3.jpg",
          "name": "5Q賞金獵人",
          "for": "元智大學生輔組",
          "date": "2016年(大四)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case3.jpg"
        }
      ],

      "blog": [
        {
          "img": "img/works/case1.jpg",
          "name": "樂高機器人營",
          "for": "元智大學電機系",
          "date": "2013年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case1.jpg"
        },
        {
          "img": "img/works/case2.jpg",
          "name": "藍鵲資訊志工",
          "for": "龍華科大社團",
          "date": "2014年(大一)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case2.jpg"
        },
        {
          "img": "img/works/case3.jpg",
          "name": "5Q賞金獵人",
          "for": "元智大學生輔組",
          "date": "2016年(大四)",
          "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case3.jpg"
        }
      ]

    }
});
