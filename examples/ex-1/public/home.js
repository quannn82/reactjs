

class Exam1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.EventClick = this.EventClick.bind(this);
  }
  EventClick() {
    this.state.num = this.state.num + 1;
    this.setState(this.state);
  }
  render() {
    return (
        <button onClick={this.EventClick}>Click ({this.state.num})</button>
    );
  }
}
class Exam2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 1
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }
  next() {
    this.setState({
      img: (this.state.img == 5) ? 1 : (this.state.img + 1)
    });
  }
  back() {
    this.setState({
      img: (this.state.img == 1) ? 5 : (this.state.img - 1)
    });
  }
  render() {
    return (
      <div className="album-images">
        <img src={"images/" + this.state.img + ".png"} />
        <hr />
        <button onClick={this.back}>Back</button>
        <button onClick={this.next}>Next</button>
      </div>
    );
  }
}
class Exam3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 1
    };
    this.changeImage = this.changeImage.bind(this);
  }
  changeImage() {
    this.setState({
      img: (this.state.img%5 + 1)
    });
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.changeImage(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div className="album-images">
        <img src={"images/" + this.state.img + ".png"} />
      </div>
    );
  }
}
function Note (e) {
  return <li>{e.data}</li>;
}
class NoteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpName: '',
      notes: []
    }

    this.addMemb = this.addMemb.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    var v = e.target.value;
    this.state.inpName = v;
    this.setState(this.state);
  }
  addMemb() {
    var memb = this.state.inpName;
    if (memb != '') {
      this.state.notes.push(memb);
      this.state.inpName = '';

      this.setState(this.state);
    }

  }
  render() {
    return (
      <div className="note-list">
        <p>{this.props.children}</p>
        <input type="text" value={this.state.inpName} onChange={this.handleChange} />
        <button onClick={this.addMemb}>Thêm thành viên</button>
        <ul>
        {this.state.notes.map(function(note, i){
            return <Note key={i} data={note} />
        })}
        </ul>
      </div>
    );
  }
}
class FormNhap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: ''
    }
    this.getName = this.getName.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getName() {
    //console.log(this.state.user_name);
    console.log(this.refs.aaaaaaaaaaa.value);
  }
  handleChange(e) {
    let name = e.target.name,
        value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <a href="http://gooogle.com" target="blank">Click here !</a>
        <input type="text" ref="aaaaaaaaaaa" name="user_name" onChange={this.handleChange} />
        <button onClick={this.getName}>Get Name</button>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <FormNhap />
        <hr />
        <Exam1 />
        <Exam2 />
        <hr/>
        <Exam3 />
        <hr/>
        <NoteList>Danh sách thành viên:</NoteList>
        <hr/>

      </div>
    );
  }
};

ReactDOM.render( <App /> , document.getElementById("root"));
