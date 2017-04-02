var guand = angular.module('guand', []);

guand.controller('WorksCtrl', function($scope) {

    $scope.worksList = [

        {
            "type": "web",
            "ifcase": "自行練習",
            "img": "guand_ver1.jpg",
            "name": "Guand.me (舊版)",
            "date": "2016/02/18",
            "description": "關於我。",
            "link": ""
        },
    	{
    		"type": "web",
    		"ifcase": "自行練習",
    		"img": "hsinchu.jpg",
    		"name": "新竹Hsinchu",
  			"date": "2016/02/18",
    		"description": "獻給陪伴我長大的風之城。",
    		"link": ""
    	},
    	{
    		"type": "web",
    		"ifcase": "自行練習",
    		"img": "fish-story.jpg",
    		"name": "梁靜茹Fish-Story",
  			"date": "2016/07/10",
    		"description": "獻給我最喜愛的歌手。",
    		"link": ""
    	},
    	{
    		"type": "web",
    		"ifcase": "接案作品",
    		"img": "nlplab.jpg",
    		"name": "元智大學自然語言處理實驗室",
  			"date": "2017/3/30",
    		"description": "替YZU NLPLAB建立的網站。",
    		"link": ""
    	},
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog5.jpg",
            "name": "千年傳統全新感受",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog6.jpg",
            "name": "敗犬女王",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog7.jpg",
            "name": "我喜愛的歌手們(Yahoo!Blog)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog8.jpg",
            "name": "那年夏天",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog9.jpg",
            "name": "分離",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog10.jpg",
            "name": "那一年的幸福時光",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog11.jpg",
            "name": "藍天",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog12.jpg",
            "name": "我的聖誕我生日",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog13.jpg",
            "name": "海派甜心",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog14.jpg",
            "name": "痞子英雄(Yahoo!Blog)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog15.jpg",
            "name": "蔚藍盛夏",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog16.jpg",
            "name": "近在咫尺",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog17.jpg",
            "name": "澶恬",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Yahoo!Blog",
            "img": "y_blog18.jpg",
            "name": "魔導少年(Yahoo!Blog)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog0.jpg",
            "name": "零-重新開始",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog1.jpg",
            "name": "痞子英雄(痞客邦)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog2.jpg",
            "name": "魔導少年(痞客邦)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog3.jpg",
            "name": "醉後決定愛上你",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog4.jpg",
            "name": "美樂加油",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog5.jpg",
            "name": "小資女孩向前衝",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog6.jpg",
            "name": "2012是芥茉日",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog7.jpg",
            "name": "我喜愛的歌手們(痞客邦)",
            "date": "",
            "description": "",
            "link": ""
        },
        {
            "type": "blog-theme",
            "ifcase": "Pixnet",
            "img": "p_blog8.jpg",
            "name": "Best Friend",
            "date": "",
            "description": "",
            "link": ""
        },
        {
        	"type": "poster",
        	"ifcase": "學校社團",
            "img": "pi1.jpg",
            "name": "金頭腦",
            "date": "2013",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi1.jpg"
        },
        {
            "type": "poster",
            "img": "pi2.jpg",
            "ifcase": "學校社團",
            "name": "紫錐花反毒宣傳活動",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi2.jpg"
        },
        {
            "type": "poster",
            "img": "pi3.jpg",
            "ifcase": "學校社團",
            "name": "全元逃走中",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi3.jpg"
        },
        {
            "type": "poster",
            "img": "pi4.jpg",
            "ifcase": "學校社團",
            "name": "健康性教育宣導",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi4.jpg"
        },
        {
            "type": "poster",
            "img": "ai8.jpg",
            "ifcase": "學校社團",
            "name": "藥物濫用防制講座",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai8.jpg"
        },
        {
            "type": "poster",
            "img": "pi5.jpg",
            "ifcase": "學校社團",
            "name": "四大義工評鑑封面",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi5.jpg"
        },
        {
            "type": "poster",
            "img": "pi6.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列1",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/pi6.jpg"
        },
        {
            "type": "poster",
            "img": "ai1.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列2",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai1.jpg"
        },
        {
            "type": "poster",
            "img": "ai2.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列3",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai2.jpg"
        },
        {
            "type": "poster",
            "img": "ai3.jpg",
            "ifcase": "學校社團",
            "name": "社團博覽會招生系列4",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai3.jpg"
        },
        {
            "type": "poster",
            "img": "ai4.jpg",
            "ifcase": "學校社團",
            "name": "新生說明會",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai4.jpg"
        },
        {
            "type": "poster",
            "img": "ai5.jpg",
            "ifcase": "學校社團",
            "name": "期初社大",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai5.jpg"
        },
        {
            "type": "poster",
            "img": "ai13.jpg",
            "ifcase": "學校社團",
            "name": "六大義工開訓",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai13.jpg"
        },
        {
            "type": "poster",
            "img": "ai6.jpg",
            "ifcase": "學校社團",
            "name": "健康週 - 心幸福紫錐花",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai6.jpg"
        },
        {
            "type": "poster",
            "img": "ai7.jpg",
            "ifcase": "學校社團",
            "name": "金頭腦",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai7.jpg"
        },
        {
            "type": "poster",
            "img": "ai9.jpg",
            "ifcase": "學校社團",
            "name": "藥物濫用防制講座",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai9.jpg"
        },
        {
            "type": "poster",
            "img": "ai10.jpg",
            "ifcase": "學校社團",
            "name": "金頭腦",
            "date": "2015",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai10.jpg"
        },
        {
            "type": "poster",
            "img": "ai11.jpg",
            "ifcase": "學校社團",
            "name": "六大義工評鑑宣傳",
            "date": "2015",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai11.jpg"
        },
        {
            "type": "poster",
            "img": "ai12.jpg",
            "ifcase": "學校社團",
            "name": "六大義工評鑑封面",
            "date": "2015",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai12.jpg"
        },
        {
            "type": "poster",
            "img": "ai14.jpg",
            "ifcase": "學校社團",
            "name": "橘衛兵幹訓中心",
            "date": "2015",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/ai14.jpg"
        },
         {
            "type": "poster",
            "img": "case1.jpg",
            "ifcase": "接案作品",
            "name": "樂高機器人營",
            "for": "元智大學電機系",
            "date": "2013",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case1.jpg"
        },
        {
            "type": "poster",
            "img": "case2.jpg",
            "ifcase": "接案作品",
            "name": "藍鵲資訊志工",
            "for": "龍華科大社團",
            "date": "2014",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case2.jpg"
        },
        {
            "type": "poster",
            "img": "case3.jpg",
            "ifcase": "接案作品",
            "name": "5Q賞金獵人",
            "for": "元智大學生輔組",
            "date": "2016",
            "link": "https://s3.amazonaws.com/jhihsiyingweb/Guand.me/works/case3.jpg"
        },
        {
            "type": "video",
            "img": "ms20.jpg",
            "ifcase": "自行練習",
            "name": "No.20 我就是我",
            "date": "",
            "description": "- 楓之谷僧侶三轉紀念影片 -",
            "link": "https://guand.me/blog/483/"
        },
        {
            "type": "video",
            "img": "ms21.jpg",
            "ifcase": "自行練習",
            "name": "No.21 下一頁的我",
            "date": "",
            "description": "- 楓之谷祭司四轉紀念影片 -",
            "link": "https://guand.me/blog/571"
        }
    ]
});