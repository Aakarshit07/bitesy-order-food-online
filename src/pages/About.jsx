import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="flex flex-col items-center p-4 mt-52 md:my-4">
                <h1 className="font-bold text-4xl text-neutral-700">This is Bitesy</h1>
                <h1 className="font-semibold text-2xl my-2 text-neutral-600">We are a Online food ordering website</h1>
                <div className="flex justify-center items-center">
                    <p className="font-semibold font-mono text-neutral-700">We Constantly Working to Improve!!</p>
                </div>
            </div>
        )
    }
}

export default About;



