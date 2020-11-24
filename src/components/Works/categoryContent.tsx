import * as React from "react"
import { Category } from "../../types"

interface Props {
    categoryName : string 
    isFocused : boolean
    onClick : any
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
        const { categoryName,onClick,isFocused } = this.props
        let className ="categoryContent"
        if(isFocused) className += " focusedCategoryContent"
        return(
            <React.Fragment>
                <div className={className} onClick={onClick.bind(this, categoryName)}>
                    <div className="categoryName"> {categoryName} </div>
                    {false && this.props.isFocused && <div className="categoryUnderline"></div>}
                </div>
            </React.Fragment>
        )
    }
}