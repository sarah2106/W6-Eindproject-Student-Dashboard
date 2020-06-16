import React, { Component } from "react";
import StudentData from './StudentData';

class Tableview extends Component{
    constructor(){
        super();
        this.state = {
            sortOption: 'naam',
        }
    }
    render(){

        if(this.state.sortOption === "name") {
            StudentData.sort(function (a, b) {
                if (a.name < b.name) return -1;
                else if (a.name > b.name) return 1;
                return 0;
            });
        }else if(this.state.sortOption === "assignment") {
            StudentData.asort(function (a, b) {
                if (a.assignment < b.assignment) return -1;
                else if (a.assignment > b.assignment) return 1;
                return 0;
            });
        }else if(this.state.sortOption === "funRating") {
            StudentData.sort(function (a, b) {
                if (a.funRating < b.funRating) return 1;
                else if (a.funRating > b.hfunRating) return -1;
                return 0;
            });
        }else if(this.state.sortOption === "difficultyRating") {
            StudentData.sort(function (a, b) {
                if (a.difficultyRating < b.difficultyRating) return 1;
                else if (a.difficultyRating > b.difficultyRating) return -1;
                return 0;
            });
        }

        const tableRow = StudentData.map(opdracht => {
            return  <div key={StudentData.indexOf(opdracht)} className="table-row">
                        <div>{opdracht.name}</div>
                        <div>{opdracht.assignment}</div>
                        <div>{opdracht.funRating}</div>
                        <div>{opdracht.difficultyRating}</div>
                    </div>
        })

        const sort = (event) => {
            const data = event.target.getAttribute("name");
            this.setState({
                sortOption: data
            })
        }

        return(
            <main className="tableview">
                
                <center><p>Overview of all the data - which you can sort by clicking the titles</p></center>
                <div className="tableview-content">
                    <div className="table">
                        <div className="thead">                    
                            <div name="name" onClick={sort}>Name</div>
                            <div name="assignment" onClick={sort}>Assignment</div>
                            <div name="funRating" onClick={sort}>"Fun"-score</div>
                            <div name="difficultyRating" onClick={sort}>"Difficult"-score</div>
                        </div>
                        {tableRow}
                    </div>
                </div>
            </main>
        )
    }
}

export default Tableview;