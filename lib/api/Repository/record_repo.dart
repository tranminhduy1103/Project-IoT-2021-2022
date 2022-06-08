import 'dart:convert';
import 'package:iot_mobile/Models/RecordDTO.dart';
import 'package:iot_mobile/api/api_package.dart';

import '../base_repository.dart';

class RecordRepository extends BaseRepository {
  static String controller = '/Record';

  static Future<List<RecordDTO>> getAll() async {
    var json = await BaseRepository.getAll(controller);
    List<RecordDTO> data = json.map((j) => RecordDTO.fromJson(j)).toList();
    return data;
  }

  static Future<RecordDTO> getById(int id) async {
    var json = await BaseRepository.getById(id: id, controller: controller);
    RecordDTO data = RecordDTO.fromJson(json);
    return data;
  }

  static Future<List<RecordDTO>> getListById(List<String> listId) async {
    var json = await BaseRepository.getListById(listId, controller);
    List<RecordDTO> data = json.map((j) => RecordDTO.fromJson(j)).toList();
    return data;
  }

  static Future<List<RecordDTO>> getListByUserId(String userId) async {
    var json = await BaseRepository.getAllByUserId(userId, controller);
    List<RecordDTO> data = json.map((j) => RecordDTO.fromJson(j)).toList();
    return data;
  }

  static Future<RecordDTO> getLatest(String id) async {
    RecordDTO data = await BaseRepository.getLatest(id, controller);
    return data;
  }

  // static Future<List<RecordDTO>> getListByUserId(int userId) async {
  //   var json = await BaseRepository.getListById(listId, controller);
  //   List<RecordDTO> data = json.map((j) => RecordDTO.fromJson(j)).toList();
  //   return data;
  // }

  static Future create(RecordDTO dto) async {
    var response =
        await BaseRepository.create(jsonEncode(dto.toJson()), controller);
    return response;
  }

  static Future update(RecordDTO dto) async {
    var response =
        await BaseRepository.update(jsonEncode(dto.toJson()), controller);
    return response;
  }

  static Future delete(List<String> id) async {
    var response = await BaseRepository.delete(id, controller);
    return response;
  }
}
