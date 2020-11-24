import { Category, ContentData } from "../../types";
const contentData:ContentData[] = [
    {
        id:"stella",
        title:"STELLA",
        date:"2020/10/25",
        thmbnail: "/resource/works/stella.png",
        media: {
            img : ["/resource/works/stella.png"]
        },
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
        id:"kawasemi",
        title:"サイハテドロップ",
        date:"2018/3/25",
        thmbnail: "/resource/works/kawasemiThmb.png",
        media: {
            img : ["/resource/works/kawasemi2.png"]
        },
        description:"気が向いた時に作っている個人開発ゲーム JacaScript/PIXI.JS製 ブラウザで遊べます",
        links: [
            {
                name : "game",
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
        media: {
            img : ["/resource/works/stella.png"]
        },
        description:"ゲム",
        categoryTag:[Category.Pickup , Category.Game]
    },
    {
        id:"uyblog2",
        title:"ゆいブログ(ver2)",
        date:"2019/10/25",
        thmbnail: "/resource/works/portfolioThmb.png",
        media: {
            img : ["/resource/works/portfolio.png"]
        },
        description:"サイトの前のバージョン よく動いて面白いのですが、公式サイトとして運用したくなったのでおとなしい方向にリニューアルしました。面白いので残しています。ちなみにブログではない  フレームワーク:create-react-app",
        links: [
            {
                name : "ゆいブログ",
                url  : "http://uynet.work/v2"
            }
        ],
        categoryTag:[Category.Pickup]
    },
    {
        id:"po",
        title:"Polar Snow Fantasy",
        date:"2016",
        thmbnail: "/resource/works/po.png",
        media: {
            img : ["/resource/works/po.png"]
        },
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
        media: {
            img : ["/resource/works/Flythm.png"]
        },
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
        media: {
            video: ["/resource/works/tips/thunder2.mp4"]
        },
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
        media: {
            video: ["/resource/works/tips/sparkle.mp4"]
        },
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
        media: {
            video: ["/resource/works/tips/hanabi.mp4"]
        },
        description:"ど～ん",
        categoryTag:[]
    },
    {
        id:"yure",
        title:"ゆれ画像メーカー",
        date:"2019",
        thmbnail: "/resource/works/tips/yure2.gif",
        media: {
            img: ["/resource/works/tips/yure2.gif"]
        },
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
        media: {
            img: ["/resource/works/tips/shelanime.gif"]
        },
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