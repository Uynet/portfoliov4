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
               
               <div className="headlineProfile">
               <div className="headlineContentProfile">
                   <div className="profileIconWrapper">
                        <img className="profileIcon" src="./resource/profileIcon.png" height="auto"></img>
                   </div>
                   <div className="biographyArea">
                        <span className="name">uynet</span>
                        <span className="nameSubtext"> / ゆいねっと</span>
                        <div className="biography">1996/12/19生まれ。東京工業大学情報工学科卒業。音楽を作ったりゲーム作ったりいろいろするなど活動は多岐に渡る。
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
                                <li> <a className="link" href="https://www.titech.ac.jp/news/2019/043553.html">U22プログラミングコンテスト経済産業大臣賞 (個人開発)</a> </li>
                                <li> <a className="link" href="https://www.titech.ac.jp/news/2018/043127.html">Google Indie GameFestival 2019 Top10(チーム開発/サウンド)</a> </li>
                                <li> <a className="link" href="https://chunithm-special.sega.jp/">第三回チュウニズム楽曲コンテスト七海あおい部門 最終候補(作曲)</a> </li>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="wrapper">
                            <div className="description">
                            <div className="cardTitle">
                                <span className="cardTitleMain">ゆいちゃん</span>
                                <span className="cardTitleSub">について</span>
                            </div>
                                <div className="cardContent">この子はゆいちゃんと言います。よろしくおねがいします。
                                <br/>ドーナツが好き。
                                </div>
                            </div>
                            <div className="fig">
                                        <img src="./resource/uychan1.png" className="uychan"/>
                            </div>
                            <div className="creditWrapper">
                                <div className="creditText">
                                イラスト:<a href="http://owarino.xyz" className="link">やいぎ</a>先生
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div> 
                            <div className="description">
                                <div className="cardTitle">お問い合わせ</div>
                                楽曲の制作依頼などはこちらへ 
                                <div className="cardContent">
                                <div>  メール : contact☆uynet.work</div> 
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
