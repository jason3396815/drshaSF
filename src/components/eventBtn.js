import { h, Component } from 'preact';

export default class EventBtn extends Component {
    /*MonthDayFormat = (dates) => {
        if (dates != undefined)
            if (dates.length==1) return (dates[0].slice(5,))
            else return (dates[0].slice(5,)+" to "+dates[1].slice(5,));
		}*/
		formatMD = (date) => {
			let month = date.slice(5,7)
			let day = date.slice(8,10)
			month = month.replace(/^0+/, '') 			// remove leading zero
			day = day.replace(/^0+/, '')				// remove leading zero
			return month + '/' + day
		}
    MonthDayFormat = (dates) => {
			if (dates != undefined)
					if (dates.length==1) return this.formatMD(dates[0])
					else return (this.formatMD(dates[0])+" to "+this.formatMD(dates[1]));
	}
	render() {
			const addToCart = {
				cursor: 'pointer',
				color: 'black',
						backgroundColor: '#FFD700', //gold
			}
		
        const event = this.props.event
				const height="90";

        return (
            <div class="gridpic">
								<a class="pic" href=
									{('linkURL' in event) ? event.linkURL : `/event/${event.id}`} title={event.title}>
                    { (event.icon) || !('videos' in event) ?
                        <img class="pic" height={height}
                            src={`./image/${event.id}.jpg`}></img> 
                    :
                        <img class="pic" height={height} style="cursor: pointer;"
                            src={"https://i.ytimg.com/vi/"+event.videos[0].id+"/maxresdefault.jpg"}></img>
                    }
                </a>
                <div class="text">
									<p><a class="text" href=
									{('linkURL' in event) ? event.linkURL : `/event/${event.id}`} title={event.title}>
									{event.ongoing ? event.dates : 
													this.MonthDayFormat(event.dates)}
												<br />
												{event.title}
                    </a></p>
                    {g.ecommerce && ( 'register' in event ) && 
                        <div><span>${event.register.fee} </span><span style={addToCart} data-id={event.id} 
                            onClick={this.props.addToCart}>Add to Cart</span></div>}
                </div>
            </div>)}
}