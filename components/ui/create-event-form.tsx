import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Form() {
  return (
    <>
      <Label htmlFor='name'> 
        Event Name
      </Label>
      <Input id='name' type='text' placeholder='Event Name' />
      <Label htmlFor='date'> 
        Dates
      </Label>
      <Input id='date' type='date' placeholder='Event Name' />
      <Label htmlFor='time'> 
        Time
      </Label>
      <Input id='time' type='time' placeholder='Event Name' />
      <Input id='time' type='time' placeholder='Event Name' />
      <Label htmlFor='zone'> 
        Time Zone
      </Label>
      <Input id='zone' type='datetime-local' placeholder='zoneee' />
    </>
  )
}