import React from "react";
import Card from "./components/Card"
import List from "./components/UniqueList/List";
import Data from './data.json'

const users = [
    {
        fullName: "Anisul Islam",
        age: 32,
        phones: [
            {home: "014753252"},
            {office: "0125478"},
        ]
    },
    {
        fullName: "prince",
        age: 64,
        phones: [
            {home: "014753252"},
            {office: "0125478"},
        ]
    }
]

function App(){

    return   (
        <div>
            <h1>Nested Lists</h1>
            {
                users.map((user,index) => (
                    <article key = {index}>
                        <h3>{user.fullName}</h3>
                        <p>{user.age}</p>
                        {
                            user.phones.map((phone,index) => (
                                <div key = {index}>
                                    <p>{phone.home}</p>
                                    <p>{phone.office}</p>
                                </div>
                            ))
                        }
                    </article>
                ))
            }
        </div>
    )
}

export default App; 