import 'package:shared_preferences/shared_preferences.dart';

class IDHandler {
  static Future<String> getString(String key) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    return preferences.getString(key).toString();
  }

  static Future<List<String>> getStringList(String key) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    return preferences.getStringList(key)!.toList();
  }

  static Future<int> getInt(String key) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    return preferences.getInt(key)!.toInt();
  }

  static Future setString(String key, String value) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    preferences.setString(key, value);
  }

  static Future setInt(String key, int value) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    preferences.setInt(key, value);
  }

  static Future setStringList(String key, List<String> value) async {
    SharedPreferences preferences = await SharedPreferences.getInstance();
    preferences.setStringList(key, value);
  }
}
