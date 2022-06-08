import 'dart:convert';
import 'package:iot_mobile/api/api_package.dart';

class Auth {
  Auth();

  static dynamic readStatusCode(dynamic response) {
    dynamic data = '';
    response.statusCode == 200
        ? data = jsonDecode(response.body)
        : print('Fail${response.statusCode}');
    return data;
  }

  static Future login({required String username, required String pass}) async {
    final response = await Api.post(
        jsonEncode(<String, String>{
          'userName': username,
          'password': pass,
        }),
        '/Auth',
        '/Login');
    var data = readStatusCode(response);
    return data;
  } // login
}
