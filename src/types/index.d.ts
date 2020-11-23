interface HyperLink {
    name:string;
    url:string
}

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
    links?:HyperLink[];
}