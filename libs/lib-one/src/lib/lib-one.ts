import { startOfDay } from 'date-fns';

export function libOne(): string {
  console.log('this is lib-one', startOfDay(new Date()));
  return 'lib-one';
}
