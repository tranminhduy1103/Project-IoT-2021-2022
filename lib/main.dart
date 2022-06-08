import 'package:flutter/material.dart';
import 'package:iot_mobile/IDHandler.dart';
import 'package:iot_mobile/api/Repository/authen_repo.dart';
import './pages/MainPage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Iot - Dynamic',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LoginPage(title: 'Login'),
      routes: {
        '/login': (context) => LoginPage(title: 'Login'),
        '/app': (context) => MainPage()
      },
    );
  }
}

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _passwordVisible = false;

  void login({username, password}) async {
    var user = await Auth.login(username: username, pass: password);

    if(user != null) {
      await IDHandler.setString('userId', user['id']);
      Navigator.pushNamed(context, '/app');
    }
  }

  @override
  void initState() {
    super.initState();
    _passwordVisible = false;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   centerTitle: true,
      //   title: Text(
      //     widget.title,
      //     style: const TextStyle(),
      //   ),
      // ),
      body: Container(
        alignment: Alignment.center,
        decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage("lib/assets/background.png"),
            fit: BoxFit.cover,
          ),
        ),
        padding: const EdgeInsets.fromLTRB(10, 10, 10, 0),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          const Text(
            "Welcome! Please login",
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.w600),
          ),
          Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                TextFormField(
                  //uesrname
                  keyboardType: TextInputType.text,
                  controller: _usernameController,
                  decoration: const InputDecoration(
                    labelText: 'Username',
                    hintText: 'Enter your email',
                  ),
                  validator: (String? value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your username!';
                    }
                    return null;
                  },
                ),
                TextFormField(
                  //password
                  keyboardType: TextInputType.text,
                  controller: _passwordController,
                  obscureText: !_passwordVisible,
                  decoration: InputDecoration(
                      labelText: 'Password',
                      hintText: 'Enter your password',
                      suffixIcon: IconButton(
                        icon: Icon(
                          _passwordVisible
                              ? Icons.visibility
                              : Icons.visibility_off,
                          color: Theme.of(context).primaryColorDark,
                        ),
                        onPressed: () {
                          setState(() {
                            _passwordVisible = !_passwordVisible;
                          });
                        },
                      )),
                  validator: (String? value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your password!';
                    }
                    return null;
                  },
                ),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16.0),
                  child: ElevatedButton(
                    onPressed: () {
                      // Validate will return true if the form is valid, or false if
                      // the form is invalid.
                      if (_formKey.currentState!.validate()) {
                        login(
                            username: _usernameController.text,
                            password: _passwordController.text);
                      }
                    },
                    style: ButtonStyle(
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      )),
                      padding: MaterialStateProperty.all<EdgeInsets>(
                          const EdgeInsets.symmetric(
                              horizontal: 50, vertical: 15)),
                    ),
                    child: const Text(
                      'Login',
                      style: TextStyle(fontSize: 24),
                    ),
                  ),
                ),
              ],
            ),
          )
        ]),
      ),
    );
  }
}
