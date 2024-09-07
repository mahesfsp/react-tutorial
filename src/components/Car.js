function Car(props){
    
    // const {brand,color} = props


    const {CarInfo}= props
    const { brand, color } = CarInfo; // Destructure brand and color from CarInfo
    const text = `I am a ${brand} car and i am ${color}`
    return (
    <h1>{text}</h1>
    )
}


export default Car;
