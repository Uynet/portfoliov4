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
        description:"アルバム",
        categoryTag:[Category.Pickup , Category.Music]
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
        categoryTag:[Category.Game]
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
                url  : "http://uynet.work/"
            }
        ],
        categoryTag:[]
    },
    {
        id:"po",
        title:"Polar Snow Fantasy",
        date:"2016",
        thmbnail: "/resource/works/po.png",
        media: {
            img : ["/resource/works/portfolio.png"]
        },
        description:"サイトの前のバージョン よく動いて面白いのですが、公式サイトとして運用したくなったのでおとなしい方向にリニューアルしました。面白いので残しています。ちなみにブログではない  フレームワーク:create-react-app",
        links: [
            {
                name : "ゆいブログ",
                url  : "http://uynet.work/"
            }
        ],
        categoryTag:[]
    },
]

export default contentData;