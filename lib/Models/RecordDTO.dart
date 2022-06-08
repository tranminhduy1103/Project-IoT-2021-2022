class RecordDTO {
  int id = 0;
  String dateIssued = DateTime.now().toString();
  double temperature = 0.0;
  double humidity = 0.0;
  String? userId;

  RecordDTO(
      this.id, this.dateIssued, this.temperature, this.humidity, this.userId);

  RecordDTO.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    dateIssued = json['dateIssued'];
    temperature = json['temperature'];
    humidity = json['humidity'];
    userId = json['userId'];
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'dateIssued': dateIssued,
        'temperature': temperature,
        'humidity': humidity,
        'userId': userId
      };
}
