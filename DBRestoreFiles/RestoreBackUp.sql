RESTORE FILELISTONLY
FROM DISK = 'F:\Ruppin.bak'


restore database Ruppin
from disk = 'F:\Ruppin.bak'
WITH MOVE 'Ruppin' TO 'D:\Projects\DB\Ruppin.mdf',
MOVE 'Ruppin_log' TO 'D:\Projects\DB\Ruppin_log.ldf'