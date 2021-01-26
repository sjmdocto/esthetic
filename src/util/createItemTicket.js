import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

/** Create a clothingItem ticket
 * @function createItemTicket
 * @return {object}
 */
const createItemTicket = () => {
  const key = uuidv4();
  const date = new Date();
  const time = date.getTime();
  let ticket = {
    key: key,
    date: time,
  };
  return ticket;
};

export default createItemTicket;
