import React, {Component} from 'react';
import {Alert, Button, Col, Jumbotron, Card} from "react-bootstrap";
import './registration.scss';
class Registration extends Component {

  state = {
    fName: '',
    lName: '',
    gender: 'Male',
    loyalty: 'Unavailable',
    creditCard: '',
    approved : false,
    date: new Date(new Date().toString()
      .split('GMT')[0]+' UTC').toISOString()
      .split('.')[0]
      .replace('T',' ')
  };

  componentDidMount() {
    const { getFact} = this.props;
    getFact();
  }

  submitHandler = event => {
    const { register } = this.props;
    event.preventDefault();
    if(!this.state.fName ||
      (!this.state.lName)||
      (!this.state.creditCard &&
        this.state.loyalty.includes("Credit Card"))) {
      event.target.className += ' was-validated';
    } else {
      register(this.state);
      event.target.className = '';
      this.setState({
        fName: '',
        lName: '',
        gender: 'Male',
        loyalty: 'Unavailable',
        creditCard: '',
        approved : true,
        date: ''
      },() => setTimeout(() => this.setState({
        approved : false
      }), 1000))
    }
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      fName,
      lName,
      gender,
      loyalty,
      creditCard,
      approved,
    } = this.state;

    const {
      getFact,
      fact,
    } = this.props;

    return (
      <div>
        <Jumbotron>
          <form
            className="needs-validation"
            onSubmit={this.submitHandler}
            noValidate
          >
            <Col>
              <Col md="6" className="form">
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  First name
                </label>
                <input
                  value={fName}
                  name="fName"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder="First name"
                  required
                />
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Last name
                </label>
                <input
                  value={lName}
                  name="lName"
                  onChange={this.changeHandler}
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Gender
                </label>
                <select
                  className="form-control"
                  id="client-gender"
                  name="gender"
                  onChange={this.changeHandler}
                  value={gender}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Loyalty Program
                </label>
                <select
                  className="form-control"
                  id="client-loyalty"
                  name="loyalty"
                  onChange={this.changeHandler}
                  value={loyalty}
                  required
                >
                  <option value="Unavailable">Unavailable</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Mobile App">Mobile App</option>
                </select>
                {loyalty === 'Credit Card' &&
                <input
                  value={creditCard}
                  name="creditCard"
                  onChange={this.changeHandler}
                  type="text"
                  id="creditCard"
                  className="form-control"
                  placeholder="xxxx-xxxx-xxxx-xxxx"
                  required
                />
                }
                {approved &&
                <Alert variant="success">
                  <Alert.Heading>Success 🤗🤗🤗</Alert.Heading>
                </Alert>
                }
                <Button className="form__submit" color="primary" type="submit">
                  Register
                </Button>
              </Col>
            </Col>
          </form>
        </Jumbotron>
        <Card className="text-center">
          <Card.Header>MEOW FACTS</Card.Header>
          <Card.Body>
            <Card.Text>
              {fact}
            </Card.Text>
            <Button variant="primary" onClick={() => getFact()}>One More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Registration;
