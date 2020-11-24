import * as React from "react"

interface Props {
    category : string 
    isFocused : boolean
}
interface States{
    isFocused : boolean
}
export class CategoryContent extends React.Component<Props , States>{
    constructor(props){
        super(props)
        this.state = {
            isFocused : this.props.isFocused 
        }
    }
    render(){
        const { category } = this.props
        let className ="categoryContent"
        if(this.state.isFocused) className += " focusedCategoryContent"
        return(
            <React.Fragment>
                <div className={className}>
                    <div className="categoryName"> {category} </div>
                    {this.props.isFocused && <div className="categoryUnderline"></div>}
                </div>
            </React.Fragment>
        )
    }
}