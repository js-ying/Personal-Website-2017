var guand = angular.module('guand', []);

guand.controller('WorksCtrl', function($scope) {

    $scope.worksList = [

        {
            "type": "web",
            "ifcase": "自行練習",
            "img": "guand_ver1.jpg",
            "name": "Guand.me (Ver.1)",
            "date": "2016/02/18",
            "description": "關於我自己。",
            "img-href": ""
        },
    	{
    		"type": "web",
    		"ifcase": "自行練習",
    		"img": "hsinchu.jpg",
    		"name": "新竹Hsinchu",
  			"date": "2016/02/18",
    		"description": "獻給陪伴我長大的風之城。",
    		"img-href": ""
    	},
    	{
    		"type": "web",
    		"ifcase": "自行練習",
    		"img": "fish-story.jpg",
    		"name": "梁靜茹Fish-Story",
  			"date": "2016/07/10",
    		"description": "獻給我最喜愛的歌手以及她的粉絲們。",
    		"img-href": ""
    	},
    	{
    		"type": "web",
    		"ifcase": "接案作品",
    		"img": "nlplab.jpg",
    		"name": "元智大學自然語言處理實驗室",
  			"date": "2017/3/30",
    		"description": "禹良治教授的實驗室網站。",
    		"img-href": ""
    	},
        {
        	"type": "poster",
        	"ifcase": "學校社團",
            "img": "pi1.jpg",
            "name": "金頭腦",
            "date": "2013年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi1.jpg"
        },
        {
            "type": "poster",
            "img": "pi2.jpg",
            "ifcase": "學校社團",
            "name": "紫錐花反毒宣傳活動",
            "date": "2014年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi2.jpg"
        },
        {
            "type": "poster",
            "img": "pi3.jpg",
            "ifcase": "學校社團",
            "name": "全元逃走中",
            "date": "2014年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi3.jpg"
        },
        {
            "type": "poster",
            "img": "pi4.jpg",
            "ifcase": "學校社團",
            "name": "健康性教育宣導",
            "date": "2014年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi4.jpg"
        },
        {
            "type": "poster",
            "img": "ai8.jpg",
            "ifcase": "學校社團",
            "name": "藥物濫用防制講座",
            "date": "2014年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai8.jpg"
        },
        {
            "type": "poster",
            "img": "pi5.jpg",
            "ifcase": "學校社團",
            "name": "四大義工評鑑封面",
            "date": "2014年(大一)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi5.jpg"
        },
        {
            "type": "poster",
            "img": "pi6.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列1",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi6.jpg"
        },
        {
            "type": "poster",
            "img": "ai1.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列2",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai1.jpg"
        },
        {
            "type": "poster",
            "img": "ai2.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列3",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai2.jpg"
        },
        {
            "type": "poster",
            "img": "ai3.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列4",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai3.jpg"
        },
        {
            "type": "poster",
            "img": "ai4.jpg",
            "ifcase": "學校社團",
            "name": "新生說明會",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai4.jpg"
        },
        {
            "type": "poster",
            "img": "ai5.jpg",
            "ifcase": "學校社團",
            "name": "期初社大",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai5.jpg"
        },
        {
            "type": "poster",
            "img": "ai13.jpg",
            "ifcase": "學校社團",
            "name": "六大義工開訓",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai13.jpg"
        },
        {
            "type": "poster",
            "img": "ai6.jpg",
            "ifcase": "學校社團",
            "name": "健康週 - 心幸福紫錐花",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai6.jpg"
        },
        {
            "type": "poster",
            "img": "ai7.jpg",
            "ifcase": "學校社團",
            "name": "金頭腦",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai7.jpg"
        },
        {
            "type": "poster",
            "img": "ai9.jpg",
            "ifcase": "學校社團",
            "name": "藥物濫用防制講座",
            "date": "2014年(大二)",
            "img-href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai9.jpg"
        },
        {
            "type": "poster",
            "img": "ai10.jpg",
            "ifcase": "學校社團",
            "name": "金頭腦",
            "date": "2015年(大二)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai10.jpg"
        },
        {
            "type": "poster",
            "img": "ai11.jpg",
            "ifcase": "學校社團",
            "name": "六大義工評鑑宣傳",
            "date": "2015年(大二)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai11.jpg"
        },
        {
            "type": "poster",
            "img": "ai12.jpg",
            "ifcase": "學校社團",
            "name": "六大義工評鑑封面",
            "date": "2015年(大二)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai12.jpg"
        },
        {
            "type": "poster",
            "img": "ai14.jpg",
            "ifcase": "學校社團",
            "name": "橘衛兵幹訓中心",
            "date": "2015年(大三)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai14.jpg"
        },
         {
            "type": "poster",
            "img": "case1.jpg",
            "ifcase": "接案作品",
            "name": "樂高機器人營",
            "for": "元智大學電機系",
            "date": "2013年(大一)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case1.jpg"
        },
        {
            "type": "poster",
            "img": "case2.jpg",
            "ifcase": "接案作品",
            "name": "藍鵲資訊志工",
            "for": "龍華科大社團",
            "date": "2014年(大一)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case2.jpg"
        },
        {
            "type": "poster",
            "img": "case3.jpg",
            "ifcase": "接案作品",
            "name": "5Q賞金獵人",
            "for": "元智大學生輔組",
            "date": "2016年(大四)",
            "href": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case3.jpg"
        }
    ]
});