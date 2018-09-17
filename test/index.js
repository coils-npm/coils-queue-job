const CoilsRedis = require('coils-redis')
let QueueManager = require('../lib/index')
let application = {}
CoilsRedis.mounted(application)
QueueManager.mounted(application)

application._queueJob.changeStatus('quiet')
application._queueJob.changeConcurrency(19)
// application._queueJob.add('HelloJob').set({wait: 200}).perform_now('world')
application._queueJob.add('HelloJob').set({wait: 0}).perform_later('world')
application._queueJob.add('HelloJob').set({wait: 5}).perform_later('world')
application._queueJob.add('HelloJob').set({wait: 5}).perform_later('world')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after1')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after2')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after3')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after4')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after5')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after6')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after7')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after8')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-afte9')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after10')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after11')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after12')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after13')
application._queueJob.add('HelloJob').set({wait: 10}).perform_later('world-after14')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after15')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after17')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after19')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after20')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after21')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after22')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after23')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after24')
application._queueJob.add('HelloJob').set({wait: 20}).perform_later('world-after25')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after26')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after27')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after28')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after29')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after30')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after31')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after32')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after33')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after34')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after35')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after36')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after37')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after38')
application._queueJob.add('HelloJob').set({wait: 30}).perform_later('world-after39')
application._queueJob.add('HelloJob').set({wait: 40}).perform_later('world-after40')
application._queueJob.add('HelloJob').set({wait: 40}).perform_later('world-after41')
application._queueJob.add('HelloJob').set({wait: 40}).perform_later('world-after42')
application._queueJob.add('HelloJob').set({wait: 40}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 41}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 42}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 43}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 44}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 45}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 46}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 47}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 48}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 59}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 50}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 51}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 52}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 53}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 54}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')
application._queueJob.add('HelloJob').set({wait: 55}).perform_later('world-after')