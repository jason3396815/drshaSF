import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
	/*constructor (props) {
		super(props);
		state = {
			cart: []
		}
	}*/
	render() {
		// find name in user profile
		const profile = this.props.profile;
		const cart = this.props.cart
		//const cart = g.cart
		let cartLength = 0
		if (cart !== undefined) cartLength = cart.length
		
		return (
			<header class="header">
				<h1>Master Sha Tao Center, San Francisco</h1>
				<nav>
					<Link activeClassName="active" href="/">Intro</Link>
					<Link activeClassName="active" href="/TaoHandsLP">Tao Hands</Link>
					<Link activeClassName="active" href="/events">Events</Link>
					{!g.intro && <Link activeClassName="active" href="/vod">VOD</Link>}
					{/*<Link activeClassName="active" href="/featured">Featured</Link>*/}
					<Link activeClassName="active" href="/login">
						{!('name' in profile) ? 'Login':`Me: ${profile.name}`}</Link>
				{g.ecommerce && !g.intro && <Link activeClassName="active" href="/cart">{ (cartLength==0) ? 'Cart': 'Checkout'}
						<svg
							class="button__image"
							width="24"
							height="24"
							viewBox="0 -2 24 24">
							<path style={ (cartLength) ? 
								"fill:#FFD700;":"fill:#FFFFFF;" }
								d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,
								2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,
								11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,
								17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,
								14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,
								12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,
								1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,
								2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
						</svg>
						{cartLength}
					</Link>}
				</nav>
			</header>
		);
	}
}
