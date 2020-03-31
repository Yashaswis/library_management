import React, { Component } from "react";
import './style.css';
import { Box } from "@material-ui/core";
class Addbook extends Component{
    //  user;
    // fields=[];
    // add = (ev) =>{
    //     ev.preventDefault();
    //     let field ={
    //         id:Date.now(),
    //         BookName : document.getElementById('title').value,
    //         Author:document.getElementById('text').value,
    //         Edition:document.getElementById('number').value,
    //         Date: document.getElementById('date').value
    //     }
    //     fields.push(field);
    //     document.forms[0].reset();
    //     localStorage.setItem('MY BOOK List',JSON.stringify(fields));
    // }
    constructor(props){
       super();
       this.state={ 
        fields :[]
    };
}
            // {
        //     Bookid: " ",
        //     BookName:" ",
        //     Author:" ",
        //     Edition:" ",
        //     Date:" " }
        
            
        //    Bookid: "1",
        //    BookName:"authr",
        //    Author:"bnmdbs ",
        //    Edition:" 2",
        //    Date:"2020-03-17" },
        //    {   
        //     Bookid: "2",
        //     BookName:"authr",
        //     Author:"bnmdbs ",
        //     Edition:" 2",
        //     Date:"2020-03-17" },
        //     {   
        //         Bookid: "3",
        //         BookName:"authr",
        //         Author:"bnmdbs ",
        //         Edition:" 2",
        //         Date:"2020-03-17" }
       
  

    //    this.handleChange=this.handleChange.bind(this);
    //   this.handleFormSubmit=this.handleFormSubmit.bind(this);
    // }
    
    // handleChange = (event) =>{
    //     this.setState({[event.target.name]:event.target.value});
        
    // }
    //  handleFormSubmit(e) {
    //         e.preventDefault()
    //     localStorage.setItem('field',JSON.stringify(this.state));
    //  }
    // //     var storedNames = JSON.parse(localStorage.getItem("field")); 
    // //     // var myObjectJson = JSON.stringify(this.state);
    // //     // localStorage.setItem("field",myObjectJson);
    // //     // var newMyObjectJSON = localStorage.getItem("field");
    // //     // var newMyObject = JSON.parse(newMyObjectJSON);  
    //  }
     
    // componentDidMount(){
    //     try {
    //         this.user=JSON.parse(localStorage.setItem('field'));
    //         if(localStorage.setItem('field')){
    //         this.setState({
    //             Bookid:this.user.Bookid,
    //             BookName:this.user.BookName,
    //             Author:this.user.Author,
    //             Edition:this.user.Edition,
    //             Date:this.user.Date 
        
    //     })
    // }else{
    //     this.setState ( {
    //         Bookid: '',
    //        BookName:'',
    //        Author:'',
    //        Edition:'',
    //        Date:'',
           
    //     })
    // }
    // }
    //      catch {

    //     }

    // }
    // onSubmit (e){
    //     e.preventDefault()
    //     this.setState ( {
    //         Bookid: " ",
    //        BookName:" ",
    //        Author:" ",
    //        Edition:" ",
    //        Date:" ",
           
    //    this.setState({
    //     cars: [ this.state.cars, carArray ]
    // }) })
    
    //  }
    
     add() {
        var data = {id:this.refs.id.value,
                    name: this.refs.name.value,
                    Author : this.refs.author.value,
                    edition: this.refs.edition.value,
                    Date: this.refs.date.value,
        };

        this.setState({fields : [...this.state.fields, data]} );
        localStorage.setItem('field',JSON.stringify(this.state.fields));
      
        
    }
    render() {
        return (
        <div>
        <form className="Display_form"  float='right' align='center'  >
            <Box float ="center" className="box">
                <div>
                <div className="row">
                    <div className="form_1" >
                        <label for="Bookid">Bookid:</label>
                        </div>
                        <div className="form_1" >
                             <input  type="number"  ref='id' placeholder="Title..." />
                             <br />
                        </div>
                        </div>
                <div className="row">
                    <div className="form_1" >
                        <label for="BookName">BookName:</label>
                        </div>
                        <div className="form_1" >
                            <input  type="text"  ref='name'  placeholder="Title..."   />
                            <br />
                            </div>
                            </div>
                <div className="row">
                    <div className="form_1" >
                        <label for="Author: ">Author:</label>
                        </div>
                        <div className="form_1" >
                            <input type="text"  ref='author'  placeholder="Title..."  />
                            <br />
                            </div>
                            </div>
                <div className="row">
                    <div className="form_1" >
                        <label for="Edition:">Edition:</label>
                        </div>
                        <div className="form_1" >
                            <input type="number" ref='edition'  placeholder="Title..." />
                            <br />
                            </div>
                            </div>
                <div className="row">
                    <div className="form_1" >
                        <label for="Date:">Date:</label>
                        </div>
                        <div className="form_1" >
                            <input  type="date"  placeholder="Title..."  ref='date'  />
                            <br />
                            </div>
                            </div>
                {/* <div className="row">
                    <div className="form_1" > */}
                        <input type="button" value="Submit" onClick={this.add.bind(this)} />
                        </div>
                {/* </div>{/* name="submit"  /> */}
                {/* </div> */} 
                
        </Box>
    </form>
    <ul>
        {this.state.fields.map((fields ,index) => (
        <fields key={index} fields={fields} />
      ))}
       
    </ul>
{/* // /* <div>
// {this.state.field && this.state.field.map((field) =>
//     (<field key={field} num={field} />))}
// </div> }  value={this.state.BookName} onChange={this.handleChange} */}
</div>
);
    }
}   

export default Addbook;
// onClick={this.add.bind(this)} onSubmit={this.SavaData} 
// onSubmit={this.handleFormSubmit}