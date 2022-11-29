import "./politician.css";

export default function Politician({name, title, leg, age, party, lobby, image, cart, setCart, count, setCount, money, setMoney}) {

	return (

        <div className="border">
            <h4>
                <img src={image} width="300rem" height="330rem"/>
            </h4>
            <h4>
                {name}
            </h4>
            <h5>
                Title: {title}
                <br/>
                Legislative Body: {leg}
                <br/>
                Age: {age}
                <br/>
                Party: {party}
                <br/>
                Money from lobbyists: {lobby}
            </h5>

            <button onClick={() => {
                    let prev = cart
                    let update = [...new Set([...cart, name])]
                    setCart(update)
                    if (prev.includes(name)) {
                        setCount(count)
                    } else {
                        setCount(count + 1)
                        setMoney(money + lobby)
                    }
                }
            }>In Support</button>

            <button onClick={() => {
                    let prev = cart
                    const newList = cart.filter((item) => item !== name);
                    setCart(newList)
                    if (!prev.includes(name)) {
                        setCount(count)
                    } else {
                        setCount(count - 1)                        
                        setMoney(money - lobby)
                    }
                    
                    console.log(newList)
                    console.log(cart)
                }
            }>Opposed</button>

        </div>


	);
}



