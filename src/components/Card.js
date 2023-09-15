
const Card = ({ item }) => {
    
    const { title, price, coverImg, rating, reviewCount, location, openSpots } = item
    
    const grayText = {
        fontWeight: '300',
        color: '#918E9B'
    } 

    const lightText = {
        fontWeight: '100'
    }

    const boldText = {
        fontWeight: 'bold'
    }

    const hidden = {
        visibility: "hidden"
    }
    
    const shown = {
        visibility: "visible"
    }

    return (
        <div className="Card">
            <div className="status" style={openSpots === 0 ? shown : hidden}>SOLD OUT</div>
            <div className="img-container">
                <img src={`./img/${coverImg}`} alt={title} />
            </div>
            <div className="card-text">
                <div className="info">
                    <i className="fa-solid fa-star" />
                    <span>{rating}</span>
                    <span style={grayText}> ({reviewCount}) • {location}</span>
                </div>
                <div><span style={lightText}>{title}</span></div>
                <div><span style={boldText}>From ${price} </span><span>/ person</span></div>
            </div>
        </div>
    )
}

export default Card
