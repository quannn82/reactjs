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
    note_1 = 'Lưu ý 1: Sử dụng dấu nháy kép cho chuỗi, dấu ngoặc nhọn cho biến hoặc biểu thức javascript';

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
      listMulti: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDes = this.handleChangeDes.bind(this);
    this.handleChangeGender = (event) => {
      this.setState({gender: event.target.value});
    }
    this.handleChangeMulti = (e) => {
      let options = e.target.options,
          value = [];
      for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      this.setState({listMulti: value});
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Submit Form !');
  }
  handleChange(event) {
    this.setState({userName: event.target.value});
  }
  handleChangeDes(event) {
    this.setState({description: event.target.value});
  }

  render() {
    return(
      <form className="demo-forms" onSubmit={this.handleSubmit}>
        <div className="row">
            <input type="text" className="item-form" placeholder="Fullname" value={this.state.userName} onChange={this.handleChange} />
        </div>
        <div className="row">
          <textarea value={this.state.description} className="item-form" placeholder="Description" onChange={this.handleChangeDes} />
        </div>
        <div className="row">
          <select value={this.state.gender} onChange={this.handleChangeGender} >
            <option value="1">Nam</option>
            <option value="2">Nữ</option>
          </select>
        </div>
        <div className="row">
          <select multiple={true} value={this.state.listMulti} onChange={this.handleChangeMulti} >
            <option value="Facebook">Facebook</option>
            <option value="Youtube">Youtube</option>
            <option value="Google">Google</option>
            <option value="Doctella">Doctella</option>
            <option value="Twiter">Twiter</option>
          </select>
        </div>
        <div className="row">
          <input type="submit" value="Submit" />
        </div>

      </form>
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
      </div>
    );
  }
}
let domContainer = document.querySelector('#root');
ReactDOM.render(<MyApp />, domContainer);
