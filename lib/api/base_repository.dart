import 'dart:convert';
import 'package:iot_mobile/Models/RecordDTO.dart';
import 'package:iot_mobile/api/api_package.dart';
// import 'package:iot_mobile/api/ibase_repository.dart';

class BaseRepository {
  BaseRepository();
  static List<String> actions = [
    'Delete',
    'Create',
    'Update',
    'GetAll',
    'GetAllById',
    'UpdateList',
    'GetListById',
    'DeleteList'
  ];
  static dynamic readStatusCode(dynamic response) {
    dynamic data = '';
    response.statusCode == 200
        ? data = jsonDecode(response.body)
        : print('Fail${response.statusCode}');
    return data;
  }

  static Future create(dynamic body, String controller) async {
    final response = await Api.post(body, controller, 'Create');
    return response;
  }

  static Future delete(List<String> listId, String controller) async {
    Map<String, dynamic> id = {"listId": listId};
    var body = jsonEncode(id);
    final response = await Api.delete(body, controller, '/Delete');
    return response;
  }

  static Future getAll(String controller) async {
    List collection = [];
    final response = await Api.get(controller, '/GetAll');
    collection = readStatusCode(response).cast<Map<String, dynamic>>();
    return collection;
  }

  static Future getById({required int id, required String controller}) async {
    dynamic item = '';
    final response = await Api.get(controller, '/GetById/$id');
    item = readStatusCode(response);
    return item;
  }

  static Future getAllByUserId(String userId, String controller) async {
    List collection = [];
    final response = await Api.get(controller, '/GetByUserId/$userId');
    collection = readStatusCode(response).cast<Map<String, dynamic>>();
    return collection;
  }

  static Future getListById(List<String> listId, String controller) async {
    List collection = [];
    Map<String, dynamic> id = {"listId": listId};
    var body = jsonEncode(id);
    final response = await Api.post(body, controller, '/GetListById');
    collection = readStatusCode(response).cast<Map<String, dynamic>>();
    return collection;
  }

  static Future<RecordDTO> getLatest(String id, String controller) async {
    final response = await Api.get(controller, '/GetLatest/$id');
    var data = readStatusCode(response);
    RecordDTO _dto = RecordDTO.fromJson(data);
    return _dto;
  }

  static Future update(dynamic body, String controller) async {
    final response = await Api.update(body, controller, '/Update');
    return response;
  }

  // static Future search(dynamic body, String url, String controller) async {
  //   var route = Api.createUrl(url + controller + '/Search');
  //   final response = await Api.post(body, route);
  //   return readStatusCode(response).cast<Map<String, dynamic>>();
  // }
}
