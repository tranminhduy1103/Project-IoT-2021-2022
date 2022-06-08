import 'dart:io';
import 'package:http/http.dart' as http;
import 'package:localstorage/localstorage.dart';

var defaultUrl = 'https://health-record-api.azurewebsites.net/api';
//var defaultController = '/test';
//var defaultAction = '/test';
//var localUrl = '';

class Api {
  static Uri createUrl(String controller, String action) {
    var url = Uri.parse("$defaultUrl/$controller/$action");
    return url;
  }

  static Future post(dynamic body, String controller, String action) async {
    var url = createUrl(controller, action);
    //var token = LocalStorage("token").toString();
    final response = await http.post(url,
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          //HttpHeaders.authorizationHeader: "Bearer $token"
        },
        body: body);
    return response;
  }

  static Future get(String controller, String action) async {
    var url = createUrl(controller, action);
    //var token = LocalStorage("token").toString();
    final response = await http.get(url, headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
      //HttpHeaders.authorizationHeader: "Bearer $token"
    });
    return response;
  }

  static Future update(dynamic body, String controller, String action) async {
    var url = createUrl(controller, action);
    //var token = LocalStorage("token").toString();
    final response = await http.put(url,
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          //HttpHeaders.authorizationHeader: "Bearer $token"
        },
        body: body);
    return response;
  }

  static Future delete(dynamic body, String controller, String action) async {
    var url = createUrl(controller, action);
    //var token = LocalStorage("token").toString();
    final response = await http.delete(url,
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
          //HttpHeaders.authorizationHeader: "Bearer $token"
        },
        body: body);
    return response;
  }
}
