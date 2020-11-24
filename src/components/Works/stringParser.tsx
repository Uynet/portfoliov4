import * as React from "react";

interface Props{
    str : string
}
export class StringParser extends React.Component<Props>{
    render(){
        const { str } = this.props;
        return(
            <React.Fragment>
                { str.split("\n").map((line,i)=>{
                    return <React.Fragment key={i}>{line}<br/></React.Fragment>
                })}
            </React.Fragment>
        )
    }
}
