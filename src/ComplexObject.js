import React from 'react';
require('./ComplexObject.css');


export default class ComplexObject extends React.Component{

    state = {
        isEx : true,
        vis : {}
    }

    render(){
        let obj = this.props.objVal;
        let jsx = [];
        let level = this.props.level, i = 1;
        let depth = this.props.depth;
        let fk = this.props.fk;
        for(let o in obj){
            depth++;
            fk++;
            console.log('O = ',o,' Depth = ',depth,'Fk = ',fk);
            if(typeof obj[o] !== 'object'){
                jsx.push(<div className='row'>
                    <div key={level+''+i++} className='key level'>{o}</div>:<div key={level+''+i++} className='concrete level'>{obj[o]}</div>
                </div>);
            } else {
                jsx.push(<div className='row'>
                    <ComplexObject fk={fk} depth={0} key={level+''+i++} level={level+1} objKey={o} objVal={obj[o]}></ComplexObject> 
                </div>)
            }
        }
        console.log('Vis = ',this.state.vis['lala']);
        let key = this.props.objKey;
        return (
            <div className='complex level'>
                {key}
                <div className={(this.state.isEx)?'stray stray'+key:''}>
                    {jsx}
                </div>
            </div>
        );
    }
}
