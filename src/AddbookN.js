import React from 'react';


class AddbookN extends React.Component {
    constructor(){
        super();
        this.state = {
            works: JSON.parse(localStorage.getItem('works')) !=null? JSON.parse(localStorage.getItem('works')):''
        };
    }
    add() {
        var title =this.refs.title.value;
        if(localStorage.getItem('works')==null) {
            var works =[];
            works.push(title);
            localStorage.setItem('works',JSON.stringify(works));
        }else{
            var works= JSON.parse(localStorage.getItem('works'));
            works.push(title);
            localStorage.setItem('works',JSON.stringify(works));
        }
        this.setState({
            works: JSON.parse(localStorage.getItem('works'))
        });
    }
    render() {
        // let workList ='';
        // if(localStorage.getItem('works') !=null) {
        //     workList =(
        //         <ul>
        //             {this.state.works.map(function(work, index){
        //                 return(
        //                     <li key={index}>{work}<input type="button" value=" " onClick=</li>
        //                 )
        //             })}
        //         </ul>
        //     )
            return(
                <div>
                    <h3>library</h3>
                    <input type="text" placeholder="Title " ref="title" />
                    <input type="button" value="Add" onclick={this.add.bind(this)} />
                    <br />
                    {/* {workList} */}
                </div>
            );
        }
    }
export default AddbookN;