import React, { Component } from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

class EditCard extends Component {
  constructor(props) {
    super(props);

    this.refToPointsInput = React.createRef();
    this.state = {
      value: [],
      name: this.props.estado[0].player,
      side: 'ace',
      points: '0',
      sides: [
        { key: 6, face: 'ace' },
        { key: 5, face: 'king' },
        { key: 4, face: 'queen' },
        { key: 3, face: 'jack' },
        { key: 2, face: 'ten' },
        { key: 1, face: 'nine' },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e, i) {
    let value = this.state.value.slice();
    value[i] = e.target.checked;

    for (let j = 0; j < 6; j++) {
      value[j] = false;
    }

    value[i] = true;
    this.setState({
      value,
      side: this.state.sides[i].face,
    });

    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (isFinite(String(this.state.points).trim() || NaN)) {
      this.props.onEditCard(this.state);
      this.setState({
        name: this.props.estado[0].player,
        points: '0',
      });
      this.refToPointsInput.current.value = '';
    }
    //console.log(this.props.score[this.state.name].ace);
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
    console.log(this.state.side);
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div className="float-left" style={{ width: '30%' }}>
        <form
          onSubmit={this.handleSubmit}
          className="card"
          style={{ background: '#3a3d41' }}>
          <div
            className="card-title text-center"
            style={{ background: '#1A1D20' }}>
            <h3 style={{ color: 'gold' }}>
              <strong>Add Score</strong>
            </h3>
          </div>
          <div className="form-group">
            <select
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}>
              {this.props.estado.map((x, y) => (
                <option key={y}>{x.player}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <Container>
              <Row xs={3}>
                {this.state.sides.map((item, i) => {
                  return (
                    <Col xs={12} sm={6} md={4} key={i}>
                      <input
                        checked={this.state.value[i]}
                        type="radio"
                        onChange={(e) => this.onChange(e, i)}
                      />
                      <div>
                        <label>{this.capitalize(item.face)}</label>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>

          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 50 }}
            overlay={
              <Tooltip id="editCard-overlay">Just numbers are accepted</Tooltip>
            }>
            <div className="form-group">
              <input
                type="text"
                name="points"
                className="form-control"
                ref={this.refToPointsInput}
                //value={this.state.points}
                onChange={this.handleInputChange}
                placeholder="Points"
              />
            </div>
          </OverlayTrigger>

          <button type="submit" pattern="[0-9]*" className="btn btn-success">
            Score
          </button>
        </form>
      </div>
    );
  }
}

export default EditCard;
