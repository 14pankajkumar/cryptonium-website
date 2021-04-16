import React from 'react'

const CoinDescription = ({data}) => {
    const renderData = () => {
        if (data) {
            return (
                <div className="bg-white mt-3 p-2 rounded border row">
                    <h1>About {data.name} </h1>
                    <p>{data.description.en} </p>
                </div>
            )
        }
    }
    return (
        <div>
            {renderData()}
        </div>
    )
}

export default CoinDescription
