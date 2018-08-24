'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({liked: true}) },
            'Like'
        )
    }
}

class ListBtn extends React.Component {
    render() {
        return (
            <div class="list-btn"><button onClick="">Default</button></div>
        )
    }
}

/*const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);*/

document.querySelectorAll('.like_button_container').forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
})

class OneBntJSX extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>Like</button>
    );
  }
}


/*TODO: Begin code page*/
const user = {
        firstName: 'Quân',
        lastName: 'Nguyễn Như'
    },
    note_1 = '1. function phải được khai báo trong constructor() hoặc viết trực tiếp trong constructor()';

function getGreeting(user) {
  let text;
  if (user) {
    text = <span>Hello, {formatName(user)}!</span>;
  } else {
    text = <span>Hello, Doctella</span>;
  }
  return text;
}
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class ClockItem extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      counter: 1
    };
  }
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount () {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });

  }
  render() {
    return (
      <h2 className="clock-online">It is {this.state.date.toLocaleTimeString()}</h2>
    )
  }
}

class Toggle extends React.Component {
  constructor () {
    super();
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    /*this.setState({
      isToggleOn: !this.state.isToggleOn
    })*/
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render () {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    );
  }
}


function UserGreating (props) {
  if (!props.isShowGreating) return null;

  return <h1>Welcom back!</h1>
}
function GuestGreating (props) {
  if (!props.isShowGreating) return null;

  return <h1>Please Sign up</h1>
}
function Greating (props) {
  if (props.isLoggedIn) {
    return <div><UserGreating isShowGreating={props.isShowGreating} /></div>
  } else {
    return <div><GuestGreating isShowGreating={props.isShowGreating} /></div>
  }
}
function LogoutBtn(props) {
  return <button onClick={props.onClick}>Logout</button>
}
function LoginBtn(props) {
  return <button onClick={props.onClick}>Login</button>
}
function ControlBtn(props) {
  return <button onClick={props.onClick}>{props.isShowGreating ? 'Hide' : 'Show'} Greating !</button>
}
class LoginControl extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn : true,
      isShowGreating: true
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleControll = this.handleControll.bind(this);
  }
  handleLogout() {
    this.setState({
      isLoggedIn: false
    })
  }
  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }
  handleControll() {
    this.setState({
      isShowGreating: !this.state.isShowGreating
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    /*
    let button;
    if (isLoggedIn) {
      button = <LogoutBtn onClick={this.handleLogout} />
    } else {
      button = <LoginBtn onClick={this.handleLogin} />
    }
    // {true && expression}
    // {false && expression}
    */
    return (
      <div>
        <Greating isLoggedIn={isLoggedIn} isShowGreating={this.state.isShowGreating}/>
        {isLoggedIn ? (
          <LogoutBtn onClick={this.handleLogout} />
        ) : (
          <LoginBtn onClick={this.handleLogin} />
        )}
        <ControlBtn isShowGreating={this.state.isShowGreating} onClick={this.handleControll}/>
      </div>
    );
  }
}

function OneUse(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  );
}
function IconSort(props) {

  if (props.label != props.curentSort) return null;

  if (!props.sortStatus) {
    return (<span className="icon-sort desc"></span>);
  } else {
    return (<span className="icon-sort"></span>);
  }
}
class DemoListsKeys extends React.Component {
  constructor() {
    super();
    this.SortDataAge = this.SortDataAge.bind(this);
    this.SortDataName = this.SortDataName.bind(this);
    this.SortData4Id = this.SortData4Id.bind(this);
    this.state = {
      listUser: [
        {'id': 1,'name': 'Vuong', 'age': '28'},
        {'id': 2,'name': 'Long', 'age': '29'},
        {'id': 3,'name': 'Quan', 'age': '26'},
        {'id': 4,'name': 'Duyen', 'age': '34'}
      ],
      sortStatus: {
        age: true,
        name: true,
        id: false
      },
      curentSort: "id"
    };
  }
  SortDataAge() {
    const listUser = this.state.listUser.sort((a,b)=> a.age - b.age);
    const ageStatus = this.state.sortStatus.age;
    if (ageStatus) {
      this.state.sortStatus.age = false;
    } else {
      this.state.sortStatus.age = true;
      listUser.reverse();
    }

    this.setState({
      listUser: listUser
    });
    this.state.curentSort = 'age';
  }
  SortDataName() {
    const listUser = this.state.listUser;
    const nameStatus = this.state.sortStatus.name;

    listUser.sort((a,b)=> {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    if (nameStatus) {
      this.state.sortStatus.name = false;
    } else {
      this.state.sortStatus.name = true;
      listUser.reverse();
    }

    this.setState({
      listUser: listUser
    });
    this.state.curentSort = 'name';
  }
  SortData4Id() {
    const listUser = this.state.listUser.sort((a,b)=> a.id - b.id);
    const idStatus = this.state.sortStatus.id;
    if (idStatus) {
      this.state.sortStatus.id = false;
    } else {
      this.state.sortStatus.id = true;
      listUser.reverse();
    }

    this.setState({
      listUser: listUser
    });
    this.state.curentSort = 'id';
  }
  render() {
    const listUser = this.state.listUser;

    return(
      <table className="list-member">
        <thead>
          <tr>
            <td>STT</td>
            <td onClick={this.SortData4Id}>ID <IconSort label="id" sortStatus={this.state.sortStatus.id} curentSort={this.state.curentSort} /></td>
            <td onClick={this.SortDataName}>Name <IconSort label="name" sortStatus={this.state.sortStatus.name} curentSort={this.state.curentSort} /></td>
            <td onClick={this.SortDataAge}>Age <IconSort label="age" sortStatus={this.state.sortStatus.age} curentSort={this.state.curentSort} /></td>
          </tr>
        </thead>
        <tbody>
          {listUser.map((user, i) => (
            <OneUse index={i} key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    );
  }
}

class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      description: '',
      gender: "1",
      listMulti: [],
      isCheck: false
    };
    this.inputRef = React.createRef(); //Uncontrolled Components

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit Form !');
    console.log(this.inputRef.current.value);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form className="demo-forms" onSubmit={this.handleSubmit}>
        <div className="row">
            <input type="text" name="userName" className="item-form" placeholder="Fullname" value={this.state.userName} onChange={this.handleInputChange} />
        </div>
        <div className="row">
          <textarea value={this.state.description} name="description" className="item-form" placeholder="Description" onChange={this.handleInputChange} />
        </div>
        <div className="row">
          <select value={this.state.gender} name="gender" onChange={this.handleInputChange} >
            <option value="1">Nam</option>
            <option value="2">Nữ</option>
          </select>
        </div>
        <div className="row">
          <select multiple={true} name="listMulti" value={this.state.listMulti} onChange={this.handleInputChange} >
            <option value="Facebook">Facebook</option>
            <option value="Youtube">Youtube</option>
            <option value="Google">Google</option>
            <option value="Doctella">Doctella</option>
            <option value="Twiter">Twiter</option>
          </select>
        </div>
        <div className="row">
          <input type="checkbox" name="isCheck" onChange={this.handleInputChange} checked={this.state.isCheck}/>
        </div>
        <div className="row">
          <input type="text" ref={this.inputRef} />
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>

      </form>
    );
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
function BoilingVerdict (props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className="lifting-state">
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

function CalBoil(props) {
  if (props.temperature == '') return '';

  if (props.temperature >= 100) {
    return <p>Nhiệt độ này nước sẽ sôi</p>;
  }
  return <p>Nhiệt độ này nước không sôi</p>;
}
class InputTemper extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.props.setTemperature(this.props.scale, e.target.value);
  }
  render() {
    const scaleName = (this.props.scale == 'c') ? scaleNames.c : scaleNames.f;
    return (
      <fieldset className="inpTemera">
        <legend>Enter {scaleName}: </legend>
        <input type="text" value={this.props.temperature} onChange={this.handleInputChange} />
      </fieldset>
    );
  }
}
class BoilTemperature extends React.Component {
  constructor() {
    super();
    this.state = {
      temperature: {
        k: "c",
        v: ''
      }
    }
    this.setTemperature = this.setTemperature.bind(this);
  }
  setTemperature(k, temper) {
    let temperature;
    if (k == "c") {
      temperature= {k: "c", v: temper};
    } else {
      temperature= {k: "k", v: temper};
    }
    this.setState({
      temperature: temperature
    });
  }
  render() {
    const temperature = this.state.temperature;
    const celsius = (this.state.temperature.k == 'k') ? tryConvert(temperature.v, toCelsius) : temperature.v;
    const fahrenheit = (this.state.temperature.k == 'c') ? tryConvert(temperature.v, toFahrenheit) : temperature.v;
    return (
      <div className="boil-temperature">
        <InputTemper scale= "c" temperature= {celsius} setTemperature={this.setTemperature} />
        <InputTemper scale= "f" temperature= {fahrenheit} setTemperature={this.setTemperature} />
        <CalBoil temperature={celsius}/>
      </div>
    );
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    //this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  componentDidMount() {
    //this.textInput.current.focusTextInput();
  }
  focusTextInput() {
    this.props.inputRef.current.focus();
    //console.log(this.textInput.current.value);
  }
  render() {
    const refFan = React.createRef();
    return(
      <div>
        <input type="text" ref={this.props.inputRef} />
        <input type="button" value="Focus the text input" onClick={this.focusTextInput} />
      </div>
    );
  }
}
// function CustomTextInput(props) {
//   let textInput = React.createRef();
//   function focusTextInput() {
//     textInput.current.focus();
//   }
//   return(
//       <div>
//         <input type="text" ref={textInput} />
//         <input type="button" value="Focus the text input" onClick={focusTextInput} />
//       </div>
//     );
// }
class AutoFocusTextInput  extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount() {
    //this.textInput.current.focusTextInput();
    this.textInput.current.focus();
  }
  render() {
    return (
      <CustomTextInput inputRef={this.textInput} />
    );
  }
}

class OuterClickExample extends React.Component {
  constructor() {
    super();
    this.toggleContainer = React.createRef();
    this.state = {
      name: '',
      isOpen: false,
      isOpen2: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickHandler2 = this.onClickHandler2.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }
  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }
  onClickHandler2() {
    this.setState(currentState => ({
      isOpen2: !currentState.isOpen2
    }));
  }
  handleInput(e) {
    this.setState({name: e.target.value});
  }
  onClickOutsideHandler(e) {
    if (this.state.isOpen2 && !this.toggleContainer.current.contains(e.target)) {
      this.setState({ isOpen2: false });
    }
  }
  // We close the popover on the next tick by using setTimeout.
  // This is necessary because we need to first check if
  // another child of the element has received focus as
  // the blur event fires prior to the new focus event.
  onBlurHandler() {console.log('Blur');
    this.setState({
      isOpen: false
    });
  }

  // If a child receives focus, do not close the popover.
  onFocusHandler() {console.log('Focus');
    //clearTimeout(this.timeOutId);
  }
  render() {
    return(
      <div>
        <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler} className="box-demo-1">
          <input type="text" value={this.state.name} onChange={this.handleInput} /><br/>
          <button onClick={this.onClickHandler} aria-haspopup="true" aria-expanded={this.state.isOpen}>Select an option</button>
          {this.state.isOpen ? (
            <ul className="toggle-box">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null}
        </div>
        <button>Load the option</button><br/>
        <button>Remove the option</button><br/>
        <div className="box-demo-1" ref={this.toggleContainer}>
          <button onClick={this.onClickHandler2}>Select the option 2</button>
          {this.state.isOpen2 ? (
            <ul className="toggle-box">
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          ) : null}
        </div>
        <p>Lưu ý: Linh hoạt sử dụng Refs với các sự kiện khác: onBlur, onFocus, ... </p>
      </div>
    );
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <div id="page-content">
        <h3>{getGreeting(user)}</h3>
        <div><OneBntJSX /></div><br />
        {note_1}
        <div className="item-home">
          <div className="title">---------Lifecycle----------</div>
          <ClockItem />
        </div>
        <div className="item-home">
          <div className="title">---------Handling Events----------</div>
          <Toggle />
        </div>
        <div className="item-home">
          <div className="title">---------Conditional Rendering----------</div>
          <LoginControl />
        </div>
        <div className="item-home">
          <div className="title">---------Lists and Keys----------</div>
          <DemoListsKeys />
        </div>
        <div className="item-home">
          <div className="title">---------Forms----------</div>
          <FormDemo />
        </div>
        <div className="item-home">
          <div className="title">---------Lifting State Up----------</div>
          <BoilTemperature />
        </div>

        <div className="advanced-content">
          <h2 className="title">Advanced Guides</h2>
          <h3>1. Refs and the DOM</h3>
          <AutoFocusTextInput />
          <h3>2. Accessibility</h3>
          <h4>2.1. Mouse and pointer events</h4>
          <OuterClickExample  />

          <h3>3. Code-Splitting</h3><span><a href="assets/themes/demo-1.php">Demo</a></span>

        </div>
      </div>
    );
  }
}
let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);
