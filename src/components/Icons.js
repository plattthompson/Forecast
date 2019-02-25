import React from "react";

class Icons extends React.Component {
		weatherSwitch(idCode) {
				switch(idCode) {
					case 800:
						return(
							<div>
								<div className="sunny"></div>
								<h3>Sunny</h3>
							</div>
							);
					case 701:
					case 721:
					case 741:
					case 771:
					case 801:
					case 802:
					case 803:
					case 804:
						return(
							<div>
								<div className="cloudy"></div>
								<h3>Bring a jacket</h3>
							</div>
							);
					case 300:
					case 301:
					case 302:
					case 310:
					case 311:
					case 312:
					case 313:
					case 314:
					case 321:
					case 500:
					case 501:
					case 502:
					case 503:
					case 504:
					case 511:
					case 520:
					case 521:
					case 522:
					case 531:
						return(
							<div>
								<div className="rainy"></div>
								<h3>Cats and dogs</h3>
							</div>
							);
					case 711:
					case 731:
					case 751:
					case 761:
					case 762:
						return(
							<div>
								<div className="smoke"></div>
								<h3>Bring a mask</h3>
							</div>
							);
					case 200:
					case 201:
					case 202:
					case 210:
					case 211:
					case 212:
					case 221:
					case 230:
					case 231:
					case 232:
					case 781:
						return(
							<div>
								<div className="stormy"></div>
								<h3 className="storm-align">I thought hurricane season was over</h3>
							</div>
							);
					case 600:
					case 601:
					case 602:
					case 611:
					case 612:
					case 615:
					case 616:
					case 620:
					case 621:
					case 622:
						return(
							<div>
								<div className="snowy"></div>
								<h3>Winter is coming</h3>
							</div>
							);
					default:
						return null;
					}
		}

	render() {
		return this.weatherSwitch(this.props.id);
	}
}

export default Icons;