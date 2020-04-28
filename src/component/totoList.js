import React ,{ Component } from "react";
import './totoList.css';
import classNames from 'classnames';
import checked from '../img/checked.svg';
import check from '../img/check.svg';

class TotoList extends Component{
    render(){        
        const {title , isComplete} = this.props.items;
        let url = check;
        if(isComplete ){
            url = checked;
        }
        return (
            <div className="TotoList">
               <img onClick={ this.props.onClick }  src={ url} height="30px" width="30px" />
                <div className={ classNames('item', {isComplete : isComplete})}>
                    { title }
                </div>
            </div>
        );
    }
}

export default TotoList; 
// let className = 'totoList';
//         if(this.props.items.isComplete){
//             className += " isComplete";
//         }