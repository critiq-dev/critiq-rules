import multer from 'multer';
import { nanoid } from 'nanoid';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/tmp/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${nanoid()}.bin`);
  },
});

export default storage;
