import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:iot_mobile/IDHandler.dart';
import 'package:iot_mobile/api/Repository/record_repo.dart';

class Current extends StatefulWidget {
  const Current({Key? key}) : super(key: key);

  @override
  State<Current> createState() => _CurrentState();
}

class _CurrentState extends State<Current> {
  int $deg = 0x00B0;
  late double temp = 0;
  late double humid = 0;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => init());
  }

  Future init() async {
    String id = await IDHandler.getString('userId');
    var record = await RecordRepository.getLatest(id);
    var _temp = record.temperature;
    var _humid = record.humidity;

    setState(() {
      temp = _temp;
      humid = _humid;
    });
  }

  refresh() async {
    String id = await IDHandler.getString('userId');
    var record = await RecordRepository.getLatest(id);
    var _temp = record.temperature;
    var _humid = record.humidity;
    setState(() {
      temp = _temp;
      humid = _humid;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(5),
      child: Align(
        alignment: Alignment.topRight,
        child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          const Text(
            'Current Status',
            style: TextStyle(fontSize: 40),
          ),
          RichText(
            text: TextSpan(
              children: [
                const WidgetSpan(
                  child: Icon(CupertinoIcons.thermometer, size: 35),
                ),
                TextSpan(
                    text: temp.toString(),
                    style: const TextStyle(fontSize: 50, color: Colors.black)),
                TextSpan(
                    text: "${String.fromCharCodes([176])}C",
                    style: const TextStyle(fontSize: 50, color: Colors.black)),
              ],
            ),
          ),
          RichText(
            text: TextSpan(
              children: [
                const WidgetSpan(
                  child: Icon(CupertinoIcons.drop, size: 35),
                ),
                TextSpan(
                    text: humid.toString(),
                    style: const TextStyle(fontSize: 50, color: Colors.black)),
                const TextSpan(text: "%", style: TextStyle(fontSize: 50, color: Colors.black)),
              ],
            ),
          ),
          ElevatedButton(
            onPressed: refresh, 
            child: const Text('Refresh', style: TextStyle(fontSize: 20),), 
            )
        ]),
      ),
    );
  }
}
