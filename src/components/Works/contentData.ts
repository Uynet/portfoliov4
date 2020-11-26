import { Category, ContentData } from "../../types";
const contentData:ContentData[] = [
    {
        id:"stella",
        title:"STELLA",
        date:"2020/10/25",
        thmbnail: "/resource/works/stella.png",
        media: ["/resource/works/stella.png", "https://www.youtube.com/embed/Ky7hbqf4M0Q"],
        description:"初のインストソロアルバムです\n星がイメージのキラキラ楽曲7曲入です。いろんなところで買えます",
        links: [
            {
                name : "linkcore",
                url  : "https://linkco.re/vyh3Nz3R"
            }
        ],
        categoryTag: [Category.Pickup , Category.Music]
    },
    {
        id:"uymix",
        title:"楽曲まとめ",
        date:"2020/8/25",
        thmbnail: "/resource/works/uymix.png",
        media:["https://www.youtube.com/embed/5zuSD1l0fGU"] ,
        description:"こんな曲つくってるよ～的な動画です。だいたいsoundcloudで聞けます。",
        categoryTag: [ Category.Music]
    },
    {
        id:"kawasemi",
        title:"サイハテドロップ",
        date:"2018/3/25",
        thmbnail: "/resource/works/kawasemiThmb.png",
        media: ["/resource/works/kawasemi2.png"] ,
        description:"気が向いた時に作っている個人開発ゲーム(未完)\nJacaScript/PIXI.JS製なのでブラウザで遊べます。よく動くものが好きな人におすすめです。\nU22プログラミングコンテストというもので経済産業大臣賞を受賞しました",
        links: [
            {
                name : "ゲーム",
                url  : "http://uynet.work/saihate"
            }
        ],
        categoryTag:[Category.Pickup , Category.Game]
    },
    {
        id:"ninja",
        title:"NinjaFlicker",
        date:"2017/12/26",
        thmbnail: "/resource/works/ninjaThmb.png",
        media : [
                "/resource/works/ninja.png",
                "/resource/works/ninja2.png", 
                "https://www.youtube.com/embed/ekiIBCfWgZs"
                ],
        description:"2Dスマホであそべるアクションゲームです。楽曲・効果音・一部のドット絵など作成しました。\nストアで配信されているので買ってください。\n2019年Google Indie GameFesというコンテストでTop10入賞しました",
        links: [
            {
                name : "ブログ記事",
                url  : "https://trap.jp/post/480/"
            },
            {
                name:"iOS",
                url: "https://apps.apple.com/jp/app/ninja-flicker/id1330300477"
            },
            {
                name:"Android",
                url: "https://play.google.com/store/apps/details?id=com.traP.ninjaflicker"
            }
        ],
        categoryTag:[Category.Pickup , Category.Game]
    },
    {
        id:"uyblog2",
        title:"ゆいブログ(ver2)",
        date:"2019/10/25",
        thmbnail: "/resource/works/portfolioThmb.png",
        media: [
            "/resource/works/portfolio.png" ,
            "/resource/works/uyblog.mp4" 
         ] ,
        description:"サイトの前のバージョン よく動いて面白いのですが、公式サイトとして運用したくなったのでおとなしい方向にリニューアルしました。面白いので残しています。ちなみにブログではない  フレームワーク:create-react-app",
        links: [
            {
                name : "ゆいブログ",
                url  : "http://uynet.work/v2"
            },
            {
                name : "Github",
                url  : "https://github.com/Uynet/portfoliov2"
            }
        ],
        categoryTag:[Category.Pickup]
    },
    {
        id:"po",
        title:"Polar Snow Fantasy",
        date:"2016",
        thmbnail: "/resource/works/po.png",
        media:  ["/resource/works/po.png"],
        description:"大学時代にサークル活動で制作したゲームです。企画と全楽曲・効果音を制作しました",
        links: [
            {
                name : "ポ",
                url  : "https://trap.jp/post/35/"
            }
        ],
        categoryTag:[Category.Game ]
    },
    {
        id:"Flythm",
        title:"Flythm",
        date:"2018",
        thmbnail: "/resource/works/Flythm.png",
        media: ["/resource/works/Flythm.png"] ,
        description:"ブラウザで音ゲーができます。2曲楽曲提供しました。",
        links: [
            {
                name : "Flythm",
                url  : "https://flythm.trap.games/"
            },
            {
                name : "ゲーム記事",
                url  : "https://trap.jp/post/693/"
            }
        ],
        categoryTag:[Category.Game ]
    },
    {
        id:"Thunder",
        title:"Thunder(NEORT)",
        date:"2019",
        thmbnail: "/resource/works/tips/thunder.gif",
        media: ["/resource/works/tips/thunder2.mp4"] ,
        description:"四角形だけで作ったエフェクト　NEORTでみれます",
        links: [
            {
                name : "NEORT",
                url  : "https://neort.io/art/bmvq9d43p9f7m1g03bdg?index=1&origin=latest"
            }
        ],
        categoryTag:[]
    },
    {
        id:"Sparkle",
        title:"Sparkle(NEORT)",
        date:"2019",
        thmbnail: "/resource/works/tips/sparkle.gif",
        media:
             ["/resource/works/tips/sparkle.mp4"]
        ,
        description:"ゲームでよく使います",
        links: [
            {
                name : "NEORT",
                url  : "https://neort.io/art/bmul6pk3p9f7m1g034p0?index=0&origin=my_profile"
            }
        ],
        categoryTag:[]
    },
    {
        id:"hanabi",
        title:"花火",
        date:"2016",
        thmbnail: "/resource/works/tips/hanabi.gif",
        media:
             ["/resource/works/tips/hanabi.mp4"]
        ,
        description:"ど～ん",
        categoryTag:[]
    },
    {
        id:"yure",
        title:"ゆれ画像メーカー",
        date:"2019",
        thmbnail: "/resource/works/tips/yure2.gif",
        media:
             ["/resource/works/tips/yure2.gif"]
        ,
        description:"アレです\n解説 : 黒い領域に頭などを入れて揺らすボタンを押すと首を振っているように見えます。画像ダウンロード機能付き",
        links: [
            {
                name : "yure",
                url  : "http://yure.uynet.trap.show",
            }
        ],
        categoryTag:[]
    },
    {
        id:"shelAnime",
        title:"シェルアニメ",
        date:"2019",
        thmbnail: "/resource/works/tips/shelanime.gif",
        media:
             ["/resource/works/tips/shelanime.gif"]
        ,
        description:"シェルで動くとてもかわいい顔文字アニメです。\nnpm環境があればnpx poyopoyochanと打つと実行できます。ロード中表記などにどうぞ",
        links: [
            {
                name : "٩(ˊᗜˋ*)｡",
                url  : "https://github.com/Uynet/shelAnime",
            }
        ],
        categoryTag:[]
    },

]

export default contentData;