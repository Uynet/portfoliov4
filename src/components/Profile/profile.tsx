import * as React from "react";
import "../../../scss/index.scss";
import "../../../scss/profile.scss";
import { NavigationBar } from "../navigationBar";

export class Profile extends React.Component{
    render(){
        return(
           <React.Fragment>
               <NavigationBar/>
               <div className="header"/>
               
               <div className="headline">
               <div className="headlineContent">
                   <img className="profileIcon" src="./resource/profileIcon.png" height="auto"></img>
                   <div className="biographyArea">
                        <div className="name">uynet</div>
                        <div className="biography">1996/12/19生まれ。東京工業大学情報工学科卒業。曲作ったりゲーム作ったりいろいろするなど活動は多岐に渡る。
                        </div>
                    </div>
               </div>
               </div>

               <div className="contentArea">
                    <div className="card">
                        <div> 
                            <div className="description">
                                <span className="cardTitle">受賞等</span>
                                <div className="cardContent">
                                <div> <a className="link" href="https://www.titech.ac.jp/news/2019/043553.html">U22プログラミングコンテスト経済産業大臣賞 (個人開発)</a> </div>
                                <div> <a className="link" href="https://www.titech.ac.jp/news/2018/043127.html">Google Indie GameFestival 2019 Top10(チーム開発/サウンド)</a> </div>
                                <div> <a className="link" href="https://chunithm-special.sega.jp/">第三回チュウニズム楽曲コンテスト七海あおい部門 最終候補(作曲)</a> </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper">
                            <div className="description">
                                <span className="cardTitle">ゆいちゃん</span>
                                <span className="cardTitleSub">について</span>
                                <div className="cardContent">ドーナツが好き。
                                </div>
                                <div className="credit">イラスト:<a href="http://owarino.xyz" className="link">やいぎ</a>先生</div>
                            </div>
                            <div className="fig">
                                        <img src="./resource/uychan1.png" width={"150px"}/>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div> 
                            <div className="description">
                                <div className="cardTitle">お問い合わせ</div>
                                楽曲の制作依頼などはこちらへ 
                                <div className="cardContent">
                                <div>  メール : highsate☆gmail.com</div> 
                                <div>  Twitter : <a className="link" href="https://twitter.com/uynet">@uynet</a></div> 
                                <br/>
                                作品のご感想などは
                                <a className="link" href="https://marshmallow-qa.com/uynet">マシュマロ</a>
                                にいただけると大変うれしいです
                            </div>
                            </div>
                        </div>
                    </div>
               </div>

           </React.Fragment>)
    }
}
