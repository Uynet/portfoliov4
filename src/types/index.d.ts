export interface ContentData{
    id:string;
    title:string;
    date:string;
    thmbnail:string;
    media:{
        img?:string[] | string
        video?:string[] | string
    }
    categoryTag?:string;
    description:string;
    links?:{
        name:string
        url:string
    }
}