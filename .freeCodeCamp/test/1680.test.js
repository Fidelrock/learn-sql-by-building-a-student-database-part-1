/*const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the correct command in the psql prompt', async () => {
    const lastLog = await getLastLog(true);
    const lastLog2 = await getLastLog();
    const query = /statement:select(\*|course)fromcourseswherecoursenoti?like'%a%'andcoursei?like'%%';/i;

    assert(query.test(lastLog) && /% %/.test(lastLog2) && /'%a%'/.test(lastLog) && !/ERROR/.test(lastLog));
  });
});*/
