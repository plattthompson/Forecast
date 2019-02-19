import React from 'react';
import Titles from "./components/Titles";
import Icons from "./components/Icons";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "17aaa9e50996f9276ef3630cf1a15ccb";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    id: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (data.cod >= 400 ) {
      this.setState({error: "Please enter a valid city and country."})
    } else if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        id: data.weather[0].id,
        error: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <div className="title-subcontainer">
                    <Titles />
                  </div>
                  <div className="icon-container">
                    <Icons id={this.state.id}/>
                  </div>
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather 
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;