// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [{}],
//       user: {},
//     };
//   }

//   componentDidMount() {

//     Axios({
//       method: 'GET',
//       url: 'http://192.168.100.20:3000/api/users/14',
//       data: null,
//     }).then(res => {
//       console.log(res);
//     })
//     // Axios({
//     //   method: 'POST',
//     //   url: 'http://192.168.100.20:3000/api/users/14',
//     //   data: {
//     // firstName: 'Thu2',
//     // lastName: 'Nguyen',
//     // gender: 'female',
//     // email: 'nthu1@gmail.com',
//     // password: '123',
//     // number

//     // email: 'viet@gmail.com',
//     // password: '$2b$10$d2I2F2/MvCpazZ/mx6zq/usU2tK5aX83w9lB5CEQBP4p0LI8UrI52',
//     // { "firstName": "thu", "lastName": "Nguyen", "gender": "female", "email": "nthu@gmail.com", "password": "123", "number": "123456" }
//     //   }
//     // });

//     // callApi('users/14', 'GET', null).then(res => {
//     //   this.setState({ users: res.data.data })
//     // })
//   }

//   //   Check = () => {
//   //     var ten = this.refs.name.value;
//   //     if (ten == this.state.users.firstName)
//   //       alert("Đăng nhập thành công");
//   //     else
//   //       alert("Đăng nhập thất bại");
//   //   }

//   // Save = () => {
//   //   callApi('users/', 'POST', {
//   //     firstName: 'Thu',
//   //     lastName: 'Nguyen',
//   //     gender: "female",
//   //     email: "nthu@gmail.com",
//   //     password: "123",
//   //     number: "123456"
//   //   }).then(res => {
//   //     console.log(res);
//   //   })
//   // }

//   // CheckLogin = () => {
//   //   var inputUser = {
//   //     email: this.refs.email.value,
//   //     pass: this.refs.pass.value,
//   //   }

//   //   callApi('users/login2', 'POST', {
//   //     email: inputUser.email,
//   //     password: inputUser.pass
//   //   }).then(res => {
//   //     alert("Login successfully!!");
//   //   })
//   // }

//   render() {

//     // const users = this.state.users;
//     // users.map(function (user, index) {
//     //   console.log(user);
//     // })
//     return (
//       <div>
//         {/* <input type="text" ref="name"></input>
//         <button onClick={this.Check}>Check</button>
//         <br />
//         <button onClick={this.Save}>Save</button>
//         <br />
//         <input type="text" ref="email"></input>
//         <input type="text" ref="pass"></input>
//         <button onClick={this.CheckLogin}>Login</button> */}
//       </div>
//     )
//   }

// }