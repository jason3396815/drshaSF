// https://codepen.io/bydeinon/pen/OxryVo
import { h, Component } from 'preact';

const stripe = Stripe('pk_test_CY6HxyQkOolO1B3h43MvkJE5');

class StripeElement extends Component {
  render() {
    return <div id="cc-form"></div>;
  }
  shouldComponentUpdate() {
    //return false;
  }
  componentDidMount() {
    const elements = stripe.elements();
    const card = elements.create('card');

    card.mount('#cc-form');
  }
}

export default class Cart extends Component {
  constructor (props) {
  super(props);
  }
  componentWillMount() {
    this.stripe = Stripe('pk_test_5oJxvpVNOZ2jsIheOoTGyvxi00OYUR60EZ');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');

    this.responses = [];
    this.setState({ responses: [] });
  }
  componentDidMount() {
    this.card.mount('#cc-form');
  }

  PayNow = () => {
    let data = {}
    this.stripe.createToken(this.card).
      then(res => {
        this.responses.push(res.error ? `Error: ${res.error.message}` : `Token: ${res.token.id}`);
        data.profile = this.props.profile
        data.token = res.token.id
        data.cart = this.props.cart
        fetch(g.serverURL+'/buy', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
        this.setState({ responses: this.responses.slice() });
      }).
      catch(err => {
        this.responses.push(err.message);
        this.setState({ responses: this.responses.slice() });
      });
  }

  removeFromCart = (e) => {
    let id = e.target.dataset.id;
    this.props.removeFromCart(id); 
  }
  
  getCartList = () => {
    const countedItems = this.props.cart.map(item => {
      return { name: item.name, price: item.price};
    });
  }
  getTotal = () => {
    if (this.props.cart.length > 0) {
      const cartTotal = this.props.cart.map(item => {return parseFloat(item.price)})
        .reduce((acc, curr) => acc + curr);
      return cartTotal
    } else 
      return 0
  }
  render({}, state) {
    const remove = {
      cursor: 'pointer',
      color: 'white',
			backgroundColor: 'red'
			}
    console.log("cart:"+JSON.stringify(this.props.cart,null,2))
    let cart = this.props.cart
    // assign item number to each item
    cart.forEach(
      (item, i) => {
        cart[i].no = i
      }
    )
    return (
      <div class="container">
        <div class="cart__items">
          <h3 style="text-align: center">Cart Contents</h3><br />
          { cart.map( item =>
              <div class="cart-item">
                {item.no+1}. {item.name}{"  "}${item.price}{"  "}
                <span style={remove} key={item.no} data-id={item.id} onClick={this.removeFromCart}> Remove </span>
              </div>
            )
          }
        </div>
        <br />
        <div class="cart__total">
          <h3 style="text-align: center">Total</h3>
          <div style="text-align: center">${this.getTotal()}</div>
        </div><br />
        {<div  style="margin:auto; text-align:center; max-width:350px">
          <div id="cc-form"></div>
            <input type="submit" value="Pay Now" onClick={() => this.PayNow()} />
            {
              this.state.responses.map(res => <div>{res}</div>)
            }
        </div>}
      </div>
    );
  }
}
