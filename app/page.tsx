import { 
  Card
} from "@/components/ui/card";
import Form from '@/components/ui/create-event-form';

export default function Home() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <main>
        <h1>when2meet2</h1>
        <Card className="w-auto">
            <Form />
        </Card>
      </main>
    </div>
  );
}