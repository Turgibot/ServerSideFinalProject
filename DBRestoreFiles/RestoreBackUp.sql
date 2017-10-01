RESTORE FILELISTONLY
FROM DISK = 'D:\Ruppin.bak'


restore database Ruppin
from disk = 'D:\Ruppin.bak'
WITH MOVE 'Ruppin' TO 'D:\Projects\DB\Ruppin.mdf',
MOVE 'Ruppin_log' TO 'D:\Projects\DB\Ruppin_log.ldf'