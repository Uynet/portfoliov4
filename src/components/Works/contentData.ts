import { ContentData } from "../../types";
const contentData:ContentData[] = [
    {
        id:"stella",
        title:"STELLA",
        date:"2020/10/25",
        thmbnail: "/resource/works/stella.png",
        media: {
            img : ["/resource/works/stella.png"]
        },
        description:"アルバム"
    },
    {
        id:"kawasemi",
        title:"サイハテドロップ",
        date:"2018/3/25",
        thmbnail: "/resource/works/kawasemiThmb.png",
        media: {
            img : ["/resource/works/kawasemi2.png"]
        },
        description:"個人開発のゲームです。気が向いた時に作っています。JacaScript/PIXI.JS製 ブラウザで遊べます ",
        links: [
            {
                name : "game",
                url  : "http://uynet.work/saihate"
            }
        ]
    },
    {
        id:"ninja",
        title:"NinjaFlicker",
        date:"2017/12/26",
        thmbnail: "/resource/works/ninjaThmb.png",
        media: {
            img : ["/resource/works/stella.png"]
        },
        description:"アルバム"
    },
    {
        id:"uyblog2",
        title:"ゆいブログ(ver2)",
        date:"2019/10/25",
        thmbnail: "/resource/works/portfolioThmb.png",
        media: {
            img : ["/resource/works/stella.png"]
        },
        description:"アルバム"
    },
]

export default contentData;