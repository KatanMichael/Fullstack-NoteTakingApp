import React from "react"
import './App.css';
import Client from "../Client/Client"

const client = new Client();
class MainScreen extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            fetched: false,
            userNotes: []
        }

    }

    componentDidMount()
    {
        this.getAllUserNotes();
    }

    getAllUserNotes()
    {
        console.log("Start fetching Notes with user id: ",this.props.userId);
        client.getNotesByUserId(this.props.userId)
        .then(result => result.json())
        .then(data =>
            {
                this.setState(
                    {
                        userNotes: data,
                        fetched: true
                    }
                )
            })
    }

    render()
    {

        const {userName} = this.props;
        if(this.state.fetched)
        {
            const newNotes = this.state.userNotes.map(function(note)
            {
                return(
                    <li>
                        <h1>Title: {note.noteTitle}</h1>
                        <h2>Title: {note.noteText}</h2>
                    </li>
                )
            })
           return(
           <div>
                <h1>
                    Data Fetched
                 </h1>
                 <ul>
                     {newNotes}
                 </ul>
           </div>
           )
        }else{
            return(
                <div>
                    <h1>Welcome: {userName}</h1>
                    <h1>Fetching Notes</h1>
            </div>
            )
        }

    }

}


export default MainScreen